/**
 * External Dependencies
 */
import classnames from 'classnames';

/**
 * WordPress Dependencies
 */

/**
 * Internal Dependencies
 */
import Controls from './controls';
import { GridRepeater, GridContainer } from '../../components/grid';
import './editor.scss';
import './style.scss';

/**
 * Module Constants
 */
const ALLOWED_BLOCKS = [ 'indicia-blocks/recent-post-item' ];

function edit( props ) {
	const {
		attributes,
		className,
		setAttributes,
		attributes: {
			// put attribute key names here to use them
		},
	} = props;

	return (
		<>
			<Controls
				className={ className }
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>

			<GridContainer
				className={ className }
				userCanAlign={ true }
				attributes={ attributes }
				setAttributes={ setAttributes }
			>
				<GridRepeater
					className="grid-margin-x grid-margin-y grid-padding-x"
					allowedBlocks={ ALLOWED_BLOCKS }
				/>
			</GridContainer>
		</>
	);
}

export default edit;
