<?php
/**
 * Plugin Name: ESNext Example
 * Description: Example block written with ESNext standard and JSX support – build step required.
 * Version: 0.1.0
 * Plugin URI: https://wordpress.org/plugins/
 * Author: The WordPress Contributors
 * Author URI: https://wordpress.org/
 * Domain Path: /languages
 * License: GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Tested up to: 5.4
 * Requires at least: 5.0
 * Requires PHP: 5.6
 * Text Domain: esnext-example
 *
 * @package EsnextExample
 */

namespace EsnextExample;

use \EsnextExample\Plugin as Plugin;
use \EsnextExample\Register_Blocks as Register_Blocks;
use \EsnextExample\Load_Translations as Load_Translations;
use \EsnextExample\Register_Plugin_Settings as Register_Plugin_Settings;
use \EsnextExample\Register_Rest_API as Register_Rest_API;
use \EsnextExample\Load_Dynamic_Blocks as Load_Dynamic_Blocks;
use \EsnextExample\Register_Block_Patterns as Register_Block_Patterns;
use \EsnextExample\Register_Custom_Post_Types as Register_Custom_Post_Types;
use \EsnextExample\Register_Taxonomies as Register_Taxonomies;
use \EsnextExample\Register_Meta as Register_Meta;

// Stop the hackers if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Plugin' ) ) :
	/**
	 * Plugin Class.
	 *
	 * @since 0.1.0
	 */
	class Plugin {

		/**
		 * Class instance.
		 *
		 * @var Plugin
		 */
		private static $instance = null;

		/**
		 * Plugin Path.
		 *
		 * @var string
		 */
		public $plugin_dir_path;

		/**
		 * Plugin URL.
		 *
		 * @var string
		 */
		public $plugin_dir_url;

		/**
		 * Plugin Slug.
		 *
		 * @var string
		 */
		public $slug;

		/**
		 * Plugin text-domain.
		 *
		 * @var string
		 */
		public $text_domain;

		/**
		 * Plugin version.
		 *
		 * @var string
		 */
		public $version;

		/**
		 * Plugin constructor.
		 * Called immediately when you instantiate a class.
		 * Really good article on setting up constructors for WP classes.
		 * https://carlalexander.ca/designing-class-wordpress-hooks/
		 */
		private function __construct() {
			// filesystem directory i.e. /var/home/www/blockhandbook/wp-content/plugins/.
			$this->plugin_dir_path = plugin_dir_path( __FILE__ );
			// web address w/ trailing slash.
			// i.e. - http://blockhandbook.com/wp-content/plugins/.
			$this->plugin_dir_url = plugin_dir_url( __FILE__ );
			$this->slug           = 'esnext-example';
			$this->slug_          = 'esnext_example_';
			$this->text_domain    = 'esnext-example';
			$this->version        = '0.1.0';
		}

		/**
		 * Return Plugin Instance.
		 *
		 * @return object\Plugin
		 */
		public static function get_instance() {
			if ( null === self::$instance ) {
				self::$instance = new self();
			}

			return self::$instance;
		}

		/**
		 * Load the plugin.
		 *
		 * @return void
		 */
		public static function load() {
			require __DIR__ . '/vendor/autoload.php';

			Load_Translations::register();
			Register_Blocks::register();
			Register_Plugin_Settings::register();
			Register_Rest_API::register();
			new Load_Dynamic_Blocks();
			Register_Block_Patterns::register();
			Register_Taxonomies::register();
			Register_Custom_Post_Types::register();
			Register_Meta::register();
		}
	}
endif;

Plugin::load();
