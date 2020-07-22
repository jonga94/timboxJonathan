// Example starter JavaScript for disabling form submissions if there are invalid fields
 
    (function() {
        'use strict';
        window.addEventListener('load', function() {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName('formRegistro');
          var nombre = document.getElementById('validationCustom01');  
          var correo = document.getElementById('validationCustom02');
            var clave1 = document.getElementById('clave1').value;
            var clave2 = document.getElementById('clave2').value;
            var rfc =  document.getElementById('rfc');
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {

            form.addEventListener('submit', function(event) {
            if (clave1 != clave2){
                alert("Las dos claves son distintas..");
                document.getElementById('clave1').value = "";
                document.getElementById('clave2').value = "";
            }
            
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
                $(document).ready(
                    function post() {

    
                        // SUBMIT FORM
                        $("#formRegistro").submit(function(event) {
                            // Prevent the form from submitting via the browser.
                            event.preventDefault();
                            ajaxPost();
                        });
                
                        function ajaxPost() {
                
                            // PREPARE FORM DATA
                            var formData = {
                                nombre : $("#validationCustom01").val(),
                                correo : $("#validationCustom02").val(),
                                rfc : $("#rfc").val(),
                                contrasena : $("#clave1").val()
                            }
                
                            // DO POST
                            $.ajax({
                                type : "POST",
                                contentType : "application/json",
                                url : "http://localhost:9090/registro/",
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
                                    alert("Exito!");
                                    window.location="index.html";
                                    console.log(result); 
                                },
                                error : function(e) {
                                    alert("Error! RFC ya Existe!")
                                    console.log("ERROR: ", e);
                                }
                            });
                        }
                    })
              }
              form.classList.add('was-validated');
            }, false);

          });
        }, false);
      })()
    ;
