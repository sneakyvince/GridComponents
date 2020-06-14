/**
 * External Dependencies
 */
import classnames from 'classnames';

/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { RichText } from '@wordpress/block-editor';
import { withSelect } from '@wordpress/data';

/**
 * Internal Dependencies
 */
import Controls from './controls';
import './editor.scss';
import './style.scss';
import { config } from '../../../package.json';
const { slug } = config;

/**
 * Module Constants
 */

const Edit = ( props ) => {
	const {
		attributes,
		setAttributes,
		className,
		defaults: {
			defaultFontSize,
			defaultTagName,
		},
		attributes: {
			// put attribute key names here to use them
			content,
			fontSize,
			tagName,
			useDefaultTagName,
			useDefaultFontSize,
		},
	} = props;

	setAttributes( { defaultFontSize, defaultTagName } );

	return (
		<>
			<Controls
				className={ className }
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
			<RichText
				tagName={ useDefaultTagName ? defaultTagName : tagName }
				style={ useDefaultFontSize ? { fontSize: defaultFontSize } : { fontSize } }
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

const EditWithSettings = compose(
	[
		withSelect( ( select, props ) => {
			const pluginSettings = select( `${ slug }/settings` ).getPluginSettings();
			// Need editor settings? Here they are:
			// const editorSettings = select( `core/editor` ).getEditorSettings();
			// console.log( editorSettings );
			return { ...props, ...pluginSettings };
		} ),
	]
)( Edit );

export default EditWithSettings;
