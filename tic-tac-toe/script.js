document.addEventListener('DOMContentLoaded', main )
extrabord=[null,null,null,null,null,null,null,null,null]
imp = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
function main(){
    draw()
    document.querySelector('.reset').onclick =()=> set()
}
function draw (){
    count = 0
    document.querySelector('.test').innerHTML=("O's turn")
    localStorage.setItem('count', count)
    document.querySelectorAll('.gridItem').forEach(button =>{
        button.onclick = function(){
            const value = this.dataset.no
            if (this.innerHTML ==''){
                if (localStorage.getItem('count')%2 == 1){
                    this.innerHTML=('close')
                    extrabord[value]='X'
                    document.querySelector('.test').innerHTML=("O's turn")
                }
                else {this.innerHTML=('circle')
                extrabord[value] ='O'
                document.querySelector('.test').innerHTML=("X's turn")
            }
            count++
            localStorage.setItem('count', count)
            }
            checkWin()
        }
    })
};
function set(){
    extrabord=[null,null,null,null,null,null,null,null,null]
    document.querySelectorAll('.gridItem').forEach((button)=>{
        button.innerHTML=('')
        button.style.color=('black')
    })
    draw()
}
function checkWin(){
    for(j of imp){
        const a = j[0] 
        const b = j[1] 
        const c = j[2] 
        win = extrabord[a]==extrabord[b] && extrabord[b]==extrabord[c] && extrabord[a]!=null
        if (win){
            document.querySelector('.test').innerHTML=(` ${extrabord[a]}  win`)
            for (let i=0 ; i<3; i++){
                let winElement= document.querySelector(`#block${j[i]}`) 
                winElement.style.color =(" red") ;
            }
            setTimeout(set , 1000)
        }

        else {
            const draw =extrabord.every((n)=>n!=null)
            if (draw){ setTimeout(set , 1000)
            }
        }
    }
    
}