let name = prompt ('Sizning ismingiz?')
let age = +prompt ('Sizning yoshingiz?')
while (isNaN(age)) {
    age = +prompt('Sizning yoshingiz?')
}
while (!isNaN(name)) {
    name = +prompt('Sizning ismingiz?')
}
console.log('Ismingiz:' + name);
console.log('Yoshingiz:' + age);

let misol = prompt("5+5=?")
while (isNaN(misol)) {
    misol = prompt("5+5=?")
}
if (misol == 10) {
    console.log('Sizning javob togri ' + misol);
}
else{
    console.log('Sizning javob notogri ' + misol + ' Togri javob ' + 10);
}

let kopaytirish = prompt("10*8=?")
while (isNaN(kopaytirish)) {
    kopaytirish = prompt("10*8=?")
}
if (kopaytirish == 80) {
    console.log('Sizning javob togri ' + kopaytirish);
}
else{
    console.log('Sizning javob notogri ' + kopaytirish + ' Togri javob ' + 80);
}

let bolish = prompt("100/2=?")
while (isNaN(bolish)) {
    bolish = prompt("100/2=?")
}
if (bolish == 50) {
    console.log('Sizning javob togri ' + bolish);
}
else{
    console.log('Sizning javob notogri ' + bolish + ' Togri javob ' + 50);
}

let ayirish = prompt("50-10=?")
while (isNaN(ayirish)) {
    ayirish = prompt("50-10=?")
}
if (ayirish == 40) {
    console.log('Sizning javob togri ' + ayirish);
}
else{
    console.log('Sizning javob notogri ' + ayirish + ' Togri javob ' + 40);
}

let foiz = prompt("45%4=?")
while (isNaN(foiz)) {
    foiz = prompt("45%4=?")
}
if (foiz == 1.8) {
    console.log('Sizning javob togri ' + foiz);
}
else{
    console.log('Sizning javob notogri ' + foiz + ' Togri javob ' + 1.8);
}