/// <reference types="vitest" />
import { cwd } from 'node:process';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        '@': cwd(),
      },
    },
    test: {
      globals: true,
      clearMocks: true,
      environment: 'node',
      alias: {
        '@tests': cwd() + '/tests',
        '@src': cwd() + '/src',
      },
    },
  };
});
