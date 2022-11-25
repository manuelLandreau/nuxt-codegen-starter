import { defineNuxtPlugin } from 'nuxt/app';
import MarkdownIt from 'markdown-it';

export default defineNuxtPlugin(() => {
	const markdown = new MarkdownIt({
		breaks: true,
	});
	return {
		provide: {
			markdown,
		},
	};
});
