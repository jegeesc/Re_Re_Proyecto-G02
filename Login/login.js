//---------------------------------------------------------------
//login()
//---------------------------------------------------------------
function Login(){  
//guardo los valores en las variables
var usuario=document.login.user.value
var password=document.login.psw.value
// si se cumple se redirige a otra página
if (usuario=="usuario1" && password=="1234") { 
	window.location="cosa.html" 
	return
} 
if (usuario=="usuario2" && password=="1234") { 
	window.location="cosa.html"
	return
}
/*para poner más usuarios se añadiría a continuación:
if (usuario=="" && password=="") { 
	window.location="LANDIN_PAGE_USUARIOS.html"
	return
}*/
//Si no se cumple lo anterior sale un mensaje de error por pantalla
	alert("Error en Usuario o Contraseña. Intenta de nuevo.") 
}
//---------------------------------------------------------------
//main()
//---------------------------------------------------------------
document.oncontextmenu = function(){return false} 

