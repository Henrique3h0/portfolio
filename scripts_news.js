fetch('news.json')
    .then(response => response.json())
    .then(data => {
        const projetos = data.news;
        const projetosContainer = document.getElementById('projetos');

        function exibirProjetos(projetos) {
            projetosContainer.innerHTML = '';
            projetos.forEach(projeto => {
                const projetoElement = document.createElement('div');
                projetoElement.classList.add('projeto');

                const tituloElement = document.createElement('h2');
                tituloElement.textContent = projeto.titulo;

                const descricaoElement = document.createElement('p');
                descricaoElement.innerHTML = projeto.descricao.replace(/(https?:\/\/[^\s]+)|(\r\n|\r|\n)/g, function (match, p1) {
                    if (p1) {
                        return '<a href="' + p1 + '" target="_blank">' + p1 + '</a>';
                    } else {
                        return '<br>';
                    }
                });

                const dataElement = document.createElement('p');
                dataElement.classList.add('data');
                dataElement.textContent = "Data: " + projeto.data;

                const imagemElement = document.createElement('img');
                imagemElement.src = projeto.imagem;
                imagemElement.onerror = function () {
                    imagemElement.remove();
                };
                imagemElement.onload = function () {
                    projetoElement.appendChild(imagemElement);
                };
                imagemElement.alt = projeto.titulo;

                projetoElement.appendChild(tituloElement);
                projetoElement.appendChild(descricaoElement);
                projetoElement.appendChild(dataElement);

                projetosContainer.appendChild(projetoElement);
            });
        }

        function pesquisarProjetos() {
            const termo = pesquisaInput.value.toLowerCase();
            const projetosFiltrados = projetos.filter(projeto => {
                return (
                    projeto.titulo.toLowerCase().includes(termo) ||
                    projeto.descricao.toLowerCase().includes(termo) ||
                    projeto.linguagens.join(', ').toLowerCase().includes(termo)
                );
            });
            exibirProjetos(projetosFiltrados);
        }

        exibirProjetos(projetos);
    });
