let heading = document.querySelectorAll('.accordion')

for(let i = 0; i < heading.length; i++){

    heading[i].addEventListener('click', function() {
        this.classList.toggle('active')

        let desc = heading[i].nextElementSibling;

        if(desc.style.maxHeight){
            desc.style.maxHeight = null
        } else {
            desc.style.maxHeight = desc.scrollHeight + "px"
        }
    })
}

/*
let desc = heading[i].nextElementSibling;
if(desc.style.maxHeight){
    desc.style.maxHeight = null
} else {
    desc.style.maxHeight = desc.scrollHeight + "px"
}
*/