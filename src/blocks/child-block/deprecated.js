/**
 * External Dependencies
 */
import classnames from "classnames";

/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { GridItem } from "../../components/grid";

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
			const classes = classnames( 'small-12 medium-6 large-4', className );

			return (
				<GridItem.Content className={ classes }>
					<div className={ `recent-post-item__inner` }>Llec</div>
				</GridItem.Content>
			);
		},
	},
];

export default deprecated;
