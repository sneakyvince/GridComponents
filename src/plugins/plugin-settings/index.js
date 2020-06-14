/**
 * External Dependencies
 */

/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { Button, Card, CardBody, CardHeader, PanelBody, SelectControl, RangeControl } from '@wordpress/components';
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-post';
import { compose } from '@wordpress/compose';
import { dispatch, withSelect } from '@wordpress/data';
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal Dependencies
 */
import icon from './icon';
import { config } from '../../../package';
const { pluginName, slug } = config;

const Plugin = ( props ) => {
	const {
		defaults: {
			defaultFontSize,
			defaultTagName,
		},
	} = props;

	const [
		defaultFontSizeState,
		setDefaultFontSize
	] = useState( defaultFontSize );

	const [
		defaultTagNameState,
		setDefaultTagName
	] = useState( defaultTagName );

	const updatePluginSettings = async ( data, setting ) => {
		const request = apiFetch( {
			path: `${ slug }/v1/settings/${ setting }`,
			headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
			method: 'POST',
			body: JSON.stringify( data )
		} );

		try {
			const response = await request;
			if ( response ) {
				dispatch( `${ slug }/settings` ).updatePluginSettings( data );
				dispatch( 'core/notices' ).createNotice( 'success', 'Setting saved.' );
			}
		} catch ( error ) {
			const errorNotice = 'Setting was not updated, please try again.';
			dispatch( 'core/notices' ).createNotice( 'error', errorNotice );
		}
	};

	return (
		<>
			<PluginSidebarMoreMenuItem
				target={ `${ slug }-settings` }
			>
				{ __( 'ESNext Example', 'esnext-example' ) }
			</PluginSidebarMoreMenuItem>
			<PluginSidebar
				title={ `${ pluginName }`}
				name={ `${ slug }-settings` }
			>
				<Card
					isBorderless
					size="small"
				>
					<CardBody>
					<p><strong>{
						__( 'This is an example using the <PluginSidebar/> component.', 'esnext-example' )
					}</strong></p>
					{
						__( 'Set defaults from the editor for the Static Block w/ Settings.', 'esnext-example' )
					}
					</CardBody>
				</Card>
				<PanelBody title={ __( 'Default settings', 'esnext-example' ) }>
					<RangeControl
						label={ __( 'Default font size', 'esnext-example' ) }
						value={ defaultFontSizeState }
						onChange={ ( fontSize ) => setDefaultFontSize( fontSize )	}
						initialPosition={ defaultFontSizeState }
						min={ 0 }
						max={ 200 }
						step={ 1 }
					/>
					<SelectControl
						label={ __( 'Default html tag type', 'esnext-example' ) }
						value={ defaultTagNameState }
						onChange={ ( tagName ) => setDefaultTagName( tagName ) }
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
					<Button
						isSecondary
						isSmall
						onClick={ ( ) => {
							const pluginSettings = {
								defaults: {
									defaultFontSize: defaultFontSizeState,
									defaultTagName: defaultTagNameState,
								}
							};
							updatePluginSettings( pluginSettings, 'defaults' );
						} }
					>
					{ __( 'Save', 'esnext-example' ) }
					</Button>
				</PanelBody>
			</PluginSidebar>
		</>
	);
};

const PluginWithSettings = compose(
	[
		withSelect( ( select, props ) => {
			const pluginSettings = select( `${ slug }/settings` ).getPluginSettings();

			return pluginSettings;
		} ),
	]
)( Plugin );

const name = `${ slug }`;
const settings = {
	icon: icon,
	render: PluginWithSettings,
};

export { name, settings };
