/**
 * External Dependencies
 */
import classnames from 'classnames';

/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { MediaPlaceholder, RichText } from '@wordpress/block-editor';
import { useCallback } from '@wordpress/element';

/**
 * Internal Dependencies
 */
import Controls from './controls';
import './editor.scss';
import './style.scss';

/**
 *
 * Module Constants
 */
const ALLOWED_MEDIA_TYPES = [ 'image' ];

const Edit = ( props ) => {
	const {
		attributes,
		className,
		setAttributes,
		attributes: {
			quote,
			customer,
			mediaId,
			mediaUrl,
			testimonial_meta
		}
	} = props;

	console.log( testimonial_meta )

	// Will not change unless media changes
	const onSelectImage = useCallback(
		( media ) => {
			setAttributes( {
				mediaUrl: media.url,
				mediaId: media.id,
				testimonial_meta: {
					...testimonial_meta,
					mediaUrl: media.url,
				}
			} );
		},
		[ setAttributes ]
	);

	return (
		<div className={ className } >
			<div className="bg-white p-10">
				<Controls
					className={ className }
					attributes={ attributes }
					setAttributes={ setAttributes }
					onSelectImage={ onSelectImage }
				/>
				<RichText
					tagName="h2"
					value={ quote }
					placeholder={ 'Quote' }
					onChange={ ( quote ) => setAttributes( {
						testimonial_meta: {
							...testimonial_meta,
							quote,
						}
					} ) }
				/>
				<RichText
					tagName="p"
					value={ customer }
					placeholder={ 'Customer name' }
					onChange={ ( customer ) => setAttributes( {
						customer,
						testimonial_meta: {
							...testimonial_meta,
							customer,
						}
					} ) }
				/>
				{
					! mediaUrl &&
					<MediaPlaceholder
						icon="format-image"
						labels={ {
							title: __( 'Image', 'esnext-example' ),
							instructions: __( 'Upload an image file or pick one from your media library.', 'esnext-example' ),
						} }
						accept="image/*"
						allowedTypes={ ALLOWED_MEDIA_TYPES }
						onSelect={ onSelectImage }
						value={ { mediaId, mediaUrl } }
					/>
				}
				{
					mediaUrl &&
					<img src={ mediaUrl } alt="test" />
				}
			</div>
		</div>
	);
}

export default Edit;
