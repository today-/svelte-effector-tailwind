import { createEvent, createStore } from 'effector';

export const increment = createEvent();

export const counter = createStore(0)
	.on(increment, (n) => n + 1);
