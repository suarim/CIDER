import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: { 
      sourceType: "commonjs", // Ensure CommonJS modules are handled
      globals: {
        ...globals.node,  // Include Node.js global variables (e.g., process)
        ...globals.jest,  // Add Jest testing globals if you are using Jest
      },
    },
  },
  pluginJs.configs.recommended,  // Use the recommended ESLint rules
];
