document.addEventListener('DOMContentLoaded',calculate)
function calculate(){
    document.querySelectorAll('button').forEach (function(button) {    
        button.onclick = function(){
            var x = document.querySelector('#n1').value ;
            var y = document.querySelector('#n2').value ;
            let symbol = button.dataset.work
            if (button.id =='add'  ){
                    z=Number(x) + Number(y);
                }
                if (button.id=='subtract'  ){
                    z=x - y;
                }
                if (button.id =='multply'  ){
                    z=x * y;
                }                        
                if (button.id =='divide'  ){
                    z=x / y;
                }
                document.querySelector('#output').innerHTML = `= ${z} `; 
                document.querySelector('#sym').innerHTML =button.dataset.work; 
    } }             
)}