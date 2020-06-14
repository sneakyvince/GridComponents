/**
 * External Dependencies
 */

/**
 * WordPress Dependencies
 */
import { SVG, Path, G } from '@wordpress/primitives';

/**
 * Internal Dependencies
 */
const icons = {};

icons.block = <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
<Path d="M19 8h-1V6h-5v2h-2V6H6v2H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm.5 10c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-8c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v8z" />
</SVG>;

icons.bigBordered = <SVG viewBox="0 0 104 104"><defs><rect height="100" width="100" x="0" y="0"/></defs><G fill="none" stroke="none" strokeWidth="1" fillRule="evenodd"><G transform="matrix(1 0 0 1 2 2)"><G><mask fill="#fff"><use xlinkHref="#path-1"/></mask><use stroke="#fff" strokeWidth="3" xlinkHref="#path-1"/><rect height="68" stroke="currentColor" width="68" x="16" y="16" strokeWidth="10"/></G></G></G></SVG>;

icons.roundedBigBordered = <SVG viewBox="0 0 104 104"><defs><rect height="100" width="100" x="0" y="0"/></defs><G fill="none" stroke="none" strokeWidth="1" fillRule="evenodd"><G transform="matrix(1 0 0 1 2 2)"><G><mask fill="#fff"><use xlinkHref="#path-1"/></mask><use stroke="#fff" strokeWidth="3" xlinkHref="#path-1"/><rect height="118" rx="50" stroke="currentColor" width="118" x="-51" y="-48" strokeWidth="10"/></G></G></G></SVG>;

export default icons;
