import './style.css';
import 'highlight.js/styles/tomorrow-night-bright.css';

import hljs from 'highlight.js';
import typescript from 'highlight.js/lib/languages/typescript';

hljs.registerLanguage('typescript', typescript);

// Example: String Manipulation
const EMPTY = '';
const SPACE = ' ';
const UNDERSCORE = '_';
const HYPHEN = '-';

const title = 'Rapid Application Development Patterns';

const removeSpace = (s) => s.split(SPACE).join(EMPTY);
const replaceSpace = (s, sub) => s.split(SPACE).join(sub);
const replace = (s, targ, sub) => s.split(targ).join(sub);

const pascalCase = removeSpace(title);
const snakeCase = replaceSpace(title, UNDERSCORE);
const kebabCase = replace(snakeCase, UNDERSCORE, HYPHEN);

// How can we remove spaces in a string?
// How can we replace spaces with a
//   different character in a string?
// How can we replace a character with a
//   different character in a string?

// Example: Dynamic Method Invocation
const add = ({ a, b }) => a + b;
const subtract = ({ a, b }) => a - b;
const divide = ({ a, b }) => a / b;
const multiply = ({ a, b }) => a * b;

const transaction = { func: add, params: { a: 5, b: 83 } };

const ledger = [
  { func: multiply, params: { a: 2, b: 3 } },
  { func: divide, params: { a: 6, b: 3 } },
  { func: add, params: { a: 1, b: 3 } },
  { func: subtract, params: { a: 6, b: 5 } },
];


const execute = (action) => action.func(action.params);

const result = execute(transaction);

let output = '';
ledger.forEach(action => output += `\n OUTPUT: ${execute(action)}`);

const mappedOutput = ledger.map(action => execute(action));

const reducedOutput = ledger.reduce((output, action) => {
  return (output += execute(action))
}, 0);

// How can we execute a single action?
// How can we execute an array of actions?
// How can we transform an array of actions into an array of results?
// How can reduce an array of actions into a single result?

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h2>Rapid Primer</h2>

<h4>Basic String Manipulation</h4>
<pre>
<code class="language-typescript">
"Rapid Application Development Patterns"
// becomes
${pascalCase}
// when we remove spaces

"Rapid Application Development Patterns"
// becomes
${snakeCase}
// when we replace spaces with an underscore

"Rapid_Application_Development_Patterns"
// becomes
${kebabCase}
// when we replace underscores with a hyphen

</code> 
</pre>

<h4>Single Invocation</h4>
<pre>
<code class="language-typescript">${result}</code>
</pre>

<h4>Sequenced Invocation</h4>
<pre>
<code class="language-typescript">${output}</code>
</pre>

<h4>Mapped Invocation</h4>
<pre>
<code class="language-typescript">
${JSON.stringify(mappedOutput, null, 2)}
</code>
</pre>

<h4>Reduced Invocation</h4>
<pre>
<code class="language-typescript">
${JSON.stringify(reducedOutput, null, 2)}
</code>
</pre>
`;

hljs.highlightAll();
