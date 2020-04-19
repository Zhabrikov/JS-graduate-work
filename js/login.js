document.addEventListener("DOMContentLoaded", function(){
    const us = document.querySelector(".user"),
          out = document.querySelector(".authorizate");

    us.addEventListener("click", function(){
        out.style.display = "flex";
    });
    out.addEventListener("mousedown", function(e){
        if(e.target == this){
            this.style.display = "none";
        }
    });
});

