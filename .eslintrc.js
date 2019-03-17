module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react"
  ],
  plugins: ["prettier", "react", "jsx-a11y"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true
  },
  settings: {
    react: {
      version: "latest"
    }
  },
  rules: {
    // https://github.com/yannickcr/eslint-plugin-react#configuration
    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }],
    "react/jsx-uses-react": "error",
    "react/react-in-jsx-scope": "error",
    "react/no-deprecated": "error",
    "react/prefer-stateless-function": "warn",

    // https://www.npmjs.com/package/eslint-plugin-jsx-a11y#supported-rules
    "jsx-a11y/accessible-emoji": "warn",
    "jsx-a11y/anchor-is-valid": "warn",
    "jsx-a11y/alt-text": "warn",

    // prettier - gatsby-starter-default options
    "prettier/prettier": ["error"]
  }
};
