  
        var elementos = document.querySelectorAll('.player-options div > img') // Seleciona todos os elementos de imagem dentro das divs com a classe "player-options" e salva em uma variável chamada "elementos".
        var playerOpt = ""; //Declara uma variável vazia chamada "playerOpt" para armazenar a escolha do jogador.
        var inimigoOpt ="";//Declara uma variável vazia chamada "inimigoOtp" para armazenar a escolha da IA.

        function resetInimigo(){// Define uma função chamada "resetInimigo" que redefine a aparência das opções do inimigo para o estado padrão.
            const enemyOptions = document.querySelectorAll('.enemy-options div')
            for(var i = 0; i < enemyOptions.length; i++){
                    enemyOptions[i].childNodes[0].style.opacity = 0.2;
                    enemyOptions[i].childNodes[0].style.width = "100px";
                    enemyOptions[i].childNodes[0].style.maxWidth = "200px";
                    enemyOptions[i].childNodes[0].style.transition = "0.5s";
                    
                }
        };

        function inimigoJogar(){//Define uma função chamada "inimigoJogar" que implementa a lógica do jogo para a jogada do inimigo.
            let rand = Math.floor(Math.random()*3); //Gera um número aleatório entre 0 e 2 e salva em uma variável chamada "rand".
           
            const enemyOptions = document.querySelectorAll('.enemy-options div')// Seleciona todos os elementos div dentro da classe "enemy-options" e salva em uma variável chamada "enemyOptions".
            resetInimigo();//Chama a função "resetInimigo" para redefinir a aparência das opções do inimigo.
            for(var i = 0; i < enemyOptions.length; i++){
                if(i == rand){//Verifica se o índice do loop "i" é igual ao número aleatório gerado "rand".
                    enemyOptions[i].childNodes[0].style.opacity = 1;
                    enemyOptions[i].childNodes[0].style.width = "200px";
                    enemyOptions[i].childNodes[0].style.transition = "1s";
                    inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt') //Salva o atributo "opt" da imagem escolhida pelo inimigo na variável "inimigoOpt".
                    
                    

                }

            }
         
           /*Os próximos 6 blocos de código (começando com "if(playerOpt == 'pedra' && inimigoOpt == 'papel')") 
           verificam todas as combinações possíveis de escolhas do jogador e do inimigo e determinam o resultado do jogo.
            Se uma combinação correspondente é encontrada, um som é tocado e uma mensagem é exibida com o resultado.*/
        if(playerOpt == 'pedra' && inimigoOpt == 'papel'){
            setTimeout(function(){//Define um atraso de 5s antes de executar o código dentro da função de retorno. Isso é usado para dar tempo suficiente para a animação de escolha do inimigo ser exibida antes de exibir o resultado.
                document.getElementById('derrota').play();
                alert('Você perdeu🥺🥺🥺');
        },500);
        }else if( playerOpt == 'papel' && inimigoOpt == 'tesoura'){
            setTimeout(function(){
                document.getElementById('derrota').play();
                alert('Você perdeu🥺🥺🥺');
        },500);
        }else if( playerOpt == 'tesoura' && inimigoOpt == 'pedra'){
            setTimeout(function(){
                document.getElementById('derrota').play();
                alert('Você perdeu🥺🥺🥺');
        },500);
        }else if(playerOpt == 'papel' && inimigoOpt == 'pedra'){
            setTimeout(function(){
            document.getElementById('vitoria').play();
                alert('Parabéns, você Venceu😀!!!!');
        },500);

        }else if(playerOpt == 'pedra' && inimigoOpt == 'tesoura'){
            setTimeout(function(){
            document.getElementById('vitoria').play();
            alert('Parabéns, você Venceu😀!!!!');
        },500);
        }else if(playerOpt == 'tesoura' && inimigoOpt == 'papel'){
            setTimeout(function(){
            document.getElementById('vitoria').play();
            alert('Parabéns, você Venceu😀!!!!');
        },500);
        }else{
            setTimeout(function(){
            document.getElementById('empate').play();
           alert('EMPATE🤔!!');
        },500);
        }
        setTimeout(function(){
            const enemyOptions = document.querySelectorAll('.enemy-options div');
            for(var i = 0; i < enemyOptions.length; i++){
            enemyOptions[i].childNodes[0].style.opacity = 0.2;
            enemyOptions[i].childNodes[0].style.width = "100px";
            
            
        }
        },2000)//Define um atraso de 2 segundos antes de executar o código dentro da função de retorno. Isso é usado para redefinir a aparência das opções do inimigo após a exibição do resultado.

        
        }
     
        function resetOpacidadePlayer(){//Define uma função chamada "resetOpacidadePlayer" que redefine a opacidade de todas as opções do jogador para o estado padrão.
            for(var i = 0; i < elementos.length; i++){
                elementos[i].style.opacity = 0.3;
                
            }
        }
            /*O loop "for" abaixo adiciona um evento de clique a cada opção do jogador. 
            Quando uma opção é clicada, a opacidade de todas as opções do jogador é redefinida para o estado padrão e a opacidade da opção clicada para 1 e atribui a opção escolhida do player em opt*/
        for(var i = 0 ; i < elementos.length; i++){
            elementos[i].addEventListener('click',(t)=>{ //usamos t para target, pare recuperar o que foi clicado
                resetOpacidadePlayer();
                t.target.style.opacity = 1;
                playerOpt = t.target.getAttribute('opt');
                
                inimigoJogar();


            });
            
        }
   
