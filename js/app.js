//si hay algun elemento vacío se muestra un alert
function hacerClick() {
    var email = document.getElementById("email").value;
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;
    var checkeado = document.getElementById("terminos").checked;

    var usuarioDatos = {email:email, user:usuario, pass:password};
    var usuarioDatosJSON = JSON.stringify(usuarioDatos);

    if (email === "" || usuario === "" || password === "" || password2 === "") {
        //alert('¡No puedes dejar ningún campo vacío!');
        Swal.fire({
            title: '¡Oops!',
            text: '¡No puedes dejar ningún campo vacío!',
            icon: 'error',
            confirmButtonText: 'Ok'
          });
    }else if (password !== password2){ //si las dos contraseñas no coinciden
        //alert('¡Las contraseñas no coinciden!');
        Swal.fire({
            title: '¡Oops!',
            text: '¡Las contraseñas no coinciden!',
            icon: 'error',
            confirmButtonText: 'Ok'
          });
    } else if (checkeado === false) {
        //alert('¡Debes aceptar los terminos y condiciones!');
        Swal.fire({
            title: '¡Oops!',
            text: '¡Debes aceptar los terminos y condiciones!',
            icon: 'error',
            confirmButtonText: 'Ok'
          });
    } else
    {
        //alert("El resultado en Json es: "+usuarioDatosJSON);
        Swal.fire({
            title: '¡Correcto!',
            text: 'El resultado en Json es: '+usuarioDatosJSON,
            icon: 'success',
            confirmButtonText: 'Ok'
          });
    }
}
