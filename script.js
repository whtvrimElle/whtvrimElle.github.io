const filterButtons=document.querySelector("#filter-btns").children;
const items=document.querySelector(".gram-gallery").children;


for(let i=0; i<filterButtons.length; i++){
    filterButtons[i].addEventListener("click", function(){
        for(let j=0; j<filterButtons.length; j++){
            filterButtons[j].classList.remove("active")
        }
        this.classList.add("active");
       const target=this.getAttribute("data-target")

        for(let k=0; k<items.length; k++){
            items[k].style.display="none";
            if(target==items[k].getAttribute("data-id"))
            {
                items[k].style.display="block";
            }
            if(target=="all"){
                items[k].style.display="block";
            }
        }
    });
}

window.onscroll=function(){
    const docScrollTop=document.documentElement.scrollTop;

    if (window.innerWidth>991){
        if (docScrollTop>100){
            document.querySelector("header").classList.add("fixed");
        }
        else{
            document.querySelector("header").classList.remove("fixed");
        }
    }
}

const navbar=document.querySelector(".navbar");
    a=navbar.querySelectorAll("a");

    a.forEach(function(element){
        element.addEventListener("click",function(){
            for (let i=0; i<a.length; i++){
                a[i].classList.remove("active");
            }
            this.classList.add("active")
            // document.querySelector(".navbar").classList.toggle("show");
        })
    })

//    const menuBar=document.querySelector(".menu-bar");

//     menuBar.addEventListener("click",function(){
//         document.querySelector(".navbar").classList.toggle("show");
//     })

var numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
for (var i = 0; i < numberArray.length; i++){
    let imageIdTag = "#photo" + numberArray[i];
      $(imageIdTag).click(function() {
          let srcLink = $(imageIdTag + ' img').attr('src');
            $('#modalImage').attr('src', srcLink)
            $('#thisModal').modal('show');
      });
}
