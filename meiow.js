document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('.onclick').forEach((button)=>{
        button.onclick = change
    })
    let showing = localStorage.getItem('s')
    if(showing == null){
        showing='home'
    }
    document.querySelector(`#${showing}`).style.display=('block')
    localStorage.setItem('s' , 'home')
})

function change(){
    hide()
    const toshow = this.dataset.value
    localStorage.setItem('s' , toshow)
    document.querySelector(`#${toshow}`).style.display=('block')
}
function hide(){
    document.querySelectorAll('.pages').forEach((item)=>{
        item.style.display=('none')})
}