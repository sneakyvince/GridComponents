/**
 * External Dependencies
 */
import classnames from 'classnames';

/**
 * WordPress Dependencies
 */
import { __experimentalBlock as Block } from '@wordpress/block-editor';
import { forwardRef } from '@wordpress/element';

/**
 * Internal Dependencies
 */

function GridItem( { children, className, ...additionalProps }, ref ) {
	className = classnames( 'cell', className );

	return (
		<Block.div { ...additionalProps } ref={ ref } className={ className }>
			{ children }
		</Block.div>
	);
}

const ForwardedGridItem = forwardRef( GridItem );

ForwardedGridItem.Content = ( { children, className, ...additionalProps } ) => {
	className = classnames( 'cell', className );

	return <div { ...additionalProps } className={ className }>{ children }</div>;
};

export default ForwardedGridItem;
