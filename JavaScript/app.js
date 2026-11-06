let body = document.getElementById("body")
let btn = document.getElementById("btn")

btn.addEventListener('click',theme)

function theme() {
    // console.log('hi');
    
    if (btn.textcontent =='Dark') {
        body.classList.add('Dark')
        btn.textcontent = 'light'
    }
    else {
        body.classList.remove('Dark')
        btn.textcontent = 'Dark'
    }
}
