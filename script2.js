"use strict";

const area = 1200;

if(area<1000) {
    console.log('be good');
}
else if(area>1300) {
    console.log('my destiny');
} else {
    console.log('i will be here');
}

const product = 'Bro';

switch(product) {
    case 'Bread':
        console.log('its not my favourite product');
        break;
    case 'Essen':
        console.log('i dont like to eat');
        break;
    case 'Kuchen':
        console.log('i like it but its not true');
        break;
    case 'Brot':
        console.log('i like Brot');
        break;
    default: console.log('no no no');
    break;
}

