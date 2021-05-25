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

/**
 * Enable jQuery-like syntax for attaching of event listeners
 */
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
 * Detect if an element is visible in the viewport
 */
export const isElementVisibleInViewport = (el, isPartiallyVisible = false) => {
	const { top, right, bottom, left } = el.getBoundingClientRect();
	const { innerWidth, innerHeight } = window;

	return isPartiallyVisible
		? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
				((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
		: top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

/**
 * Returns the scroll position of an element
 */
export const getScrollPosition = (el = window) => ({
	x: el.pageXOffset || el.scrollLeft,
	y: el.pageYOffset || el.scrollTop
});

/**
 * Classname utilities
 */
export const hasClass = (el, className) => el.classList.contains(className);
export const addClass = (el, className) => el.classList.add(className);
export const removeClass = (el, className) => el.classList.remove(className);
export const toggleClass = (el, className, force) => el.classList.toggle(className, force);

/**
 * Insert HTML string after the element
 */
export const insertAfter = (el, html) => el.insertAdjacentHTML('afterend', html);

/**
 * Insert HTML string before the element
 */
export const insertBefore = (el, html) => el.insertAdjacentHTML('beforebegin', html);

/**
 * Trigger an event
 */
export const trigger = (el, eventType, detail) => el.dispatchEvent(new CustomEvent(eventType, { detail }));
