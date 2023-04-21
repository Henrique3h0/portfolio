<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $titulo = $_POST['titulo'];
    $descricao = $_POST['descricao'];
    $tecnologias = explode(',', $_POST['tecnologias']);
    $github = $_POST['github'];


    foreach ($_FILES['listaImagens']['tmp_name'] as $key => $tmp_name) {
        $imagem = $_FILES['listaImagens']['name'][$key];
        $destino = '../imagens/' . $imagem;
        move_uploaded_file($tmp_name, $destino);
        $imagens[] = 'imagens/' . $imagem;
    }



    if (file_exists('../projetos.json')) {
        $dados = file_get_contents('../projetos.json');
        $dadosArray = json_decode($dados, true);

        if (isset($dadosArray['projetos'])) {
            $projetosArray = $dadosArray['projetos'];
        } else {
            $projetosArray = array();
        }
    } else {
        $projetosArray = array();
    }


    $novoProjeto = array(
        'titulo' => $titulo,
        'descricao' => $descricao,
        'tecnologias' => $tecnologias,
        'imagem' => $imagens
    );
    array_push($projetosArray, $novoProjeto);
    $dadosArray['projetos'] = $projetosArray;
    file_put_contents('../projetos.json', json_encode($dadosArray));
    header('Location: ../index.html');
    exit;
}
