/**
 * External Dependencies
 */

/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal Dependencies
 */
import { attributes, name } from './block.json';
// import deprecated from './deprecated';
import edit from './edit';
import icons from './icons';
import save from './save';
import transforms from './transforms';
import './editor.scss';
import './style.scss';

const settings = {
	title: __( 'Custom Post Type Block', 'esnext-example' ),
	description: __(
		'A starter custom post type block template.',
		'esnext-example'
	),
	keywords: [ 'custom post type', 'testimonial' ],
	icon: icons.block,
	category: 'esnext-example',
	example: {},
	supports: {},
	styles: [],
	attributes,
	// deprecated,
	transforms,
	edit,
	save,
};

export { name, settings };
