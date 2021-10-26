//Test data 1
/* const dolphins1 = 96;
const dolphins2 = 108;
const dolphins3 = 89;
const koalas1 = 88;
const koalas2 = 91;
const koalas3 = 110; */

/* const dolphins1 = 97;
const dolphins2 = 112;
const dolphins3 = 101;
const koalas1 = 109;
const koalas2 = 95;
const koalas3 = 123; */

const dolphins1 = 97;
const dolphins2 = 112;
const dolphins3 = 101;
const koalas1 = 109;
const koalas2 = 95;
const koalas3 = 106;

const promedioDolphins = (dolphins1 + dolphins1 + dolphins1) / 3;
const promedioKoalas = (koalas1 + koalas2 + koalas3) / 3;

if (promedioKoalas >= 100 || promedioDolphins >= 100) {
  if (promedioDolphins > promedioKoalas) {
    console.log(`Ganan los Dolphins ${promedioDolphins}`);
  } else if (promedioDolphins < promedioKoalas) {
    console.log(`Ganan los Koalas ${promedioKoalas}`);
  } else if (promedioDolphins === promedioKoalas) {
    console.log("Empate");
  }
} else {
  console.log("Ninguno gano el trofeo");
}
