

//Variáveis
let x = document.getElementById('peso');
let y = document.getElementById('altura');


let message;
let result;


function imc(){
    result = x.value/(y.value * y.value);
    
    
    switch (true) {
        case result < 16.9:
            message = 'você está muito abaixo do peso';
            break;
            
        case result >= 17 && result <= 18.4:
            message = 'você está abaixo do peso';
            break;
            
        case result >= 18.5 && result <= 24.9:
            message = 'você está com peso ideal';
            break;
            
        case result >= 25 && result <= 29.9:
            message = 'você está acima do peso';
            break;
            
        case result >= 30 && result <= 34.9:
            message = 'você está com obesidade grau 1';
            break;
            
        case result >= 35 && result <= 40:
            message = 'você está com obesidade grau 2';
            break;
            
        case result > 40:
            message = 'você está com obesidade grau 3';
            break;
        
        default:
            message = 'seu IMC não consta em nosso sistema';
            break;
    }
    
    
    return document.getElementById('result').innerHTML = `Seu IMC é ${result.toFixed(1)}, ${message}`;
}

