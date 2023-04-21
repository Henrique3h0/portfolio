// Obtenha a div onde os projetos serão exibidos
const projetosDiv = document.getElementById("projetos");

// Defina a URL do arquivo JSON que contém os projetos
const projetosURL = "projetos.json";

// Faça uma requisição GET para obter o arquivo JSON
fetch(projetosURL)
    .then(response => response.json())
    .then(data => {
        // Loop através de cada projeto e crie um elemento HTML para exibir os detalhes
        data.projetos.forEach(projeto => {
            // Crie um elemento div para o projeto
            const projetoDiv = document.createElement("div");
            projetoDiv.classList.add("projeto");

            // Crie um elemento div para a galeria de imagens
            const galeriaDiv = document.createElement("div");
            galeriaDiv.classList.add("galeria");

            // Crie um elemento img para a imagem principal do projeto
            if (typeof projeto.imagem === "string") {
                const imagem = document.createElement("img");
                imagem.src = projeto.imagem;
                galeriaDiv.appendChild(imagem);
            } else if (Array.isArray(projeto.imagem)) {
                const imagemPrincipal = document.createElement("img");
                imagemPrincipal.src = projeto.imagem[0];
                galeriaDiv.appendChild(imagemPrincipal);

                // Crie um elemento div para as miniaturas da galeria
                const miniaturasDiv = document.createElement("div");
                miniaturasDiv.classList.add("miniaturas");

                // Loop através de cada imagem da galeria e crie uma miniatura
                projeto.imagem.forEach((imagemSrc, index) => {
                    const miniatura = document.createElement("img");
                    miniatura.src = imagemSrc;
                    miniatura.addEventListener("click", () => {
                        imagemPrincipal.src = imagemSrc;
                    });
                    miniaturasDiv.appendChild(miniatura);
                });

                galeriaDiv.appendChild(miniaturasDiv);
            }

            projetoDiv.appendChild(galeriaDiv);

            // Crie um elemento h2 para o título do projeto
            const titulo = document.createElement("h2");
            titulo.innerText = projeto.titulo;
            projetoDiv.appendChild(titulo);

            // Crie um elemento p para a descrição do projeto
            const descricao = document.createElement("p");
            descricao.innerText = projeto.descricao;
            projetoDiv.appendChild(descricao);

            // Crie um elemento ul para as tecnologias do projeto
            const tecnologias = document.createElement("ul");
            projeto.tecnologias.forEach(tecnologia => {
                const li = document.createElement("li");
                li.innerText = tecnologia;
                tecnologias.appendChild(li);
            });
            projetoDiv.appendChild(tecnologias);

            // Crie um elemento a para o link do GitHub do projeto
            const github = document.createElement("button");
            github.href = projeto.github;
            github.innerText = "Visualizar";
            github.onclick = function () {
                window.location.href = projeto.github;
            };
            projetoDiv.appendChild(github);

            // Adicione o projeto à div de projetos
            projetosDiv.appendChild(projetoDiv);
        });
    })
    .catch(error => console.error(error));
