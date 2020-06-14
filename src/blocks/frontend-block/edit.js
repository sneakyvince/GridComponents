/**
 * External Dependencies
 */
import classnames from 'classnames';

/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { ToggleControl } from '@wordpress/components';

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
			isDarkBackground,
		},
	} = props;

	const rowClasses = classnames(
		'p-5 rounded-lg',
		{
			'bg-gray-900 text-white': isDarkBackground,
			'bg-white shadow-md': ! isDarkBackground,
		},
	);

	return (
		<div className={ className }>
			<div className={ rowClasses }>
				<Controls
					className={ className }
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
				<ToggleControl
					label={ __( 'Dark background', 'esnext-example' ) }
					checked={ isDarkBackground }
					onChange={ () => setAttributes( { isDarkBackground: ! isDarkBackground } ) }
				/>
			</div>
		</div>
	);
}

export default Edit;
