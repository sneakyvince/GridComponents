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
import deprecated from './deprecated';
import edit from './edit';
import icon from './icon';
import save from './save';
import transforms from './transforms';
import './editor.scss';
import './style.scss';

const settings = {
	title: __( 'Child-block', 'esnext-example' ),
	parent: [ 'indicia-blocks/recent-posts-grid' ],
	description: __( 'Experimental INDICIA Block.', 'esnext-example' ),
	keywords: [ 'blockhandbook', 'block handbook' ],
	icon,
	category: 'esnext-example',
	supports: {
		lightBlockWrapper: true,
	},
	styles: [],
	attributes,
	deprecated,
	transforms,
	edit,
	save,
};

export { name, settings };
