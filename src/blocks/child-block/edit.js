/**
 * External Dependencies
 */
import classnames from 'classnames';

/**
 * WordPress Dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Internal Dependencies
 */
import Controls from './controls';
import { GridItem } from '../../components/grid';
import './editor.scss';
import './style.scss';

/**
 * Module Constants
 */

function edit( props ) {
	const {
		attributes,
		className,
		setAttributes,
		attributes: {
			// put attribute key names here to use them
		},
	} = props;

	// const defaultClassName = getBlockDefaultClassName( 'indicia-blocks/recent-post-item' )
	const classes = classnames( 'small-12 medium-6 large-12', className );

	return (
		<>
			<Controls
				className={ className }
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>

			<GridItem className={ classes }>
				<div className={ `recent-post-item__inner` }>

					<InnerBlocks
						__experimentalTagName="div" // Lighter InnerBlocks DOM
						allowedBlocks={ ['core-embed/youtube'] }
					/>

				</div>
			</GridItem>
		</>
	);
}

export default edit;
