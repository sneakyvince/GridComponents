<?php
/**
 * Register custom post type
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
 * Register custom post type.
 *
 * @since 1.0.0
 */
class Register_Custom_Post_Types {
	/**
	 * Register class with appropriate WordPress hooks
	 */
	public static function register() {
		$instance = new self();
		add_action( 'init', array( $instance, 'register_team_post_type' ), 20 );
		add_action( 'init', array( $instance, 'register_testimonial_post_type' ), 20 );
	}

	/**
	 * Register custom post type.
	 *
	 * @return void
	 */
	public function register_team_post_type() {
		register_post_type(
			'team',
			array(
				'labels'        => array(
					'name'               => _x( 'Team Members', 'post type general name' ),
					'singular_name'      => _x( 'Member', 'post type singular name' ),
					'add_new'            => _x( 'Add New', 'team' ),
					'add_new_item'       => __( 'Add New Member' ),
					'edit_item'          => __( 'Edit Member' ),
					'new_item'           => __( 'New Member' ),
					'all_items'          => __( 'All Members' ),
					'view_item'          => __( 'View Member' ),
					'search_items'       => __( 'Search Teams' ),
					'not_found'          => __( 'No team members found' ),
					'not_found_in_trash' => __( 'No team members found in the Trash' ),
					'menu_name'          => 'Team',
				),
				'menu_icon'     => 'dashicons-groups',
				'taxonomies'    => array( 'department' ),
				'public'        => true,
				'has_archive'   => true,
				'rewrite'       => array(
					'slug' => 'team', // Custom slug.
				),
				'show_in_rest'  => true, // Use in block editor.
				'supports'      => array(
					'author',
					// Must support custom-fields in order to add custom post meta to custom post types.
					'custom-fields',
					'editor',
					'excerpt',
					'thumbnail',
					'title',
				),
				'template_lock' => 'all',
				'template'      => array(
					array(
						'core/group',
						array(
							'align'           => 'full',
							'backgroundColor' => 'subtle-background',
						),
						array(
							array(
								'core/columns',
								array(
									'align'             => 'wide',
									'verticalAlignment' => 'center',
								),
								array(
									array(
										'core/column',
										array( 'width' => 33.33 ),
										array(
											array(
												'core/image',
												array(),
											),
										),
									),
									array(
										'core/column',
										array( 'width' => 66.66 ),
										array(
											array(
												'core/heading',
												array( 'placeholder' => 'Name' ),
											),
											array(
												'core/paragraph',
												array( 'placeholder' => 'Bio' ),
											),
											array(
												'core/paragraph',
												array( 'placeholder' => 'Title' ),
											),
										),
									),
								),
							),
						),
					),
				),
			)
		);
	}

	/**
	 * Register custom post type.
	 *
	 * @return void
	 */
	public function register_testimonial_post_type() {
		register_post_type(
			'testimonial',
			array(
				'labels'        => array(
					'name'               => _x( 'Testimonials', 'post type general name' ),
					'singular_name'      => _x( 'Testimonial', 'post type singular name' ),
					'add_new'            => _x( 'Add New', 'testimonial' ),
					'add_new_item'       => __( 'Add New Testimonial' ),
					'edit_item'          => __( 'Edit Testimonial' ),
					'new_item'           => __( 'New Testimonial' ),
					'all_items'          => __( 'All Testimonials' ),
					'view_item'          => __( 'View Testimonial' ),
					'search_items'       => __( 'Search Testimonials' ),
					'not_found'          => __( 'No testimonials found' ),
					'not_found_in_trash' => __( 'No testimonials found in the Trash' ),
					'menu_name'          => 'Testimonials',
				),
				'menu_icon'     => 'dashicons-format-quote',
				'taxonomies'    => array( 'categories' ),
				'public'        => true,
				'has_archive'   => true,
				'rewrite'       => array(
					'slug' => 'testimonial', // Custom slug.
				),
				'show_in_rest'  => true, // Use in block editor.
				'supports'      => array(
					'author',
					// Must support custom-fields in order to add custom post meta to custom post types.
					'custom-fields',
					'editor',
					'excerpt',
					'thumbnail',
					'title',
				),
				'template_lock' => 'all',
				'template'      => array(
					array(
						'esnext-example/custom-post-type-block',
						array(
							'align' => 'full',
						),
					),
				),
			)
		);
	}
}
