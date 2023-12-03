// document.querySelector('#result').onclick = getResult

getResult()

function getResult() {
    let menu = document.querySelectorAll('.menu')
    let cost = 0
    let kkal = 0
    for ( let i =0; i < menu.length; i++) {
        if (menu[i].checked == true) {
            cost += parseFloat(menu[i].getAttribute('data-cost'))
            kkal += parseFloat(menu[i].getAttribute('data-kkal'))
        } 
    }
    document.getElementById('cost').innerHTML = cost
    document.getElementById('kkal').innerHTML = kkal
}

document.querySelectorAll('.menu').forEach((element) => element.addEventListener('change', getResult))

// document.body.onchange = getCheck
