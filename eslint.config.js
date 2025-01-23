import js from '@eslint/js'
import tsplugin from '@typescript-eslint/eslint-plugin' // Плагин для @typescript-eslint
import tsparser from '@typescript-eslint/parser' // Используем parser от @typescript-eslint
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'

export default {
	parser: tsparser, // Указываем парсер для TypeScript
	ignores: ['dist'], // Игнорируем папку dist
	extends: [
		js.configs.recommended, // Рекомендованные правила для JavaScript
		...tsplugin.configs.recommended, // Рекомендованные правила для TypeScript
		'plugin:react/recommended', // Рекомендованные правила для React
		'plugin:react-hooks/recommended' // Рекомендованные правила для React hooks
	],
	files: ['**/*.{ts,tsx}'], // Применяем к файлам с расширением ts и tsx
	languageOptions: {
		ecmaVersion: 2020,
		globals: globals.browser // Определяем глобальные переменные для браузера
	},
	plugins: {
		'react-hooks': reactHooks,
		'react-refresh': reactRefresh,
		'@typescript-eslint': tsplugin // Подключаем плагин для TypeScript
	},
	rules: {
		...reactHooks.configs.recommended.rules, // Подключаем рекомендованные правила для React hooks
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true } // Разрешаем экспорт констант
		]
	}
}
