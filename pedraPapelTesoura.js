  
        var elementos = document.querySelectorAll('.player-options div > img')
        var playerOpt = "";
        var inimigoOpt ="";

        function resetInimigo(){
            const enemyOptions = document.querySelectorAll('.enemy-options div')
            for(var i = 0; i < enemyOptions.length; i++){
                    enemyOptions[i].childNodes[0].style.opacity = 0.2;
                    enemyOptions[i].childNodes[0].style.width = "100px";
                    enemyOptions[i].childNodes[0].style.maxWidth = "200px";
                    enemyOptions[i].childNodes[0].style.transition = "0.5s";
                    
                }
        };

        function inimigoJogar(){
            let rand = Math.floor(Math.random()*3); //math.dandom da um numero entre 0 e 1 e multimicamos por 3
           
            const enemyOptions = document.querySelectorAll('.enemy-options div')
            resetInimigo();
            for(var i = 0; i < enemyOptions.length; i++){
                if(i == rand){
                    enemyOptions[i].childNodes[0].style.opacity = 1;
                    enemyOptions[i].childNodes[0].style.width = "200px";
                    enemyOptions[i].childNodes[0].style.transition = "1s";
                    inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt')
                    
                    

                }

            }
         
           
        if(playerOpt == 'pedra' && inimigoOpt == 'papel'){
            setTimeout(function(){
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
        },2000)

        
        }
     
        function resetOpacidadePlayer(){
            for(var i = 0; i < elementos.length; i++){
                elementos[i].style.opacity = 0.3;
                
            }
        }

        for(var i = 0 ; i < elementos.length; i++){
            elementos[i].addEventListener('click',(t)=>{ //usamos t para target, pare recuperar o que foi clicado
                resetOpacidadePlayer();
                t.target.style.opacity = 1;
                playerOpt = t.target.getAttribute('opt');
                
                inimigoJogar();


            });
            
        }
   
