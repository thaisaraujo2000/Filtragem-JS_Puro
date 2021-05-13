let item = document.querySelectorAll('.item')
let itemBox = document.querySelectorAll('.itemBox')

item.forEach((item_single) => {
    item_single.addEventListener('click', function () {
        item.forEach((item_single1) => {
            item_single1.classList.remove('active')
        })
        this.classList.add('active')

        let dataFilter = this.getAttribute('data-filter')

        itemBox.forEach((itemBox_single) => {
            itemBox_single.classList.remove('active')
            itemBox_single.classList.add('hide')

            if (itemBox_single.getAttribute('data-item') == dataFilter || dataFilter == 'todos') {
                itemBox_single.classList.remove('hide')
                itemBox_single.classList.add('active')
            }
        })

    })

})

    // OUTRA FORMA
    // for(let i = 0; i<item.length; i++) {
    //   item[i].addEventListener('click', function(){
    //     for(let j = 0; j<item.length; j++){
    //       item[j].classList.remove('active')
    //     }
    //     this.classList.add('active')

    //     let dataFilter = this.getAttribute('data-filter')

    //     for(let k = 0; k<itemBox.length; k++) {
    //       itemBox[k].classList.remove('active')
    //       itemBox[k].classList.add('hide')

    //       if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == 'todos'){
    //         itemBox[k].classList.remove('hide')
    //         itemBox[k].classList.add('active')
    //       }
    //     }
    //   })
    // }