let currentIndex = 0;
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;
const carousel = document.querySelector('.carousel');

function moveCarousel() {
    currentIndex++;
    if (currentIndex >= 17/*totalCards*/) {
        currentIndex = 0; // Volta para o primeiro card após o último
    }
   carousel.style.transform = `translateX(-${currentIndex * 100}px)`; // Desloca os cards
}

setInterval(moveCarousel, 1000); // Troca de card a cada 3 segundos

//-------------------------------------------------------------------------------------------------

(function(win,doc){
    'use strict';

    if(doc.querySelectorAll('#testCheckbox')){
        let btn = doc.querySelector('#testCheckbox');
        let div = doc.querySelector('#result');
        
        btn.addEventListener('click', ()=>{
            
            
         //   var texto = "Texto que eu vou enviar \n com quebras de \n texto.";

            let checkboxs = doc.querySelectorAll('.cheq');
            let html = 'SEU PEDIDO FOI: <br>';
            let pedido = 'SEU PEDIDO FOI:' + "%0a";
            let valor = 0;
            for(let i=0; i < checkboxs.length; i++){
                if(checkboxs[i].checked){
                    html += checkboxs[i].value+'<br>';
                    pedido += checkboxs[i].value + "%0a";
                
                //-------------------------------------------------------------------
                if(checkboxs[i].value == "200ml R$10,00"){
                    valor += 10;
                    
                }if(checkboxs[i].value == "350ml R$13,00"){
                    valor += 13;
                    
                }if(checkboxs[i].value == "500ml R$15,00"){
                    valor += 15;
                }      
                //-------------------------------------------------------------------
                if(checkboxs[i].value == "BANANA R$ 1,00"){
                    valor += 1;
                    
                }if(checkboxs[i].value == "MORANGO R$ 3,00"){
                    valor += 3;
                    
                }if(checkboxs[i].value == "KIWI R$ 3,00"){
                    valor += 3;
                }if(checkboxs[i].value == "UVA R$ 1,00"){
                    valor += 1;
                } 
                //-------------------------------------------------------------------


                if(checkboxs[i].value == "KIT KAT R$1,00"){
                    valor += 1;
                    
                }if(checkboxs[i].value == "NUTELA R$3,00"){
                    valor += 3;
                    
                }if(checkboxs[i].value == "BIS R$1,00"){
                    valor += 1;
                   
                }if(checkboxs[i].value == "BANANINHA FINI 3 UNID. R$2,00"){
                    valor += 2;
                    
                }if(checkboxs[i].value == "BEIJOS FINI 3 UNID. R$2,00"){
                    valor += 2;
                    
                }if(checkboxs[i].value == "MARSHMALLOW FINI 3 UNID. R$2,00"){
                    valor += 2;
                   
                }if(checkboxs[i].value == "DENTADURAS FINI 3 UNID. R$2,00"){
                    valor += 2;
                    
                }if(checkboxs[i].value == "BATOM R$2,00"){
                    valor += 2;
                   
                }if(checkboxs[i].value == "CEREJA R$1,00"){
                    valor += 1;
                   
                }if(checkboxs[i].value == "DOCE DE LEITE R$1,00"){
                    valor += 1;
                   
                }if(checkboxs[i].value == "TUBINHO DE WAFER RECHEADO R$0,50"){
                    valor += .5;
                    
                }
                if(checkboxs[i].value == "CREME CHOCANTE DE OVOMALTINE R$3,00"){
                    valor += 3;
                   
                }                  
            }
                
            }
            
            let texto1;
            texto1 = pedido + '*TOTAL R$: ' + valor + "*";
            

            var url = "https://wa.me/5584992069835?text=" + texto1;
            window.open(url, '_blank').focus();
   
        });
    }

})(window, document);

//------------------------------------------------------

    
    
  
