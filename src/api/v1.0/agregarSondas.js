document.querySelector('form').addEventListener('submit', function (event){
    event.preventDefault();
    let dataRegister = new FormData(event.target);

    fetch("../api/v1.0/agregarSondas.php", {
        method: "POST",
        body: dataRegister
    }).then(function (response){
        console.log(response)
    })

})