document.addEventListener('DOMContentLoaded',calculate)
function calculate(){
        var x="" ;
        var y="" ;
        localStorage.setItem('x',x)
        localStorage.setItem('y',y)
    document.querySelectorAll('button').forEach (function(button) {    
        button.onclick = function(){
            if (document.querySelector('#sym').innerHTML.length == 0 ){
            x = x + button.dataset.value;
            localStorage.setItem('x',x)
            document.querySelector('#output').innerHTML = x;
            }
            else{
            y = y + button.dataset.value;
            document.querySelector('#output2').innerHTML = y;
            document.querySelector('#output2').style.position= 'absolute';
            document.querySelector('#output').style.position= 'absolute';
            localStorage.setItem('y',y)
            }
            if (document.querySelector('#output').innerHTML.length > 7 ){
                document.querySelector('#output').style.fontSize = '40px'
                document.querySelector('#output').style.top = '100px'
            }
            if (document.querySelector('#output2').innerHTML.length > 7 ){
                document.querySelector('#output2').style.fontSize = '40px'
                document.querySelector('#output2').style.top = '100px'
            }
            let symbol = button.dataset.work
            y = localStorage.getItem('y');
            x = localStorage.getItem('x');
            if ( button.id =='add' || button.id =='subtract' || button.id =='multply' || button.id =='divide'  ){    
                document.querySelector('#output').style.top= '30px';
                document.querySelector('#output').style.fontSize = '40px';
                document.querySelector('#sym').innerHTML = symbol 
                localStorage.setItem('op',symbol)
                localStorage.setItem('work', button.dataset.op)
            }
            if(button.id == 'equals'){
                symbol=localStorage.getItem('op')

                if (localStorage.getItem('work') =='+' ){
                    var z = Number(x) + Number(y);
                }
                if (localStorage.getItem('work') =='-'  ){
                    var z=Number(x) - Number(y);
                }
                if (localStorage.getItem('work') =='x'  ){
                    var z=Number(x) * Number(y);
                }                        
                if (localStorage.getItem('work') =='÷'  ){
                    var z=x%y;
                }
                if (z % 1 !='0'){
                    localStorage.setItem('z',z.toFixed(3))
                }
                else{
                    localStorage.setItem('z',z)
                }
                document.querySelector('#sym').innerHTML = ''
                document.querySelector('#output2').innerHTML= localStorage.getItem('z') ;
                document.querySelector('#output').innerHTML= `${x}${symbol}${y}=`; 
               }   
               if (button.id == 'clear'){
                localStorage.setItem('x')=''
               }

            } 
        } )}
