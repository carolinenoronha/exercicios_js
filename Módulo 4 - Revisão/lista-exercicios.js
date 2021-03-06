//Transforme as funções declarativas abaixo em Arrow Functions

const upperName = (name) => {
	return name.toUpperCase(); 	
}
const myFunction = (p1,p2) => {
	return p1*p2
}
const toCelsius = (fahrenheit) => {
	return (5/9) * (fahrenheit -32) 
}



  //A partir do objeto abaixo, instancie apenas uma variável que receba ​first utilizando destructuring

  const obj = { first: 'Jane', last: 'Doe' };
  const primeiroNome = obj.first 


  //A partir do objeto abaixo, instancie uma variavel que receba ​name​ e outra para colors

  company = {
    name: 'ACME Corp',
    address: 'Nowhere st',
    products: {
      shirts: {
        colors: ['red', 'green', 'blue'],
      },
      socks: {
        colors: ['cyan', 'magenta', 'yellow'],
      },
    },
  };
  

  const nomeCor = company.name + ', ' + company.products.shirts.colors[1]


   //Rest & Spread
  //Utilizando um operador clone o objeto c​lothes
  const clothes = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },
  };

  const clones = [...clothes.pants.colors, ...clothes.shirts.colors, ...clothes.socks.colors]
  
    
  //Novamente utilizando um operador, clone o objeto c​lothes​ acima e adicione a este clone um objeto ​shoes​ com propriedade​ colors: ['yellow', 'purple'] ​de modo que fique igual aos objetos p​ ants, shirts ​e​ socks
 
  const clones2 = [...clothes.pants.colors, ...clothes.shirts.colors, ...clothes.socks.colors]
  
  const shoes = { colors: ['yellow', 'purple']}

  clones2.push(shoes)


    
  //Arrays e seus métodos
  //A partir da variável abaixo e utilizando um método de array, retorne a raiz quadrada de todos os valores do array original em um novo array
  var numbers = [4, 9, 16, 25];
  const raizQuadrada = numbers.map((item) => {
    return Math.sqrt(item); 
}); 

  
  //A partir da variável abaixo e utilizando um método de array, multiplique todos os valores do array por 10. Utilize arrow function.
  var numbers2 = [65, 44, 12, 4];
  
  const multiplicacao = numbers2.map((n) => {return n*10}); 

  
    //A partir da variável abaixo retorne um array com valores de ​age​ (idade) maiores ou iguais a 18 com arrow function e filter
    var ages = [32, 33, 16, 40];

    const idades = ages.filter((idade) => idade >= 18);
    