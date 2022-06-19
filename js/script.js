const formBtn = document.getElementById('form-btn')
const emailInput = document.getElementById('email')

formBtn.addEventListener("click", function(event){
    let emailText = emailInput.value
    const regex = /^\w+(\@([a-z]+)(\.com)$)|^\w+(\@([a-z]+)(\.com)(\.ar)$)/g
    if(emailText === ""){
         event.preventDefault()
         formBtn.classList.remove('form__btn--toggle')
         formBtn.classList.add('form__btn--empty')
         emailInput.classList.add('form__btn--border')  
    }else if(!regex.test(emailText)){
         event.preventDefault()
         formBtn.classList.remove('form__btn--toggle')
         formBtn.classList.remove('form__btn--empty')
         emailInput.classList.add('form__btn--border')
    }
});
