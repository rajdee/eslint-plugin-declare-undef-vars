# eslint-plugin-declare-undef-vars

Get list of the undefined variables

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-declare-undef-vars`:

```sh
npm install eslint-plugin-declare-undef-vars --save-dev
```

## Usage

Add `declare-undef-vars` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "declare-undef-vars"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "declare-undef-vars/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


