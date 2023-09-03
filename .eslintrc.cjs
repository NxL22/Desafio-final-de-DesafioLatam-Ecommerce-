module.exports = {
  root: true, // Indica que este archivo es el archivo raíz de la configuración de ESLint

  env: { browser: true, es2020: true }, // Configura el entorno como navegador y ES2020

  extends: [
    "eslint:recommended", // Extiende la configuración recomendada de ESLint
    "plugin:react/recommended", // Extiende la configuración recomendada para React
    "plugin:react/jsx-runtime", // Extiende la configuración para JSX en tiempo de ejecución
    "plugin:react-hooks/recommended", // Extiende la configuración recomendada para los hooks de React
  ],

  ignorePatterns: ["dist", ".eslintrc.cjs"], // Ignora los patrones de archivos especificados

  parserOptions: { ecmaVersion: "latest", sourceType: "module" }, // Configura las opciones del analizador (parser)

  settings: { react: { version: "18.2" } }, // Configura la versión de React

  plugins: ["react-refresh"], // Habilita el plugin 'react-refresh'

  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
