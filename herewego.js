const readline = require('readline-sync')

const operasi = ['+', '-', 'x', '/'];
let a = readline.keyInSelect(operasi, 'Masukan nilai: ');
switch (a + 1) {
    case 1:
        tambah();
        break;
    case 2:
        kurang();
        break;
    case 3:
        kali();
        break; 
    case 4:
        bagi();
        break;       
    default:
        console.log('Memasukan Nilai Yang salah!');
        break;
}


function tambah() {
    let nilai1 = parseInt(readline.question('Masukan Nilai 1: '));
    let nilai2 = parseInt(readline.question('Masukan Nilai 2: '));

    let hasil = Math.floor(nilai1 + nilai2);
    console.log(hasil);
}

function kurang(params) {
    let nilai1 = parseInt(readline.question('Masukan Nilai 1: '));
    let nilai2 = parseInt(readline.question('Masukan Nilai 2: '));

    let hasil = Math.floor(nilai1 - nilai2);
    console.log(hasil);
}

function kali() {
    let nilai1 = parseInt(readline.question('Masukan Nilai 1: '));
    let nilai2 = parseInt(readline.question('Masukan Nilai 2: '));

    let hasil = Math.floor(nilai1 * nilai2);
    console.log(hasil);    
}

function bagi() {
    let nilai1 = parseInt(readline.question('Masukan Nilai 1: '));
    let nilai2 = parseInt(readline.question('Masukan Nilai 2: '));

    let hasil = Math.floor(nilai1 / nilai2);
    console.log(hasil);
}