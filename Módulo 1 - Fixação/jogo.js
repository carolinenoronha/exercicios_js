//Primeira versão do jogo situacional que virou o "Gustavinho na UFRJ"
//Prática de condicionais, inputs em prompts e alerts


function decisao1(resposta){
   var primeirafase = prompt (`É outubro de 2020. Já faz sete meses do início da quarentena e você não aguenta mais ficar em casa apesar de ter tentado se manter certo este tempo todo. É uma quarta feira de sol. Você pensa: 
"É dia de semana. A praia vai estar vazia... Acho que posso me dar ao luxo". 
 E aí? Você faz o que?
 Escolha entre: \n 1) Vou  \n e \n 2) Não vou`)

        if (primeirafase == "1" || primeirafase == "Vou" || primeirafase == "1) Vou"){
            alert ("Foi corongadx e morreu! Volte para o início do jogo.")
            document.location.reload(true);
        }

        else if (primeirafase == "2" || primeirafase == "Não vou" || primeirafase == "2) Não vou"){
            alert ("Sensatx")

            var segundafase = prompt ("Vai fazer o que? \n 1) Estudar \n 2) Ver série")
                if (segundafase == 1 || segundafase == "Estudar" || segundafase == "1) Estudar"){
                    alert ("Brabo! Vai se dar bem. Agora joga de novo.");
                    document.location.reload(true);
                }

                else if (segundafase == "2" || segundafase == "Ver série" || segundafase == "2) Ver série"){
                    alert ("Toma vervonha na cara! Volte para o início do jogo.");
                    document.location.reload(true);
                }

        }
}


decisao1 ("resposta")

