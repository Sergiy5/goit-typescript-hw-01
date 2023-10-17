// import { concatenation } from './concatenation';
function concatenation(firstWord, secondWord) {
  console.log(`${firstWord} ${secondWord}`);
}
const button = document.querySelector('button');
const input = document.querySelector('input');
if (button && input) {
    button.addEventListener('click', () => {
        concatenation(input.value, 'hello!');
    });
}
//# sourceMappingURL=index.js.map