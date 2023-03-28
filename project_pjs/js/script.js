function validate(){
    var Ucheck = document.forms['LogForm']['login_username'].value;
    var Pcheck = document.forms['LogForm']['login_password'].value;
    if (Ucheck.trim() == 'pijamassexys@gmail.com' && Pcheck == 'pijama123') {
      alert("Hola administrador, en un momento será redirigido al panel de control")
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 2000);
    }
    else{
      alert("Inténtelo nuevamente por favor");
    }
  }