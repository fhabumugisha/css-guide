var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var madalNoButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var selectPlanButton =  document.querySelectorAll('.plan button')

for(var i = 0; i < selectPlanButton.length; i++){
    selectPlanButton[i].addEventListener('click', function(){
       /*  backdrop.style.display ='block'
        modal.style.display ='block' */
        modal.classList.add('show');
        backdrop.classList.add('show');
    });
}
if(madalNoButton){
    madalNoButton.addEventListener('click', closeModal);
}


backdrop.addEventListener('click', function(){   
    mobileNav.classList.remove('show');
    closeModal();
});

function closeModal(){   
    backdrop.classList.remove('show');
    modal.classList.remove('show');
}


toggleButton.addEventListener('click', function(){    
    backdrop.classList.add('show');
    mobileNav.classList.add('show');
});
