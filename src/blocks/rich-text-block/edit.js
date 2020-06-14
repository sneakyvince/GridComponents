/**
 * External Dependencies
 */
import classnames from 'classnames';

/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

/**
 * Internal Dependencies
 */
import Controls from './controls';
import './editor.scss';
import './style.scss';

const Edit = ( props ) => {
	const {
		attributes,
		className,
		setAttributes,
		attributes: {
			// put attribute key names here to use them
			content,
		},
	} = props;

	return (
		<>
			<Controls
				className={ className }
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
			<RichText
				tagName="p"
				value={ content }
				onChange={ ( content ) => setAttributes( { content } ) }
				placeholder={ __(
					'ESNext Example – this is a starter RichText block.',
					'esnext-example'
				) }
			/>
		</>
	);
}

export default Edit;
