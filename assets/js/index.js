const $Button = document.querySelector('.btn');

let $InputChecking = document.querySelectorAll('.check-input')[1];

$InputChecking.addEventListener('input',()=>{
    
    let index = 0;
    let $CheckInput = document.querySelectorAll('.check-input');

    $CheckInput.forEach((item)=>{


        if(!item.value){

            errorAlert(index);

        }else {

            let $selectAlert = document.querySelectorAll('.alert')[index];
            
            $selectAlert.style.display = 'none'

            let $inputConfirmed = document.querySelectorAll('.check-input')[index];
            
            $inputConfirmed.style.border = '2px solid #3CCC87'
        }

        index++;
    });

});


function errorAlert(index) {
    let $selectAlert = document.querySelectorAll('.alert')[index];

    $selectAlert.style.display = 'inline';

    let $inputConfirmed = document.querySelectorAll('.check-input')[index];

    $inputConfirmed.style.border = '2px solid #F52E2E';
}

