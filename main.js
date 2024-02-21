

// let a = +prompt("1-Son kiriting")
// let b = +prompt("2-Son kiriting")
// let c = +prompt("3-Son kiriting")

// if ((a>b && a<c) || (a<b && a>c)) {
//     alert("1-Son orta qiymat " + a)
// }else if ((a<b && b<c) || (a>b && b>c)) {
//     alert("2-Son orta qiymat " + b)
// }else if ((c>a && b>c) || (a>c && b<c)) {
//     alert("3-Son orta qiymat " + c)
// }else {
//     alert("Nimadr notori ketib qoldi")
// }


let son = +prompt("Son kirit")

while (isNaN(son) || son==0) {
    son = +prompt("Sanga son kirit diyildiyu")
}
if (son%2==0) {
    alert("Siz juft son kiritdingiz")
}else{
    alert("Siz toq kiriting")
}


let number = +prompt("Son kirit")
let daraja = +prompt("Daraja kirit")
console.log(son**daraja);
