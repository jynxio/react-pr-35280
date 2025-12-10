import { readFileSync } from 'node:fs';
import { Linter } from 'eslint';
import reactHooksOfficial from 'eslint-plugin-react-hooks';
import reactHooksCanary from 'eslint-plugin-react-hooks-canary';

const linter = new Linter();
const code = readFileSync('./code.js', 'utf-8');

console.log('\n💡 eslint-plugin-react-hooks (Official):');
console.log(lint(reactHooksOfficial));

console.log('\n💡 eslint-plugin-react-hooks (Canary):');
console.log(lint(reactHooksCanary));

function lint(plugin) {
    return linter.verify(code, {
        plugins: { 'react-hooks': plugin },
        rules: plugin.configs.flat.recommended.rules,
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: { ecmaFeatures: { jsx: true } }
        },
    }).map(({ ruleId, line }) => ({ ruleId, line }));
}
