<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $titulo = $_POST['titulo'];
    $descricao = $_POST['descricao'];



    $imagem = $_FILES['imagem']['name'];
    move_uploaded_file($_FILES['imagem']['tmp_name'], 'imagens/' . $imagem);




    if (file_exists('../news.json')) {
        $dados = file_get_contents('../news.json');
        $dadosArray = json_decode($dados, true);

        if (isset($dadosArray['news'])) {
            $newsArray = $dadosArray['news'];
        } else {
            $newsArray = array();
        }
    } else {
        $newsArray = array();
    }

    $novoProjeto = array(
        'titulo' => $titulo,
        'descricao' => $descricao,
        'imagem' => 'imagens/' . $imagem,
        'data' => date('d/m/Y')
    );

    array_unshift($newsArray, $novoProjeto); // adiciona o novo item no início do array

    // reorganiza os índices do array
    $newsArray = array_values($newsArray);

    $dadosArray['news'] = $newsArray;
    file_put_contents('../news.json', json_encode($dadosArray));
    header('Location: ../index_news.html');
    exit;
}
