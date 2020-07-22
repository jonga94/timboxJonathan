
    obtener_localstorage();
    ajaxPost();

        let datosUs = [];

    function obtener_localstorage(){
    let rfc = localStorage.getItem("rfc");
    //console.log(rfc);
    }

    function guardar_localstorage(){
    let rfc = $("#rfc").val();
    localStorage.setItem("rfc", rfc);
    }

    function ajaxPost() {

        // PREPARE FORM DATA
        var formData = {
            rfc : localStorage.getItem("rfc")
        }

        // DO POST
        $.ajax({
            type : "POST",
            contentType : "application/json",
            url : "http://localhost:9090/configuracion/",
            data : JSON.stringify(formData),
            dataType : 'json',
            success : function(result) { 
                //alert("EXITO!!!!");
                //datosUs = JSON.parse(JSON.stringify(result));
                datosUs = result["VersionOs"];
                console.log(datosUs);
                document.getElementById("rfcConf").defaultValue = datosUs[0]["rfc"];
                document.getElementById("contrasenaConf").defaultValue = datosUs[0]["contrasena"];
                document.getElementById("correoConf").defaultValue = datosUs[0]["correo"];
                document.getElementById("telefonoConf").defaultValue = datosUs[0]["telefono"];
                document.getElementById("websiteConf").defaultValue = datosUs[0]["web"];
                document.getElementById("direccionConf").defaultValue = datosUs[0]["direccion"];
                document.getElementById("nombreConf").defaultValue = datosUs[0]["nombre"];
            },
            error : function(e) {
                alert("Error!")
                console.log("ERROR: ", e);
            }
        })
    }

    function modif() {

        // PREPARE FORM DATA
        var formData = {
            nombre: document.getElementById("nombreConf").defaultValue,
            direccion: document.getElementById("direccionConf").defaultValue,
            telefono: document.getElementById("telefonoConf").defaultValue,
            website: document.getElementById("websiteConf").defaultValue, 
            contrasena: document.getElementById("contrasenaConf").defaultValue, 
            rfc : localStorage.getItem("rfc")
        }

        // DO POST
        $.ajax({
            type : "POST",
            contentType : "application/json",
            url : "http://localhost:9090/modif/",
            data : JSON.stringify(formData),
            dataType : 'json',
            success : function(result) { 
                alert("EXITO!!!!");
            },
            error : function(e) {
                alert("Error!")
                console.log("ERROR: ", e);
            }
        })
    }


    
