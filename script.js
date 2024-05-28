function MyFunction() {
    var numeroAleatorio = Math.floor(Math.random() * 11); 
    var chances = 2;

    document.getElementById('guessForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var guess = parseInt(document.getElementById('guess').value);
        var message = document.getElementById('message');
        var restartButton = document.getElementById('restart');

        if (guess < 0 || guess > 10) {
            message.innerHTML = "<span style='color: red;'>Insira um número entre 0 e 10</span>";
            return;
        }

        if (numeroAleatorio === guess) {
            message.innerHTML = "<span style='color: green;'>Parabéns! Você adivinhou!</span>";
            restartButton.style.display = 'inline-block';

            
        } else {
            chances--;
            if (chances > 0) {
                message.innerHTML = "<span style='color: red;'>Tentativa errada. Tente novamente. Você tem " + chances + " chance </span>";
            } else {
                message.innerHTML = "<span style='color: red;'>Você perdeu. O número secreto era " + numeroAleatorio + ".</span>";
                restartButton.style.display = 'inline-block';

                
            }
        }
    });

    document.getElementById('restart').addEventListener('click', function() {
        numeroAleatorio = Math.floor(Math.random() * 11); 
        chances = 2;
        document.getElementById('guess').value = '';
        document.getElementById('message').innerHTML = '';
        document.getElementById('restart').style.display = 'none';
    });
}

MyFunction();
