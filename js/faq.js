document.addEventListener("DOMContentLoaded", function(){
    
    const question_block = Array.prototype.slice.call(document.querySelectorAll(".acordion-block-item"));

    question_block.forEach(function(elem){
        const block_answer = elem.querySelector(".acordion-block-answer"),
              hide_block = elem.querySelector(".acordion-block-hide-block"),
              question_block = elem.querySelector(".acordion-question-block");
        
        question_block.addEventListener("click", function(){
            this.classList.toggle("opened");
            if(this.classList.contains("opened")){
                hide_block.style.height = block_answer.offsetHeight + "px";
            }
            else {
                hide_block.style.height = 0;
            }
           
        });
    });

});