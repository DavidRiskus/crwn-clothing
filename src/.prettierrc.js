/*
    I know some of these are just default values but for the sake 
    of consistency in case default values are changed in future 
    version of prettier I got them in here.
*/

module.exports = {
    tabWidth: 4, // indentation uses 4 spaces
    singleQuote: true, // single quotes will be used
    jsxSingleQuote: true, // enforces above setting in JSX as well
    jsxBracketSameLine: true, // hard to explain in a one liner, info here - https://prettier.io/docs/en/options.html#jsx-brackets
    semi: true, // always have semicolons at the end of statements
    bracketSpacing: true, // spaces between brackets in objects - basically this { foo: bar } over that ugly fella {foo:bar}
    arrowParens: 'always', // this will add parantheses even to a single parameter arrow function
    endOfLine: 'auto', // if someone is using a old version of windows this will save some headaches on merge
};
