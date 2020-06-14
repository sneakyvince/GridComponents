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
import './editor.scss';
import './style.scss';
import { attributes, name } from './block.json';

const deprecated = [
	{
		attributes,
		save( props ) {
			const {
				className,
				attributes: {},
			} = props;

			// IMPORTANT -  If you use Fragment as wrapper then
			// the wrapper classes don't get added to the block when saving!!!!

			return (
				<blockquote className={ className }>
					{ __(
						'Experimental INDICIA Block. – hello from the editor!',
						'indicia'
					) }
				</blockquote>
			);
		},
	},
];

export default deprecated;
