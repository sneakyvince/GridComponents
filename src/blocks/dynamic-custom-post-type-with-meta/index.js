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
	title: __( 'Dynamic Custom Post Type Block w/ Meta', 'esnext-example' ),
	description: __(
		'A starter dynamic custom post type block w/ meta.',
		'esnext-example'
	),
	keywords: [ 'dynamic' ],
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
