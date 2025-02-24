// * =======================================================
// *                 ARİTMETİK OPERATÖRLER
// * =======================================================

const kola = 50
const cips = 60
const cikolata = 35
let toplam = kola + cips + cikolata

console.log(toplam)

// bir arttır

toplam = toplam +  1
console.log(toplam)

toplam++
console.log(toplam)

toplam +=10
console.log(toplam)

// + operatörü stringlerde birleştirme yapar(concanation)

const ad = "Joseph"
const soyad = "Bilir"

console.log("adım soyadım: "+ ad +" "+ soyad)

console.log(`adım ve soyadım ${ad}    ${soyad}`)

// command ve noktalı virgül ile back tick oluyor


// ARTTIRMA AZALTMA

let a = 105

// sonraki işlemlerde arttırır

console.log(a++)
console.log(a++)
console.log(a++)
console.log(a++)
console.log(a)

console.log(++a)
console.log(++a)
console.log(++a)
console.log(++a)
console.log(++a)
console.log(++a)
console.log(++a)


let c = 10

console.log(++c)
console.log(c)

let e = 45

// önüne ve arkasına yazmak arasındaki fark burda

console.log(e--)
console.log(e)
console.log(--e)

// e yi 5 arttır

e += 5

console.log(e)

// e nin 5 katını gör

e *= 5
console.log(e)

// e nin 5 te birini gör

e /= 5
console.log(e)

// çarpma ve üs alma

const pi = 3.14

const yaricap = 5

const alan = pi * yaricap**2

console.log(alan)