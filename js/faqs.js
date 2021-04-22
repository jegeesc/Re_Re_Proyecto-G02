//JS DE LA SECCIÓN FAQS

var clic = 1;


//PREGUNTA 1
function preg1show(){
    console.log("Entrado")
    console.log(clic)
    if(clic==1){
        //preg1
        document.getElementById("respuesta1").style.opacity = "100%";
        document.getElementById("respuesta1").style.height = "30%";
        document.getElementById("cont-preg1").style.height = "30%";
        document.getElementById("preg1").style.transform = "rotate(180deg)";

        //preg2
        document.getElementById("cont-preg2").style.opacity = "100%";
        document.getElementById("cont-preg2").style.height = "10%";

        //preg3
        document.getElementById("cont-preg3").style.opacity = "0%";
        document.getElementById("cont-preg3").style.height = "0%";


        clic = clic + 1;

    } else{
        //preg1
        document.getElementById("respuesta1").style.opacity = "0%";
        document.getElementById("respuesta1").style.height = "0%";
        document.getElementById("preg1").style.transform = "rotate(0deg)";

        //preg2
        document.getElementById("cont-preg2").style.opacity = "100%";
        document.getElementById("cont-preg2").style.height = "100%";

        //preg3
        document.getElementById("cont-preg3").style.opacity = "100%";
        document.getElementById("cont-preg3").style.height = "100%";


        clic = 1;

    }

}

//PREGUNTA 2
function preg2show(){
    console.log("Entrado")
    console.log(clic)
    if(clic==1){
        //preg2
        document.getElementById("respuesta2").style.opacity = "100%";
        document.getElementById("respuesta2").style.height = "30%";
        document.getElementById("cont-preg2").style.height = "30%";
        document.getElementById("preg2").style.transform = "rotate(180deg)";

        //preg1
        document.getElementById("cont-preg1").style.opacity = "100%";
        document.getElementById("cont-preg1").style.height = "10%";

        //preg3
        document.getElementById("cont-preg3").style.opacity = "0%";
        document.getElementById("cont-preg3").style.height = "0%";


        clic = clic + 1;

    } else{
        //preg2
        document.getElementById("respuesta2").style.opacity = "0%";
        document.getElementById("respuesta2").style.height = "0%";
        document.getElementById("preg2").style.transform = "rotate(0deg)";

        //preg1
        document.getElementById("cont-preg1").style.opacity = "100%";
        document.getElementById("cont-preg1").style.height = "30%";

        //preg3
        document.getElementById("cont-preg3").style.opacity = "100%";
        document.getElementById("cont-preg3").style.height = "30%";


        clic = 1;

    }

}

//PREGUNTA 3
function preg3show(){
    console.log("Entrado")
    console.log(clic)
    if(clic==1){
        //preg3
        document.getElementById("respuesta3").style.opacity = "100%";
        document.getElementById("respuesta3").style.height = "30%";
        document.getElementById("cont-preg3").style.height = "30%";
        document.getElementById("preg3").style.transform = "rotate(180deg)";

        //preg2
        document.getElementById("cont-preg2").style.opacity = "100%";
        document.getElementById("cont-preg2").style.height = "10%";

        //preg1
        document.getElementById("cont-preg1").style.opacity = "0%";
        document.getElementById("cont-preg1").style.height = "0%";


        clic = clic + 1;

    } else{
        //preg3
        document.getElementById("respuesta3").style.opacity = "0%";
        document.getElementById("respuesta3").style.height = "0%";
        document.getElementById("preg3").style.transform = "rotate(0deg)";

        //preg2
        document.getElementById("cont-preg2").style.opacity = "100%";
        document.getElementById("cont-preg2").style.height = "30%";

        //preg1
        document.getElementById("cont-preg1").style.opacity = "100%";
        document.getElementById("cont-preg1").style.height = "30%";


        clic = 1;

    }

}