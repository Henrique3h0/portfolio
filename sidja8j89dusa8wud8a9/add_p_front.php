<link href="adm.css" rel="stylesheet" type="text/css">
<style>
    @keyframes slide-in {
        from {
            transform: translateX(-100%);
        }

        to {
            transform: translateX(0);
        }
    }

    body {
        background-color: #000;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        color: #fff;
        opacity: 0.9;
        transition: background-color 0.5s, color 0.5s;
        animation: slide-in 1s forwards;
    }

    .gradient-form {
        background: linear-gradient(to bottom, #000, #111);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        color: #fff;
        font-size: 20px;
        margin: 30px auto;
        opacity: 0.9;
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: background-color 0.5s, color 0.5s;
        animation: slide-in 1.7s forwards;
    }

    form input[type=text],
    form textarea {
        background-color: #111;
        color: #fff;
        transition: background-color 0.5s, color 0.5s;
        animation: slide-in 2.3s forwards;
    }

    button {
        background-color: #c5c5c5;
        border: none;
        border-radius: 4px;
        color: #000;
        cursor: pointer;
        font-weight: bold;
        padding: 8px 16px;
        transition: background-color 0.3s ease;
        transition: background-color 0.5s, color 0.5s;
        animation: slide-in 2.3s forwards;
    }

    button:hover {
        background-color: #a9a9a9;
        color: #fff;
    }

    label[for="imagem"],
    label[for="listaImagens"] {
        background-color: #c5c5c5;
        border: none;
        border-radius: 4px;
        color: #000;
        cursor: pointer;
        font-weight: bold;
        padding: 8px 16px;
        transition: background-color 0.3s ease;
        transition: background-color 0.5s, color 0.5s;
        animation: slide-in 2.4s forwards;
    }

    label[for="imagem"]:hover,
    label[for="listaImagens"]:hover {
        background-color: #FFD700;
        transform: scale(1.1);
        border: 2px solid #ccc;
        color: #fff;
    }

    input:hover {
        transform: scale(1.1);
        border: 2px solid #ccc;
    }

    input[type="file"]::-ms-browse {
        background-color: #c5c5c5;
        border: none;
        border-radius: 4px;
        color: #000;
        cursor: pointer;
        font-weight: bold;
        padding: 8px 16px;
    }

    input[type="file"]::-moz-focus-inner {
        border: none;
    }

    input[type="file"] {
        display: none;
    }
</style>
<form class="gradient-form" action="add_p.php" method="post" enctype="multipart/form-data">
    <label for="titulo">Título:</label>
    <input type="text" id="titulo" name="titulo" required>

    <label for="descricao">Descrição:</label>
    <textarea style="width: 331px; height: 112px;" id="descricao" name="descricao" required></textarea>

    <label for="tecnologias">Tecnologias:</label>
    <input type="text" id="tecnologias" name="tecnologias" required>

    <label for="listaImagens">Lista de Imagens:</label>
    <input type="file" onchange="previewImage(event)" id="listaImagens" name="listaImagens[]" multiple>

    <button type="submit">Adicionar Projeto</button>

</form>

<script>
    function previewImage(event) {
        var input = event.target;
        var preview = document.getElementById('preview');
        preview.innerHTML = "";

        if (input.files) {
            for (var i = 0; i < input.files.length; i++) {
                var reader = new FileReader();
                reader.onload = function(event) {
                    var img = document.createElement("img");
                    img.src = event.target.result;
                    preview.appendChild(img);
                }
                reader.readAsDataURL(input.files[i]);
            }
        }
    }
</script>

<br>
<div id="preview" src="#" style="max-width:50px;">
    <br>