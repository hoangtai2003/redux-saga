module.exports = {
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        semi: 1,
        quotes: [2, 'single'],
        'react/prop-types': 1
    }

};
