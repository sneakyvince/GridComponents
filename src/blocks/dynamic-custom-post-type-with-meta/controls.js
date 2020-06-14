/**
 * External Dependencies
 */
import { controls } from '@blockhandbook/controls';
const { PostsControls } = controls;

/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { BlockControls, InspectorControls } from '@wordpress/block-editor';

/**
 * Internal Dependencies
 */
import icons from '../../utils/icons';
import { config } from '../../../package.json';
const { slug } = config;

const Controls = ( props ) => {
	const {
		setAttributes,
		attributes,
		attributes: {
			// put attribute key names here to use them
			showCustomer,
			showImg,
			showQuote,
		},
	} = props;

	return (
		<>
			<BlockControls></BlockControls>
			<InspectorControls>
				<PostsControls
					titleToggle={ false }
					dateToggle={ false }
					authorToggle={ false }
					excerptToggle={ false }
					featuredImageToggle={ false }
					categorySelector={ false }
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
				<PanelBody
					title={ __( 'Dynamic block settings', 'esnext-example' ) }
					initialOpen
				>
					<ToggleControl
						label={ __( 'Show quote', 'esnext-example' ) }
						checked={ showQuote }
						onChange={ ( ) => setAttributes( { showQuote: ! showQuote } ) }
					/>
					<ToggleControl
						label={ __( 'Show customer', 'esnext-example' ) }
						checked={ showCustomer }
						onChange={ ( ) => setAttributes( { showCustomer: ! showCustomer } ) }
					/>
					<ToggleControl
						label={ __( 'Show image', 'esnext-example' ) }
						checked={ showImg }
						onChange={ ( ) => setAttributes( { showImg: ! showImg } ) }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
}

export default Controls;
