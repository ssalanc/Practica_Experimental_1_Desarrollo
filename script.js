let formulario = document.getElementById("registroForm")

formulario.onsubmit = function(e) {
  e.preventDefault()

  let nombre = document.getElementById("nombre").value
  let correo = document.getElementById("correo").value
  let contrasena = document.getElementById("contrasena").value

  if (nombre == "") {
    alert("El nombre no puede estar vacío.")
    return
  }

  if (correo == "") {
    alert("El correo no puede estar vacío.")
    return
  }

  if (correo.includes("@") == false || correo.includes(".") == false) {
    alert("El correo no tiene un formato correcto. Ejemplo: usuario@correo.com")
    return
  }

  if (contrasena == "") {
    alert("La contraseña no puede estar vacía.")
    return
  }

  if (contrasena.length < 8) {
    alert("La contraseña debe tener mínimo 8 caracteres.")
    return
  }

  alert("¡Registro exitoso! Bienvenido, " + nombre + ".")
  formulario.reset()
}
