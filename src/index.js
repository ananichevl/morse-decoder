const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const SYMBOL_MAP = {
    '10': '.',
    '11': '-',
    '00': '',
    '**': ' '
};

function decode(expr) {
    let result = '';

    let arr = expr.match(/.{10}/g);

    for (let i = 0; i < arr.length; i++) {
        let symbols = arr[i].match(/.{2}/g);
        let letter = '';

        for (let j = 0; j < symbols.length; j++) {
            letter += SYMBOL_MAP[symbols[j]];
        }

        result += (letter.trim() === '') ? ' ' : MORSE_TABLE[letter];
    }

    return result;
}

module.exports = {
    decode
};