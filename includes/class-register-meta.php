<?php
/**
 * Register custom meta
 *
 * @package EsnextExample
 */

namespace EsnextExample;

use \EsnextExample\Plugin as Plugin;

// Stop the hackers if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register custom meta.
 *
 * @since 1.0.0
 */
class Register_Meta {
	/**
	 * Register class with appropriate WordPress hooks
	 */
	public static function register() {
		$instance = new self();
		add_action( 'init', array( $instance, 'register_testimonial_meta' ) );
	}

	/**
	 * Register testimonial meta.
	 *
	 * @return void
	 */
	public function register_testimonial_meta() {
		register_post_meta(
			'testimonial',
			'testimonial_meta',
			array(
				'single'       => true,
				'type'         => 'object',
				'show_in_rest' => array(
					// More Info on object and array meta types
					// https://make.wordpress.org/core/2019/10/03/wp-5-3-supports-object-and-array-meta-types-in-the-rest-api/.
					'schema' => array(
						'type'       => 'object',
						'properties' => array(
							'quote'    => array(
								'type'  => 'string',
							),
							'customer' => array(
								'type' => 'string',
							),
							'mediaUrl' => array(
								'type'   => 'string',
								'format' => 'uri',
							),
						),
					),
				),
			)
		);
	}
}
