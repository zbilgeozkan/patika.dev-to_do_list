var closebtns = document.getElementsByClassName("close");
var i;

for (i = 0; i < closebtns.length; i++) {
    closebtns[i].addEventListener("click", function(){
    this.parentElement.style.display = 'none';
    });

}

let x = `<span class="close">&times;</span>` // Cross Sign

let inputDOM = document.querySelector('#task'); // Adding Elements
let ulDOM = document.querySelector('#list');

function newElement(){
    
    if(inputDOM.value.length>0 ){
        let liDOM = document.createElement('li');
        liDOM.innerHTML= `${inputDOM.value} ${x}` 
        ulDOM.appendChild(liDOM)
        liDOM.addEventListener("click", blue)
        inputDOM.value = "" // Clearing Inputs
    
        $('li').hover(function(){
        $(this).find('span').click(function(){
        this.parentElement.style.display = 'none';
        })
    })

// Adding "checked" to newly added elements
    function blue(){
    liDOM.className == "checked" ? liDOM.classList.remove("checked"): liDOM.classList.add("checked")

}
$(".success").toast('show')

    }else {
        $(".error").toast('show')

    }
    
}

// Adding "checked" to oldly added elements
let liAll = document.querySelectorAll('li');
for (let i =0; i<liAll.length;i++) {
    console.log(i)
    liAll[i].addEventListener("click", function(){
    liAll[i].className == "checked" ? liAll[i].classList.remove("checked"): liAll[i].classList.add("checked")
    })
    
}   