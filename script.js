// ======================================
// LOGIN
// ======================================

function iniciarSesion(event){

    event.preventDefault();

    let correo = document.getElementById("correo").value;
    let password = document.getElementById("password").value;

    if(correo === "" || password === ""){

        alert("Complete todos los campos");

        return;

    }

    alert("Inicio de sesión exitoso");

    window.location.href = "dashboard.html";

}



// ======================================
// REGISTRAR BENEFICIARIO
// ======================================

function registrarBeneficiario(){

    let nombres = document.getElementById("nombres").value;
    let apellidos = document.getElementById("apellidos").value;
    let dni = document.getElementById("dni").value;

    if(nombres === "" || apellidos === "" || dni === ""){

        alert("Debe completar los campos obligatorios");

        return;

    }

    alert("Beneficiario registrado correctamente");

}



// ======================================
// REGISTRAR PRODUCTO
// ======================================

function registrarProducto(){

    let producto = document.getElementById("producto").value;
    let stock = document.getElementById("stock").value;

    if(producto === "" || stock === ""){

        alert("Complete los datos del producto");

        return;

    }

    alert("Producto registrado correctamente");

}



// ======================================
// ELIMINAR REGISTRO
// ======================================

function eliminarRegistro(){

    let confirmar = confirm("¿Está seguro de eliminar este registro?");

    if(confirmar){

        alert("Registro eliminado correctamente");

    }

}