

let count = 0


const value = document.querySelector('#value')

const buttons = document.querySelectorAll('.btn')

buttons.forEach( (button) => {

button.addEventListener('click' , (e) => {

    const operation = e.currentTarget.classList

    if (operation.contains('decrease')){

        count --

    }

    else if (operation.contains('increase')){

        count ++
    }

    else{

        count = 0
    }

    if (count > 0){

        value.style.color = 'green'
    }

    else if (count < 0){

        value.style.color = 'red'
    }

    else{

        value.style.color = "gray"
    }


    value.textContent = count

})

})




















