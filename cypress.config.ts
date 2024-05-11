import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		specPattern: 'src/tests/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
		baseUrl: 'http://localhost:4173',
		supportFile: 'src/tests/e2e/support/e2e.{js,jsx,ts,tsx}',
	},
});
