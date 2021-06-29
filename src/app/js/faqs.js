//HACER QUE SUBA

function subir(){
    $('body, html').animate({
        scrollTop:0
    })
}


//JS DE LA SECCIÓN FAQS

var clic = 1;


//PREGUNTA 1
function preg1show() {

    if (clic == 1) {
        document.getElementById("cont-preg").style.height = "100%";
        //preg1
        document.getElementById("respuesta1").style.opacity = "100%";
        document.getElementById("respuesta1").style.height = "50%";

        document.getElementById("preg1").style.transform = "rotate(180deg)";

        document.getElementById("txres1").style.fontSize = "2.5em";


        //preg2
        document.getElementById("cont-preg2").style.opacity = "100%";
        document.getElementById("cont-preg2").style.height = "10%";
        document.getElementById("txres2").style.fontSize = "0%";

        //preg3
        document.getElementById("cont-preg3").style.height = "10%";
        document.getElementById("txres3").style.fontSize = "0%";


        clic = clic + 1;

    } else {
        document.getElementById("cont-preg").style.height = "";
        //preg1
        document.getElementById("respuesta1").style.opacity = "0%";
        document.getElementById("respuesta1").style.height = "0%";
        document.getElementById("preg1").style.transform = "rotate(0deg)";
        document.getElementById("txres1").style.fontSize = "0%";

        document.getElementById("respuesta1").style.transition = "0s";
        document.getElementById("txres1").style.fontSize = "0%";

        document.getElementById("cont-preg1").style.height = "20%";


        //preg2
        document.getElementById("cont-preg2").style.opacity = "100%";
        document.getElementById("cont-preg2").style.height = "20%";

        document.getElementById("respuesta2").style.opacity = "0%";
        document.getElementById("respuesta2").style.height = "0%";
        document.getElementById("preg2").style.transform = "rotate(0deg)";
        document.getElementById("txres2").style.fontSize = "0%";

        //preg3
        document.getElementById("cont-preg3").style.opacity = "100%";
        document.getElementById("cont-preg3").style.height = "20%";


        document.getElementById("respuesta3").style.opacity = "0%";
        document.getElementById("respuesta3").style.height = "0%";
        document.getElementById("preg3").style.transform = "rotate(0deg)";
        document.getElementById("txres3").style.fontSize = "0%";

        clic = 1;

    }

}

//PREGUNTA 2
function preg2show() {

    if (clic == 1) {
        document.getElementById("cont-preg").style.height = "100%";
        //preg2
        document.getElementById("respuesta2").style.opacity = "100%";
        document.getElementById("respuesta2").style.height = "30%";

        document.getElementById("preg2").style.transform = "rotate(180deg)";

        document.getElementById("txres2").style.fontSize = "2.5em";


        //preg1
        document.getElementById("cont-preg1").style.opacity = "100%";
        document.getElementById("cont-preg1").style.height = "10%";


        //preg3
        document.getElementById("cont-preg3").style.height = "10%";


        clic = clic + 1;

    } else {
        document.getElementById("cont-preg").style.height = "";
        //preg2
        document.getElementById("respuesta2").style.opacity = "0%";
        document.getElementById("respuesta2").style.height = "0%";
        document.getElementById("preg2").style.transform = "rotate(0deg)";

        document.getElementById("respuesta2").style.transition = "0s";
        document.getElementById("txres2").style.fontSize = "0%";

        document.getElementById("cont-preg2").style.height = "20%";

        //preg1
        document.getElementById("cont-preg1").style.opacity = "100%";
        document.getElementById("cont-preg1").style.height = "20%";

        document.getElementById("respuesta1").style.opacity = "0%";
        document.getElementById("respuesta1").style.height = "0%";
        document.getElementById("preg1").style.transform = "rotate(0deg)";
        document.getElementById("txres1").style.fontSize = "0%";

        //preg3
        document.getElementById("cont-preg3").style.opacity = "100%";
        document.getElementById("cont-preg3").style.height = "20%";

        document.getElementById("respuesta3").style.opacity = "0%";
        document.getElementById("respuesta3").style.height = "0%";
        document.getElementById("preg3").style.transform = "rotate(0deg)";
        document.getElementById("txres3").style.fontSize = "0%";

        clic = 1;

    }

}

//PREGUNTA 3
function preg3show() {

    if (clic == 1) {
        document.getElementById("cont-preg").style.height = "130%";
        //preg3
        document.getElementById("respuesta3").style.opacity = "100%";
        document.getElementById("respuesta3").style.height = "30%";

        document.getElementById("preg3").style.transform = "rotate(180deg)";

        document.getElementById("txres3").style.fontSize = "2.5em";

        //preg2
        document.getElementById("cont-preg2").style.opacity = "100%";
        document.getElementById("cont-preg2").style.height = "10%";


        clic = clic + 1;

    } else {
        document.getElementById("cont-preg").style.height = "";
        //preg3
        document.getElementById("respuesta3").style.opacity = "0%";
        document.getElementById("respuesta3").style.height = "0%";
        document.getElementById("preg3").style.transform = "rotate(0deg)";

        document.getElementById("respuesta3").style.transition = "0s";
        document.getElementById("txres3").style.fontSize = "0%";

        document.getElementById("cont-preg3").style.height = "20%";

        //preg2
        document.getElementById("cont-preg2").style.opacity = "100%";
        document.getElementById("cont-preg2").style.height = "20%";

        document.getElementById("respuesta2").style.opacity = "0%";
        document.getElementById("respuesta2").style.height = "0%";
        document.getElementById("txres2").style.fontSize = "0%";
        document.getElementById("preg2").style.transform = "rotate(0deg)";

        //preg1
        document.getElementById("cont-preg1").style.opacity = "100%";
        document.getElementById("cont-preg1").style.height = "20%";

        document.getElementById("respuesta1").style.opacity = "0%";
        document.getElementById("respuesta1").style.height = "0%";
        document.getElementById("preg1").style.transform = "rotate(0deg)";
        document.getElementById("txres1").style.fontSize = "0%";

        clic = 1;

    }

}