
//adding a function
(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clrBtn= document.querySelector('.btn-clr');
    let eqlBtn = document.querySelector('.btn-equal');




    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    clrBtn.addEventListener('click', function(e){
        screen.value = "";
    });

    eqlBtn.addEventListener('click', function(f){
        if(screen.value == ""){
            screen.value = "";
        }else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })


})();


// if anyone facing issue with equal or clear  button coming as undefined,
//  then please remove btn class from equal  and just make the class name 
//  as btn-equal or btn-clear and update the app.js accordingly.

