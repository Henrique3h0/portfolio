
const projetosDiv = document.getElementById("projetos");


const projetosURL = "projetos.json";


fetch(projetosURL)
    .then(response => response.json())
    .then(data => {

        data.projetos.forEach(projeto => {

            const projetoDiv = document.createElement("div");
            projetoDiv.classList.add("projeto");


            const galeriaDiv = document.createElement("div");
            galeriaDiv.classList.add("galeria");

            if (typeof projeto.imagem === "string") {
                const imagem = document.createElement("img");
                imagem.src = projeto.imagem;
                galeriaDiv.appendChild(imagem);
            } else if (Array.isArray(projeto.imagem)) {
                const imagemPrincipal = document.createElement("img");
                imagemPrincipal.src = projeto.imagem[0];
                galeriaDiv.appendChild(imagemPrincipal);


                const miniaturasDiv = document.createElement("div");
                miniaturasDiv.classList.add("miniaturas");


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


            const titulo = document.createElement("h2");
            titulo.innerText = projeto.titulo;
            projetoDiv.appendChild(titulo);


            const descricao = document.createElement("p");
            descricao.innerText = projeto.descricao;
            projetoDiv.appendChild(descricao);


            const tecnologias = document.createElement("ul");
            projeto.tecnologias.forEach(tecnologia => {
                const li = document.createElement("li");
                li.innerText = tecnologia;
                tecnologias.appendChild(li);
            });
            projetoDiv.appendChild(tecnologias);


            const github = document.createElement("button");
            github.href = projeto.github;
            github.innerText = "Visualizar";
            github.onclick = function () {
                window.location.href = projeto.github;
            };
            projetoDiv.appendChild(github);


            projetosDiv.appendChild(projetoDiv);
        });
    })
    .catch(error => console.error(error));
