//Exercício para calcular inflação baseado em preços passados e atuais de alimentos e suas médias por tempo 

    function calculoinf(p1,p2,periodo,produto){
        var inf = ((p2-p1)/periodo);
        var inf2 = Math.round(inf*100)/100;
        
        return ("A inflação diária do " + produto + " foi de: " + inf2 + " reais por dia.")

    }

    console.log(calculoinf(3.30,4.70,6, "tomate"));

    console.log(calculoinf(2.99,3.25,6,"arroz"));
    
    console.log(calculoinf(3.99,4.14,6,"cenoura"));


    
    var inf_tomate = ((4.70-3.30)/6);
    var inf_arroz = ((3.25-2.99)/6);
    var inf_cenoura = ((4.14-3.99)/6);
    var calculo_media = Math.round((inf_arroz+inf_tomate+inf_cenoura)*100/3)/100;

    console.log("A inflação média dos produtos é: "+ calculo_media + " reais por dia")
