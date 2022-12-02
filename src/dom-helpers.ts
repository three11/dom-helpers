type EventListener<K extends keyof ElementEventMap> = (this: Element, ev: ElementEventMap[K]) => any;

declare global {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface Array<T> {
		on<K extends keyof ElementEventMap>(
			type: K,
			listener: EventListener<K>,
			options?: boolean | AddEventListenerOptions
		): void;
	}

	interface Element {
		on<K extends keyof ElementEventMap>(
			type: K,
			listener: EventListener<K>,
			options?: boolean | AddEventListenerOptions
		): void;
	}
}

const D = document;

export function $<E extends HTMLElement>(selector: string, context = D): E | null {
	return context.querySelector(selector);
}

export function $$<E extends HTMLElement>(selector: string, context = D): E[] {
	return Array.from(context.querySelectorAll(selector));
}

export function enableListeners() {
	Element.prototype.on = function <K extends keyof ElementEventMap>(
		type: K,
		listener: EventListener<K>,
		options = false
	) {
		this.addEventListener(type, listener, options);
	};

	Array.prototype.on = function <K extends keyof ElementEventMap>(
		type: K,
		listener: EventListener<K>,
		options = false
	) {
		this.map(el => {
			if (el instanceof Element) {
				el.addEventListener(type, listener, options);
			}
		});
	};
}

export function isElementVisibleInViewport<E extends HTMLElement>(el: E, isPartiallyVisible = false): boolean {
	const { top, right, bottom, left } = el.getBoundingClientRect();
	const { innerWidth, innerHeight } = window;

	return isPartiallyVisible
		? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
				((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
		: top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
}

export function getScrollPosition(el: HTMLElement | Window = window) {
	return el instanceof Window
		? {
				x: el.scrollX,
				y: el.scrollY
		  }
		: {
				x: el.scrollLeft,
				y: el.scrollTop
		  };
}

export function hasClass<E extends HTMLElement>(el: E, className: string): boolean {
	return el.classList.contains(className);
}

export function addClass<E extends HTMLElement>(el: E, className: string): void {
	return el.classList.add(className);
}

export function removeClass<E extends HTMLElement>(el: E, className: string): void {
	return el.classList.remove(className);
}

export function toggleClass<E extends HTMLElement>(el: E, className: string, force: boolean): boolean {
	return el.classList.toggle(className, force);
}

export function insertAfter<E extends HTMLElement>(el: E, html: string): void {
	return el.insertAdjacentHTML('afterend', html);
}

export function insertBefore<E extends HTMLElement>(el: E, html: string): void {
	return el.insertAdjacentHTML('beforebegin', html);
}

export function dispatchEvent<E extends HTMLElement>(el: E, ev: string, detail?: Record<string, any>): boolean {
	return el.dispatchEvent(new CustomEvent(ev, { detail }));
}
