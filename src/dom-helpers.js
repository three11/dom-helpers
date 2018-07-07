const doc = document;
const win = window;

export const byID = id => doc.getElementById(id);

export const single = selector => doc.querySelector(selector);

export const multiple = selector => [...doc.querySelectorAll(selector)];

export const addListener = (element, eventType, callback, shouldBubble) => {
	element.addEventListener(
		eventType,
		event => {
			callback(event);
		},
		shouldBubble
	);
};
