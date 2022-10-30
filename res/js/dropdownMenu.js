window.onload = function() {
    const list = document.querySelector('.dropdown_list')
    const btn = document.querySelector('header>.icon')

    btn.addEventListener('click', (e)=> {
        list.classList.toggle('show')
        e.stopPropagation()
    })

    document.addEventListener('click', (e)=> {
        if(e.target.closest('.dropdown_list')) return 
        list.classList.remove('show')
    })
}


// function toggle_dropdown() {
//     const dropdown = document.getElementById("dropdown_list");
//     dropdown.classList.toggle("show")
// }

// window.onclick = function (event) {
//     if (event.target.matches('#dropdown_icon')) return;

//     console.log(event.target)

//     let dropdowns = document.getElementsByClassName("dropdown_list");
//     for (let i = 0; i < dropdowns.length; i++) {
//       let openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
// } 