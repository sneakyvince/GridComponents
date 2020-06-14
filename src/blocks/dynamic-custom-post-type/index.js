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
import icon from './icon';
import transforms from './transforms';
import './editor.scss';
import './style.scss';

const validAlignments = [ 'full' ];

const settings = {
	title: __( 'Dynamic Custom Post Type Block', 'esnext-example' ),
	description: __(
		'A starter dynamic custom post type block.',
		'esnext-example'
	),
	keywords: [ 'dynamic', 'testimonial' ],
	icon,
	category: 'esnext-example',
	example: {},
	getEditWrapperProps( attributes ) {
		const { align } = attributes;
		if ( -1 !== validAlignments.indexOf( align ) ) {
			return { 'data-align': align };
		}
	},
	supports: {
		align: true,
		align: [ 'full' ]
	},
	styles: [],
	attributes,
	// deprecated,
	transforms,
	edit,
};

export { name, settings };
