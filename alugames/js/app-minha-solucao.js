let id;
let classe;
let tagA;
function alterarStatus(num){             
    if(num == 1){               
        id = document.getElementById('game-' + num.toString());
        classe = id.getElementsByClassName('dashboard__item__img');
        tagA = id.getElementsByTagName('a');
        if(tagA[0].classList.contains('dashboard__item__button--return')){            
            classe[0].classList.remove('dashboard__item__img--rented');
            tagA[0].classList.remove('dashboard__item__button--return');
            tagA[0].innerHTML = "Alugar";            
        }else {
            classe[0].classList.add('dashboard__item__img--rented');
            tagA[0].classList.add('dashboard__item__button--return');    
            tagA[0].innerHTML = "Devolver";
        }    
    } else if(num == 2){        
        id = document.getElementById('game-' + num.toString());
        classe = id.getElementsByClassName('dashboard__item__img');
        tagA = id.getElementsByTagName('a');
        if(tagA[0].classList.contains('dashboard__item__button--return')){            
            classe[0].classList.remove('dashboard__item__img--rented');
            tagA[0].classList.remove('dashboard__item__button--return');
            tagA[0].innerHTML = "Alugar";            
        }else {
            classe[0].classList.add('dashboard__item__img--rented');
            tagA[0].classList.add('dashboard__item__button--return');    
            tagA[0].innerHTML = "Devolver";
        }
    } else{        
        id = document.getElementById('game-' + num.toString());
        classe = id.getElementsByClassName('dashboard__item__img');
        tagA = id.getElementsByTagName('a');
        if(tagA[0].classList.contains('dashboard__item__button--return')){            
            classe[0].classList.remove('dashboard__item__img--rented');
            tagA[0].classList.remove('dashboard__item__button--return');
            tagA[0].innerHTML = "Alugar";            
        }else {            
            classe[0].classList.add('dashboard__item__img--rented'); 
            tagA[0].classList.add('dashboard__item__button--return');    
            tagA[0].innerHTML = "Devolver";
        }
    }
}
