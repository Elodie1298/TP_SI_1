/*

    Primeiro trabalho prático SI
    Alunos:

    19164 -- Elodie Morin
    18351 -- Rafael Ramos

*/
const plainText = document.querySelector("#Plaintext");
const steps = document.querySelector("#Steps");
const encryptBtn = document.querySelector("#Encrypt");
const decryptBtn = document.querySelector("#Decrypt");
const textArea = document.querySelector("#TextArea");

function genCharArray(charA, charZ) {
    let a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}

const lowerAlphabet = genCharArray('a', 'z');
const upperAlphabet = genCharArray('A', 'Z');
const numbers = genCharArray('0', '9');

function encrypt() {
    const message = plainText.value;
    const step = parseInt(steps.value, 10);
    let encryptedMessage = '';
    for (let i=0; i<message.length; i++) {
        let value = message[i];
        let index = lowerAlphabet.indexOf(value);
        if (index > -1) {
            value = lowerAlphabet[(index + step) % 26];
        }
        index = upperAlphabet.indexOf(value);
        if (index > -1) {
            value = upperAlphabet[(index + step) % 26]
        }
        index = numbers.indexOf(value);
        if (index > -1) {
            value = numbers[(index + step) % 10]
        }
        encryptedMessage += value;
    }
    textArea.innerText = encryptedMessage;
}

function decrypt() {
    const message = plainText.value;
    const step = parseInt(steps.value, 10);
    let decryptedMessage = '';
    for (let i=0; i<message.length; i++) {
        let value = message[i];
        let index = lowerAlphabet.indexOf(value);
        if (index > -1) {
            let newIndex = (index - step) % 26;
            newIndex = (newIndex < 0) ? newIndex + 26 : newIndex;
            value = lowerAlphabet[newIndex];
        }
        index = upperAlphabet.indexOf(value);
        if (index > -1) {
            let newIndex = (index - step) % 26;
            newIndex = (newIndex < 0) ? newIndex + 26 : newIndex;
            value = upperAlphabet[newIndex];
        }
        index = numbers.indexOf(value);
        if (index > -1) {
            let newIndex = (index - step) % 10;
            newIndex = (newIndex < 0) ? newIndex + 10 : newIndex;
            value = numbers[newIndex];
        }
        decryptedMessage += value;
    }
    textArea.innerText = decryptedMessage;
}
