import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { join } from 'path';
import { partytownVite } from '@builder.io/partytown/utils';

export default defineConfig({
	plugins: [
		sveltekit(),
		partytownVite({
			dest: join(process.cwd(), 'static', '~partytown')
		})
	]
});
