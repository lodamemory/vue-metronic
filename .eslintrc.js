module.exports = {
    root: true,
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'indent': ["error", 4, {
            "SwitchCase": 1
        }],
        'no-console': 1,
        'eol-last': 0,
        'semi': [2, "always"]
    }
}