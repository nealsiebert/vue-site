import shave from 'shave';
import _ from 'lodash';
import { App } from 'vue';

type Shaver = {
  el: any
  shaveFn: () => void
}
// Where we keep our shaver functions
let shavers: Shaver[] = [];

// Global defaults
const defaults = {
	height: 100,
	throttle: 300,
	spaces: false,
	character: '...',
};

type Options = {
  height?: number
  throttle?: number
  spaces?: boolean
  character?: string
}

// Vue plugin install function
function install( Vue: App, options?: Options ): void {
	// Merge settings with defaults
	const globalSettings = { ...defaults, ..._.defaultTo(options, {}) };

	// Our throttled run function
	const runShaversThrottled = _.throttle( runShavers, globalSettings.throttle );

	if ( window ) {
		window.addEventListener( 'load', () => runShavers() );
	}

	// Add the shave directive
	Vue.directive( 'shave', {

		beforeMount( el, binding ) {
			// Setup settings
			const directiveSettings = binding.value || {};
			const settings = { ...globalSettings, ...directiveSettings };

			// Create the function to run on window resize
			// Bound to the given shaver settings
			const shaveFn = (() => {
				shave( el, settings.height, settings);
			});

			// Add the shaver to the list
			shavers.push({ el, shaveFn });

			// If this is the first shaver, add the resize event listener
			if ( shavers.length === 1 ) {
				window.addEventListener( 'resize', runShaversThrottled );
			}
		},

		unmounted( el ) {
			// Remove the shaver from the list
			shavers = shavers.filter( shaver => shaver.el !== el );

			// If there are no shavers, remove the resize listener    
			if ( shavers.length === 0 ) {
				window.removeEventListener( 'resize', runShaversThrottled );
			}
		},

		// Run shaver on inserted
		mounted: runShaver,

		// Run shaver on updated
		updated: runShaver,
	});

};

function runShavers() {
	shavers.forEach( shaver => shaver.shaveFn() );
};

function runShaver( el: any ) {
	// Get the shaver for the current element
	const found = shavers.filter( shaver => shaver.el === el );
	const shaver = found.length ? found[ 0 ] : null;

	// Run the shaver function
	if ( shaver && shaver.shaveFn ) {
		shaver.shaveFn();
	}
};

export default { install };