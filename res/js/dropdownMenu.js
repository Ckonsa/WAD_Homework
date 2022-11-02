window.onload = function() {
    const list = document.querySelector('.dropdown_list')
    const btn = document.querySelector('.dropdown>.icon')

    btn.addEventListener('click', (e)=> {
        list.classList.toggle('show')
        e.stopPropagation()
    })

    // document.addEventListener('click', (e)=> {
    //     if(e.target.closest('.dropdown_list')) return 
    //     list.classList.remove('show')
    // })
}