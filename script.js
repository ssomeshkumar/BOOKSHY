//select popup button,popupoverlay,popupbox
var addpopupbutton=document.getElementById("add popup button")
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
//eventliser
addpopupbutton.addEventListener("click",function() {

    popupoverlay.style.display="block"
    popupbox.style.display="block"

})

//cancel
var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(){
    event.preventDefault()
     popupoverlay.style.display = "none"
     popupbox.style.display = "none"

})

// container,add-

var container= document.querySelector(".container")
var addbook= document.getElementById("add-book")
var booktitleinput= document.getElementById("book-title-input")
var booksdescriptioninput= document.getElementById("book-description-input")
var bookauthorinput= document.getElementById("book-author-input")

addbook.addEventListener("click",function(event){
  event.preventDefault();
  var div = document.createElement("div");
  div.setAttribute("class", "book-container");
  div.innerHTML = `<h2>${booktitleinput.value}</h2>
        <h5>${bookauthorinput.value}</h5>
        <p>${booksdescriptioninput.value}</p>
     <button onclick="deletebook(event)">Delete</button> `
     popupoverlay.style.display = "none"
     popupbox.style.display = "none"


  container.append(div);
})

function deletebook(event)
{
    event.target.parentElement.remove()
}
