const D = document;

/**
 * Query a single element
 */
// prettier-ignore
export const $ = (selector, context = D) => context.querySelector(selector);

/**
 * Query a collection of element
 */
// prettier-ignore
export const $$ = (selector, startNode = D) => [...startNode.querySelectorAll(selector)];

export const enableListeners = () => {
	/**
	 * Add `on` method to Element
	 *
	 * @param {String} type
	 * @param {Function} listener
	 * @param {Object|Boolean} options
	 */
	Element.prototype.on = (type, listener, options = false) => {
		this.addEventListener(type, listener, options);
	};

	/**
	 * Add `on` method to Array
	 *
	 * @param {String} type
	 * @param {Function} listener
	 * @param {Object|Boolean} options
	 */
	// eslint-disable-next-line no-extend-native
	Array.prototype.on = (type, listener, options = false) => {
		this.map(el => {
			if (el instanceof Element) {
				el.addEventListener(type, listener, options);
			}
		});
	};
};

/**
 * Usage
 *
 * const button = $('#button');
 *
 * button.on('click', () => {
 *     console.log('clicked a single button');
 * });
 *
 * const buttons = $$('.button');
 *
 * buttons.on('click', () => {
 *     console.log('clicked a button in a collection');
 * });
 */
