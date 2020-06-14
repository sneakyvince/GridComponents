/**
 * External Dependencies
 */

/**
 * WordPress Dependencies
 */

/**
 * Internal Dependencies
 */
import { config } from '../../../package.json';
const { slug } = config;

// Add custom namespace className to all plugin blocks.
const setBlockCustomClassName = ( className, blockName ) => {
	const namespace = 'esnext-example';
	const classes = `${ className } ${ namespace }`;

	return blockName.includes( namespace ) ? classes : className;
};

const name = 'set-block-custom-class-name';
const filters = [
	{
		hookName: 'blocks.getBlockDefaultClassName',
		namespace: `${ slug }/set-block-custom-class-name`,
		functionName: setBlockCustomClassName,
	},
];

export { name, filters };
