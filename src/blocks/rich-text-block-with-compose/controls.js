/**
 * External Dependencies
 */

/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';
import { FontSizePicker, BlockControls, InspectorControls } from '@wordpress/block-editor';

/**
 * Internal Dependencies
 */
import icons from '../../utils/icons';
import { config } from '../../../package.json';
const { slug } = config;

const Controls = ( props ) => {
	const {
		setAttributes,
		className,
		attributes: {
			// put attribute key names here to use them
			fontSize,
			tagName,
			useDefault,
			defaultFontSize,
			defaultTagName,
			useDefaultTagName,
			useDefaultFontSize,
		},
	} = props;

	return (
		<>
			<BlockControls></BlockControls>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'esnext-example' ) } className="blocks-font-size">
					{
						! useDefaultFontSize &&
						<FontSizePicker
						value={ fontSize }
						onChange={ ( size ) => {
							if( ! size ) {
								size = defaultFontSize;
								console.log( size )
							}
							setAttributes( { fontSize: size } ) } }
						/>
					}
					<ToggleControl
						label={ `Use default font size ${ useDefaultFontSize ? defaultFontSize : '' }${ useDefaultFontSize ? 'px' : '' }` }
						checked={ useDefaultFontSize }
						onChange={ () => setAttributes( { useDefaultFontSize: ! useDefaultFontSize } ) }
					/>
					{
						! useDefaultTagName &&
						<SelectControl
							label={ __( 'HTML tag type', 'esnext-example' ) }
							value={ tagName }
							onChange={ ( tagName ) => setAttributes( { tagName } ) }
							options={
								[
									{ value: 'p', label: __( 'p', 'esnext-example' ) },
									{ value: 'h1', label: __( 'h1', 'esnext-example' ) },
									{ value: 'h2', label: __( 'h2', 'esnext-example' ) },
									{ value: 'h3', label: __( 'h3', 'esnext-example' ) },
									{ value: 'h4', label: __( 'h4', 'esnext-example' ) },
									{ value: 'h5', label: __( 'h5', 'esnext-example' ) },
									{ value: 'h6', label: __( 'h6', 'esnext-example' ) },
									{ value: 'div', label: __( 'div', 'esnext-example' ) },
								]
							}
						/>
					}
					<ToggleControl
						label={ `Use default ${ useDefaultTagName ? defaultTagName : '' } tag` }
						checked={ useDefaultTagName }
						onChange={ () => setAttributes( { useDefaultTagName: ! useDefaultTagName } ) }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
}

export default Controls;
