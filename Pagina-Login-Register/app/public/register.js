document.getElementById("register-form").addEventListener("submit",(e) => {
    e.preventDefault();
    console.log(e);
    


    // accedemos al valor del user del hijo del evento
    console.log(e.target.children.user.value);
    console.log(e.target.children.email.value);
    console.log(e.target.children.password.value);


})