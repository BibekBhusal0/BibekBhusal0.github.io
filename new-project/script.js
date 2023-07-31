
document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('.tab-component').forEach((button)=>{
        button.onclick = change
    })
    document.querySelectorAll('.🎞').forEach((button)=>{
        button.onclick = extend
    })
    document.querySelectorAll('.to-change').forEach((button)=>{
        button.onclick = showHide
    })
    document.querySelectorAll('.close-btn').forEach((button)=>{
        button.onclick = HideHiddenHeader 
    })
    document.querySelectorAll('.go-back').forEach((button)=>{
        button.onclick = HideRequired
    })
    document.querySelectorAll('.change-able').forEach((button)=>{
        button.onclick = ShowRequired
    })
    document.querySelector('.menu').onclick = HideRequired
    // document.querySelector('.close-btn').onclick = HideHiddenHeader 

    // document.querySelector('#hidden-navigarator5').onclick = showSafetyHeader
    // document.querySelector('#hidden-navigarator6').onclick = HideHiddenHeader 
})
function change(){
    removeBorder()
    hideAll()
    shorten()
    this.classList.add('tab-content-border')
    var show = document.querySelector(`#${this.dataset.value}`)
    show.style.display=('grid')
}
function removeBorder(){
    document.querySelectorAll('.tab-component').forEach((item)=>{
        item.classList.remove('tab-content-border')
    })
}
function hideAll(){
    document.querySelectorAll('.main-tab').forEach((item)=>{
        item.style.display=('none')
    })
}
function extend(){
    shorten()
    if (this.dataset.condition == ('short')){
        this.style.backgroundColor=(' #5865f2')
        this.style.color=(' #fff')
        var textShow = document.querySelector(`#no${this.dataset.no}`)
        textShow.style.display=('block')
        var rotator = document.querySelector(`#into${this.dataset.no}`)
        rotator.style.transform = 'rotate(90deg)';
        this.dataset.condition=('extend')
    }
    else if(this.dataset.condition==('extend')){
        shorten
        this.dataset.condition=('short')
    }
}
function shorten(){
    document.querySelectorAll('.🎞').forEach((item)=>{
        item.style.backgroundColor=(' #eee')
        item.style.color=(' #000')
    })
    document.querySelectorAll('.hiding-text').forEach((textToShow =>{
        textToShow.style.display=('none')
    }))
    document.querySelectorAll('.into').forEach((rot)=>{
        rot.style.transform = 'rotate(45deg)';
    })
}
function showHide(){
    if(this.dataset.mode==('more')){
        this.innerHTML =('Show less perks')
        document.querySelector('.nitro-sub-heading-sub-grid').style.display=('grid') 
        this.dataset.mode=('less')
    }
    else if(this.dataset.mode==('less')){
        this.innerHTML =('Show more perks')
        document.querySelector('.nitro-sub-heading-sub-grid').style.display=('none') 
        this.dataset.mode=('more')
    }
}
function HideHiddenHeader(){
    document.querySelector('.hide-header-parent').style.display=('none')
}
function HideRequired(){
    document.querySelector('.hide-header-parent').style.display=('block')

    document.querySelector('.hide-header-safety').style.display=(" none")
    document.querySelector('.hide-header-moderator').style.display=(" none")
    document.querySelector('.hide-header').style.display=(" block")
}
function ShowRequired(){
    var showing = document.querySelector(`.hide-header-${this.dataset.todo}`)
    showing.style.display=('block')
    document.querySelector('.hide-header').style.display=(" none")
}
// function ShowRequired(){
//     document.querySelector(.hide-header-safety)
//     showing.style.display=('block')
//     document.querySelector('.hide-header').style.display=(" block")
// }
