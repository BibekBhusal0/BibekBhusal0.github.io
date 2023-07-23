document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('.tab-icon').forEach(function(button){
        button.onclick = selectItem
})
})

function selectItem(e){
    removeBorder()
    removeShow()
    this.classList.add('tab-border')
    var tab = document.querySelector(`#${this.id}-content`)
    tab.classList.add('show')
} 
function removeBorder(){
    document.querySelectorAll('.tab-icon').forEach( item =>{ 
        item.classList.remove('tab-border');
    })
}
function removeShow(){
    document.querySelectorAll('.tab-content-item').forEach( item =>{ 
        item.classList.remove('show');
})}
