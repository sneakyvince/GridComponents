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
import './editor.scss';
import './style.scss';

const Save = ( props ) => {
	const {
		attributes: {
			quote,
			customer,
			mediaUrl
		}
	} = props;

	/* IMPORTANT - Wrapper classes get added to the outermost wrapper element.  If you use Fragment as wrapper then the wrapper classes don't get added to the block when saving! */

	return (
		<div>
			<div className="bg-white p-10">
				<RichText.Content
					tagName="h2"
					value={ quote }
				/>
				<RichText.Content
					tagName="p"
					value={ customer }
				/>
				{
					mediaUrl &&
					<img src={ mediaUrl } alt="test" />
				}
			</div>
		</div>
	);
}

export default Save;
