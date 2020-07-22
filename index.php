<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <script	src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script	src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>
    <script src="post.js"></script>
    <script src="app.js"></script>
    <title>TimBox</title>
</head>
<body>

    <div>
        <h2>Inicia Sesion</h2>
    <form id="formulario" class="formulario" novalidate>
        <div class="form-row">
          <div class="col-md-6 mb-3">
            <label for="validationCustom02">RFC</label>
            <input type="email" class="form-control" id="rfc" required>
            <div class="invalid-feedback">
              Requerido
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <label for="validationCustom04">Contraseña</label>
            <input type="password" class="form-control" id="clave1" required>
            <div class="invalid-feedback">
              Requerido
            </div>
          </div>
       <button class="btn btn-primary" type="submit">Submit form</button>
      </form>
    </div>

      <div class="registro">
            <a href="registro.html">Registro</a>
      </div>

      
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</body>
</html>