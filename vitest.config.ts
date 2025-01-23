import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.ts'

export default mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			globals: true, // Поддержка глобальных функций, как в Jest
			environment: 'jsdom', // Используется для тестов с React и взаимодействием с DOM
			setupFiles: 'src/setupTests.ts' // Настройки для тестов, например, импорты @testing-library/jest-dom
		}
	})
)
