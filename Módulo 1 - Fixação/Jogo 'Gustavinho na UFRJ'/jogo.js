var texto = document.querySelector ("#texto");
    var botao1 = document.querySelector ("#btn1");
    var botao2 = document.querySelector ("#btn2");
    var imagem = document.getElementById("imagens")
   

function primeirafase () {
    texto.textContent = "Gustavo é um estudante de Nanotecnologia da UFRJ. Ele divide seu tempo entre as aulas e as atividades de iniciação científica no IMA (Instituto de Macromoléculas). É uma bela quarta-feira de sol e Gustavo precisa da sua ajuda para escolher uma camisa. Escolha:";
    botao1.innerText = "Camisa rosa";
    botao2.innerText = "Camisa azul";
    botao1.onclick = segundafase1;
    botao2.onclick = segundafase2;
    imagem.innerHTML = `<img  id = "img" class = "foto" width = "350" height = "400" alt = "gustop" src = "file:///C:/Users/USUARIO/Downloads/gustop.jpeg">`
}

function segundafase1() {
    
    texto.textContent = "Muito bem, player! Você é sensatx e sabe que às quartas usamos rosa. Agora você está chegando na UFRJ e deve decidir entre assistir uma aula de cálculo ou ir para o IMA fazer coisas do laboratório:";
    botao1.innerText = "Ir para a aula";
    botao2.innerText = "Ir para o laboratório";
    botao1.onclick = aula;
    botao2.onclick = ima;
    imagem.innerHTML = `<img class = "foto" width = "350" height = "400" alt = "gustop" src = "file:///C:/Users/USUARIO/Downloads/gus_rosa.jpeg">` 

     
}

function segundafase2(){
    texto.textContent = "Beesha, não faça a sonsa pois você sabe que às quartas usamos rosa. Mas tudo bem, você não vai perder o jogo por isso... por enquanto. Agora você está chegando na UFRJ e deve decidir entre assistir uma aula de cálculo ou ir para o IMA fazer coisas do laboratório:"
    botao1.innerText = "Ir para a aula";
    botao2.innerText = "Ir para o laboratório";
    botao1.onclick  = aula;
    botao2.onclick = ima;
    imagem.innerHTML = `<img class = "foto" width = "350" height = "400" alt = "gustop" src = "file:///C:/Users/USUARIO/Downloads/gus_azul.jpeg">`
       
     
}

function aula(){
    texto.textContent = "Você não consegue se concentrar com o sotaque russo do seu professor e acaba perdendo a manhã inteira! Mais sorte da próxima vez"
    botao1.innerText = "Volte para o início";     
    botao1.onclick  = primeirafase;
    imagem.innerHTML = `<img class = "foto" width = "350" height = "400" alt = "gustop" src = "file:///C:/Users/USUARIO/Downloads/impaciente.jpeg">`
    botao2.remove()
}

function ima(){
    texto.textContent = "Ele faz suas obrigações e para para almoçar perto do meio dia. A professora Maria Inês o vê e fala: “Gustavo, venha cá”. Ele:"
    botao1.innerText = "Decide que o almoço pode esperar e vai";    
    botao2.innerText = "Pede que a professora segure uma horinha pois ele está com muita fome";
    botao1.onclick = atendeu;
    botao2.onclick = nao_atendeu;
    imagem.innerHTML = `<img class = "foto" width = "350" height = "400" alt = "gustop" src = "file:///C:/Users/USUARIO/Downloads/mibt.jpeg">` 
}

function atendeu(){
    texto.textContent = "Gustavo morreu de fome. Game over."
    botao1.innerText = "Volte ao início";    
    botao1.onclick = primeirafase;
    imagem.innerHTML = `<img class = "foto" width = "350" height = "400" alt = "gustop" src = "file:///C:/Users/USUARIO/Downloads/morto.jpg">`
    botao2.remove()

}

function nao_atendeu(){
    texto.textContent = "Gustavo chega no bandejão. As opções de comida são peixe e omelete. Qual delas Gustavo irá comer?"
    botao1.innerText = "Peixe";
    botao2.innerText = "Omelete";
    botao1.onclick = peixe;
    botao2.onclick = omelete;
    imagem.innerHTML = `<img class = "foto" width = "350" height = "400" alt = "gustop" src = "file:///C:/Users/USUARIO/Downloads/papando.jpeg">`
}

function peixe(){
    texto.textContent = "O peixe estava gostoso. Ele fica feliz e de bom humor para ajuda a professora até o fim do dia! Agora, Gustavo está fazendo seus experimentos. Seu amigo Lucas chega para lhe pedir ajuda. Ele decide:"
    botao1.innerText = "Ajudar"; 
    botao2.innerText = "Não ajudar";
    botao1.onclick = ajudou;
    botao2.onclick = nao_ajudou;
    imagem.innerHTML = `<img class = "foto" width = "450" height = "400" alt = "gustop" src = "file:///C:/Users/USUARIO/Downloads/tienne.jpeg">`
   
}

function omelete(){
    texto.textContent = "O omelete estava ruim. Ele fica triste pois não almoçou bem mas segue o baile e volta ao IMA. Agora, Gustavo está fazendo seus experimentos. Seu amigo Lucas chega para lhe pedir ajuda. Ele decide:"
    botao1.innerText = "Ajudar"; 
    botao2.innerText = "Não ajudar";
    botao1.onclick = ajudou;
    botao2.onclick = nao_ajudou;
    imagem.innerHTML = `<img class = "foto" width = "450" height = "400" alt = "gustop" src = "file:///C:/Users/USUARIO/Downloads/tienne.jpeg">`
}

function ajudou(){
    texto.textContent = "Gustavo se distrai ao ajudar Lucas e seu experimento explode! O dia parece estar arruinado mas Amanda, vendo seu desespero, chega e oferece ajuda. Eles recomeçam do zero e ela decide pipetar ácido na solução rapidamente. O Gustavo, transtornado com o dia agitado:"
    botao1.innerText = "Deixa que Amanda faça do jeito que achar melhor"; 
    botao2.innerText = "Pede que Amanda pipete o ácido lentamente";
    botao1.onclick = rapido;
    botao2.onclick = lento;
    imagem.innerHTML = `<img class = "foto" width = "350" height = "400" alt = "gustop" src = "file:///C:/Users/USUARIO/Downloads/amanda.jpg">`
}

function nao_ajudou(){
    texto.textContent = "Gustavo consegue focar em seu experimento, que lhe rende um Nobel. Parabéns, você venceu!"
    botao1.innerText = "Jogar novamente"; 
    botao1.onclick = primeirafase;
    imagem.innerHTML = `<img class = "foto" width = "350" height = "400" alt = "gustop" src = "file:///C:/Users/USUARIO/Downloads/vc_ganhou.jpg">`
    botao2.remove()
        
}

function rapido (){
    texto.textContent = "Gustavo é gado demais é perdeu novamente seu experimento. Ele sabia que a pipetagem deveria ser feita lentamente. O dia está arruinado!"
    botao1.innerText = "Jogar novamente"; 
    botao1.onclick = primeirafase;
    imagem.innerHTML = `<img class = "foto" width = "350" height = "400" alt = "gustop" src = "file:///C:/Users/USUARIO/Downloads/papoutriste.jpeg">`
    botao2.remove()
}

function lento (){
    texto.textContent = "O experimento deu certo! Gustavo ganha um Nobel. Parabéns, você venceu!"
    botao1.innerText = "Jogar novamente"; 
    botao1.onclick = primeirafase;
    imagem.innerHTML = `<img class = "foto" width = "350" height = "400" alt = "gustop" src = "file:///C:/Users/USUARIO/Downloads/vc_ganhou.jpg">`
    botao2.remove()
}


primeirafase();