/**
 * External Dependencies
 */
import classnames from 'classnames';

/**
 * WordPress Dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { forwardRef } from '@wordpress/element';

/**
 * Internal Dependencies
 */

function GridRepeater( { gridAxis = 'x', className, allowedBlocks, ...additionalProps }, ref ) {
	// Add Foundation's grid-x or grid-y classes. Grid-x is default
	className = classnames( `grid-${ gridAxis }`, className );

	return (
		<>
			<InnerBlocks
				{ ...additionalProps }
				ref={ ref }
				allowedBlocks={ allowedBlocks }
				__experimentalTagName="div" // Lighter InnerBlocks DOM
				__experimentalPassedProps={ {
					className: className,
				} }
				renderAppender={ () => <InnerBlocks.ButtonBlockAppender /> }
			/>
		</>
	);
}

const ForwardedGridRepeater = forwardRef( GridRepeater );

ForwardedGridRepeater.Content = ( { gridAxis = 'x', className, ...additionalProps } ) => {
	// Add Foundation's grid-x or grid-y classes. Grid-x is default
	className = classnames( `grid-${ gridAxis }`, className );
const test = 'test';
	return (
		<div { ...additionalProps } className={ className }>
			<InnerBlocks.Content />
		</div>
	);
};

export default ForwardedGridRepeater;
