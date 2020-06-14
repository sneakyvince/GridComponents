/**
 * External Dependencies
 */
import {
	hotBlockLoader,
	registerBlocks,
	hotPluginLoader,
	registerPlugins,
	hotFilterLoader,
	registerFilters,
	hotStoreLoader,
	registerStores,
	hotFormatLoader,
	registerFormats,
	hotVariationLoader,
	registerVariations,
} from '@blockhandbook/block-hot-loader';

/**
 * WordPress Dependencies
 */

/**
 * Internal Dependencies
 */
import './style.scss';

// Register block categories.
import './utils/register-categories';

/** Hot Block Loading & Registering Blocks for production **/
if ( module.hot ) {
	hotBlockLoader( {
		getContext: () => require.context( './blocks', true, /index\.js$/ ),
		module,
	} );
} else {
	registerBlocks( {
		getContext: () => require.context( './blocks', true, /index\.js$/ ),
		module,
	} );
}

/** Hot Plugin Loading & Registering Plugins for production **/
if ( module.hot ) {
	hotPluginLoader( {
		getContext: () => require.context( './plugins', true, /index\.js$/ ),
		module,
	} );
} else {
	registerPlugins( {
		getContext: () => require.context( './plugins', true, /index\.js$/ ),
		module,
	} );
}

/** Hot Filter Loading & Registering Filters for production **/
if ( module.hot ) {
	hotFilterLoader( {
		getContext: () => require.context( './filters', true, /index\.js$/ ),
		module,
	} );
} else {
	registerFilters( {
		getContext: () => require.context( './filters', true, /index\.js$/ ),
		module,
	} );
}

/** Hot Store Loading & Registering Stores for production **/
if ( module.hot ) {
	hotStoreLoader( {
		getContext: () => require.context( './stores', true, /index\.js$/ ),
		module,
	} );
} else {
	registerStores( {
		getContext: () => require.context( './stores', true, /index\.js$/ ),
		module,
	} );
}

/** Hot Variation Loading & Registering Variations for production **/
if ( module.hot ) {
	hotVariationLoader( {
		getContext: () => require.context( './blocks', true, /variations\.js$/ ),
		module,
	} );
} else {
	registerVariations( {
		getContext: () => require.context( './blocks', true, /variations\.js$/ ),
		module,
	} );
}

/** Hot Format Loading & Registering Formats for production **/
if ( module.hot ) {
	hotFormatLoader( {
		getContext: () => require.context( './formats', true, /index\.js$/ ),
		module,
	} );
} else {
	registerFormats( {
		getContext: () => require.context( './formats', true, /index\.js$/ ),
		module,
	} );
}
