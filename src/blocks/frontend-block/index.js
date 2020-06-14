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
	title: __( 'Frontend Block', 'esnext-example' ),
	description: __(
		'A starter frontend block.',
		'esnext-example'
	),
	keywords: [ 'frontend' ],
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
