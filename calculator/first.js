let x =''
document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('button').forEach (function(button) {  
    button.onclick = function(){
        calculate(button); 
        document.querySelector('input').value = x 
        } 
    })
})
function calculate(button){
    if (button.dataset.value == 'C'){
        x =''
   }
   else if(button.dataset.value == '='){
        x=eval(document.querySelector('input').value)
       round(2) ;
   }
   else if(button.dataset.value == '!'){
        if(x % 1 =='0'){
            let y =x
            let j=1
            i=1
            while(i<(Number(y)+1)){
                j=j*i
                i+=1
                console.log(j)
                x=j
            }
        }
   }
   else{
       x += button.dataset.value ;
   }
}
function round(digit){
    if (x % 1 !='0'){
        x =x.toFixed(digit)
    }}