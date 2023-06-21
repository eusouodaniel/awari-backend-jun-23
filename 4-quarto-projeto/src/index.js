import url from 'node:url';

const myURL =
  new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'); 

const formatUrl = url.format('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash')
console.log(formatUrl);
// async function nomeDafunction(param1, param2) {
//     return { param1, param2 }
// }

// const funcaoSeta = (param1, param2) => {
//     console.log(param1);
//     console.log(param2);
// }

// const funcaoAnonima = async function(param1, param2) {

// }

// const resultado = nomeDafunction(1,2);

// resultado.then((result) => {
//     funcaoSeta(result.param1, result.param2);
// }).catch((e) => {
//     console.error('deu erro', e);
// }).finally(() => {
//     console.log('finalizou')
// })
