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
import save from './save';
import transforms from './transforms';
import './editor.scss';
import './style.scss';

const settings = {
	title: __( 'Rich Text Block w/ Compose', 'esnext-example' ),
	description: __(
		'A starter rich text block w/ compose.',
		'esnext-example'
	),
	keywords: [ 'rich text', 'compose' ],
	icon,
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
