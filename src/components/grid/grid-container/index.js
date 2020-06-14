/**
 * External Dependencies
 */
import classnames from 'classnames';

/**
 * WordPress Dependencies
 */
import {
	BlockControls,
	BlockAlignmentToolbar,
	__experimentalBlock as Block,
} from '@wordpress/block-editor';
import { forwardRef } from '@wordpress/element';

/**
 * Internal Dependencies
 */

/**
 * Component used in the edit function
 */
function GridContainer(
	{
		children,
		className,
		defaultAlignment,
		userCanAlign,
		attributes: {
			// put attribute key names here to use them
			align,
		},
		setAttributes,
		...additionalProps
	},
	ref
) {
	const updateAlign = ( newAlign ) => {
		setAttributes( {
			align:
				// newAlignment will be undefined when the same option is clicked twice,
				// hence we need to set it to an empty string here.
				newAlign === undefined ? '' : newAlign,
		} );
	};

	const addBlockAlignmentToolbar = () => {
		// Return if alignment attribute was not passed to this component.
		if ( typeof align === undefined ) {
			return console.error(
				'No attribute named "align" was found, please add it to the block attributes. 🙂'
			);
		}

		return (
			<BlockControls>
				<BlockAlignmentToolbar
					controls={ [ 'wide', 'full' ] }
					value={ align }
					onChange={ updateAlign }
				/>
			</BlockControls>
		);
	};

	className = classnames( 'grid-container', className, align );

	return (
		<>
			{/*{ userCanAlign && addBlockAlignmentToolbar() }*/}
			<Block.div
				{ ...additionalProps }
				ref={ ref }
				className={ className }
			>
				{ children }
			</Block.div>
		</>
	);
}

const ForwardedGridContainer = forwardRef( GridContainer );

/**
 * Component used in the save function
 */
ForwardedGridContainer.Content = ( {
	children,
	className,
	// attributes: {
	// 	// put attribute key names here to use them
	// 	align,
	// },
	...additionalProps
} ) => {
	className = classnames( 'grid-container', className );

	return <div { ...additionalProps } className={ className }>{ children }</div>;
};

export default ForwardedGridContainer;
