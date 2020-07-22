    $(document).ready(

    function() {

        // SUBMIT FORM
        $("#formulario").submit(function(event) {
            // Prevent the form from submitting via the browser.
            event.preventDefault();
            ajaxPost();
            guardar_localstorage();
        });


        function ajaxPost() {

            // PREPARE FORM DATA
            var formData = {
                rfc : $("#rfc").val(),
                contrasena : $("#clave1").val()
            }

            // DO POST
            $.ajax({
                type : "POST",
                contentType : "application/json",
                url : "http://localhost:9090/login/",
                data : JSON.stringify(formData),
                dataType : 'json',
                success : function(result) {
                    if (result.status == "success") {
                        $("#postResultDiv").html(
                                "" + result.data.nombre
                                        + "Post Successfully! <br>"
                                        + "---> Congrats !!" + "</p>");
                    } else {
                        $("#postResultDiv").html("<strong>Error</strong>");
                    }
                    window.location="home.html";
                    console.log(result);
                },
                error : function(e) {
                    alert("Error!")
                    console.log("ERROR: ", e);
                }
            });

        }

    },
    

        function guardar_localstorage(){
        let rfc = $("#rfc").val();
        localStorage.setItem("rfc", rfc);
        }   
    
    

    )
