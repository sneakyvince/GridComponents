<?php
/**
 * Render dynamic block.
 *
 * @package CreatePlugin
 */

namespace CreatePlugin;

// Stop the hackers if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Render dynamic block in php.
 *
 * @since 1.0.0
 */
class Dynamic_Custom_Post_Type_With_Meta {
	/**
	 * Register class with appropriate WordPress hooks
	 */
	public static function register() {
		$instance = new self();
		add_action( 'init', array( $instance, 'register_dynamic_custom_post_type_with_meta' ) );
	}

	/**
	 * Registers the `esnext-example/dynamic-block` block on server.
	 */
	public function register_dynamic_custom_post_type_with_meta() {
		$path     = __DIR__ . '/block.json';
		$metadata = json_decode( file_get_contents( $path ), true );

		register_block_type(
			$metadata['name'],
			array_merge(
				$metadata,
				array(
					'render_callback' => array(
						new Dynamic_Custom_Post_Type_With_Meta(),
						'render',
					),
				)
			)
		);
	}

	/**
	 * Render dynamic block markup.
	 *
	 * @param Array  $attributes block attributes.
	 * @param String $content block inner content.
	 * @return string The dynamic block markup.
	 */
	public function render( $attributes, $content ) {

		$args = array(
			'post_type'        => $attributes['postType'],
			'numberposts'      => $attributes['postsToShow'],
			'post_status'      => 'publish',
			'order'            => $attributes['order'],
			'orderby'          => $attributes['orderBy'],
			'suppress_filters' => false,
		);

		if ( isset( $attributes['categories'] ) ) {
			$args['category__in'] = array_column( $attributes['categories'], 'id' );
		}

		$recent_posts = get_posts( $args );

		if ( count( $recent_posts ) === 0 ) {
			return 'No posts';
		}

		$markup = '';

		foreach ( $recent_posts as $post ) {
			$markup .= '<div class="bg-white p-10">';
			$meta    = get_post_meta( $post->ID, 'testimonial_meta' )[0];

			// Add the post quote.
			if ( isset( $attributes['showQuote'] ) && $meta['quote'] ) {
				$markup .= sprintf(
					'<h2>%1$s</h2>',
					esc_html( $meta['quote'] )
				);
			}

			// Add the post customer.
			if ( isset( $attributes['showCustomer'] ) && $meta['customer'] ) {
				$markup .= sprintf(
					'<p>%1$s</p>',
					esc_html( $meta['customer'] )
				);
			}


			// Add the image.
			if ( $attributes['showImg'] && isset( $meta['mediaUrl'] ) ) {
				$markup .= sprintf(
					'<img class="w-20 rounded-full" src="%1$s" />',
					esc_url( $meta['mediaUrl'] )
				);
			}

			$markup .= '</div>';
		}

		return sprintf(
			'<div class="wp-block-esnext-example-dynamic-custom-post-type-with-meta alignwide"><div class="grid grid-cols-3 gap-10">%1$s</div></div>',
			$markup
		);
	}
}

/**
 * Initialize class.
 *
 * @since 1.0.0
 */
Dynamic_Custom_Post_Type_With_Meta::register();
