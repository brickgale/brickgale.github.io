import { ViteSSG } from 'vite-ssg';
import App from './app/index.vue';
import routes from './router';

export const createApp = ViteSSG(
	App,
	{ routes, base: import.meta.env.BASE_URL },
	({ app, router }) => {
		app.use(router);
	},
);
