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
import { RawHTML } from '@wordpress/element';

/**
 * Internal Dependencies
 */
import Controls from './controls';
import { config } from '../../../package.json';
const { slug } = config;

const Edit = ( props ) => {
	const {
		setAttributes,
		className,
		attributes,
		posts,
		attributes: {
			postsToShow,
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
			/>
			<div className={ className } >
				<ul className="list-none ml-0 pl-0">
					{
						displayPosts.map( ( post, i ) => {
							return (
								<li key={ post.id }>
									<RawHTML>
									{
										post.content.rendered
									}
									</RawHTML>
								</li>
							);
						} )
					}
				</ul>
			</div>
		</>
	);
}

export default withPosts( Edit );
