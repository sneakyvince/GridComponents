/**
 * External Dependencies
 */
import { data } from '@blockhandbook/data';
const { withPosts } = data;

/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { Spinner } from '@wordpress/components';

/**
 * Internal Dependencies
 */
import Controls from './controls';

const Edit = ( props ) => {
	const {
		setAttributes,
		className,
		attributes,
		posts,
		taxonomies,
		attributes: {
			postsToShow,
			showImg,
			showCustomer,
			showQuote,
		}
	} = props;

	if ( ! posts ) {
		return (
			<>
				<Spinner />
					Loading...
			</>
		);
	}

	const hasPosts = Array.isArray( posts ) && posts.length;
	if ( ! hasPosts  ) {
		return (
			<>
				<Controls
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
				{ __( 'No posts found.', 'esnext-example' ) }
			</>
		);
	}

	// Removing posts from display should be instant.
	const displayPosts =
	posts.length > postsToShow
		? posts.slice( 0, postsToShow )
		: posts;

	return (
		<>
			<Controls
				attributes={ attributes }
				setAttributes={ setAttributes }
				taxonomies={ taxonomies }
			/>
			<div className={ className } >
				<div className="grid grid-cols-3 gap-10">
				{
					displayPosts.map( ( post, i ) => {
						const {
							meta: {
								testimonial_meta: {
									quote,
									customer,
									mediaUrl,
								}
							}
						} = post;

						return (
							<div className="bg-white p-10">
								{
									!! quote && showQuote &&
									<h2>{ quote }</h2>
								}
								{
									!! customer && showCustomer &&
									<p>{ customer }</p>
								}
								{
									!! mediaUrl && showImg &&
									<img className="w-20 rounded-full" src={ mediaUrl } alt=""/>
								}
							</div>
						);
					} )
				}
				</div>
			</div>
		</>
	);
}

export default withPosts( Edit );
