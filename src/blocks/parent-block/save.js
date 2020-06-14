/**
 * External Dependencies
 */
import classnames from 'classnames';

/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal Dependencies
 */
import './editor.scss';
import './style.scss';
import { GridContainer, GridRepeater } from '../../components/grid';

function save( props ) {
	const {
		      className,
		      attributes,
	      } = props;

	// IMPORTANT - If you use Fragment as wrapper then
	// the wrapper classes don't get added to the block when saving!!!!
	return (
		<GridContainer.Content className={ className } attributes={ attributes }>
			<GridRepeater.Content
				className="grid-margin-x grid-margin-y grid-padding-x"
			/>
		</GridContainer.Content>
	);
}

export default save;
