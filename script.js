//API Desktop
const apiKey = 'AIzaSyB0NmxORUwzcgcqh0s3s5UQcv77mKPQ1C4'; // Substitua com sua chave da API
const baseUrl = 'https://www.googleapis.com/youtube/v3/search';

async function searchVideos() {
    const query = document.getElementById('searchQuery').value;
    if (!query) {
        alert('Por favor, digite uma palavra-chave para buscar.');
        return;
    }

    try {
        const response = await fetch(`${baseUrl}?part=snippet&type=video&q=${encodeURIComponent(query)}&key=${apiKey}`);
        if (!response.ok) {
            throw new Error('Erro na requisição à API do YouTube.');
        }
        const data = await response.json();
        console.log('API Response:', data);  // Verifica a resposta da API
        displayVideos(data.items);
    } catch (error) {
        console.error('Erro na requisição:', error);
        alert('Ocorreu um erro ao buscar vídeos. Verifique o console para mais detalhes.');
    }
}


function displayVideos(videos) {
    const videosContainer = document.getElementById('videos');
    videosContainer.innerHTML = ''; // Limpa vídeos anteriores

    if (!videos || videos.length === 0) {
        videosContainer.innerHTML = '<p>Nenhum vídeo encontrado.</p>';
        return;
    }

    videos.forEach(video => {
        const videoId = video.id.videoId;
        const title = video.snippet.title;

        const videoElement = document.createElement('div');
        videoElement.className = 'video';
        videoElement.innerHTML = `
            <iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
            <p>${title}</p>
        `;
        videosContainer.appendChild(videoElement);
    });
}



// NAVBAR
const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

      toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
      });

      searchBtn.addEventListener("click", () =>{
        sidebar.classList.remove("close");
      });


      modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark");

        if(body.classList.contains("dark")){
          modeText.innerText = "Light Mode"
        }else{
          modeText.innerText = "Dark Mode"
        }
      });
      
      
//   
$(document).ready(function() { 

    // Seleciona o ícone
    const heartIconDesktop = document.getElementById('heartIconDesktop');

    // Adiciona um evento de clique ao ícone
    heartIconDesktop.addEventListener('click', function() {
        this.classList.toggle('fas'); // Alterna para ícone preenchido
        this.classList.toggle('far'); // Remove a classe de ícone vazio
        this.classList.toggle('filled'); // Muda a cor ao ser clicado
    });

    // Seleciona o ícone
    const heartIconMobile = document.getElementById('heartIconMobile');

    // Adiciona um evento de clique ao ícone
    heartIconMobile.addEventListener('click', function() {
        this.classList.toggle('fas'); // Alterna para ícone preenchido
        this.classList.toggle('far'); // Remove a classe de ícone vazio
        this.classList.toggle('filled'); // Muda a cor ao ser clicado
    });

    const stars = document.querySelectorAll('.star');
    let selectedIndex = -1;

    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            selectedIndex = index;
            updateStars();
        });   
    });

    
    function updateStars(hoverIndex = selectedIndex) {
        stars.forEach((star, index) => {
            if (index <= hoverIndex) {
                star.classList.remove('far');
                star.classList.add('fas');
                star.classList.add('selected');
            } else {
                star.classList.remove('fas');
                star.classList.add('far');
                star.classList.remove('selected');
            }
        });
    }

    //Comentario Desktop(formulario)
    $('#commentForm').on('submit', function(event) {
        event.preventDefault(); // Previne o comportamento padrão de envio do formulário
        
        // Aqui você pode adicionar a lógica para processar o formulário, como enviar uma requisição AJAX
        alert('Comentário enviado!');
    
        // Opcionalmente, feche o modal após o envio
        $('#exampleModal').modal('hide');
      });

      //Comentario Mobile(formulario)
    $('#commentForm2').on('submit', function(event) {
        event.preventDefault(); // Previne o comportamento padrão de envio do formulário
        
        // Aqui você pode adicionar a lógica para processar o formulário, como enviar uma requisição AJAX
        alert('Comentário enviado!');
    
        // Opcionalmente, feche o modal após o envio
        $('#exampleModal2').modal('hide');
      });

    //Placeholder e botao de pesquisa

   // Efeito de deslizamento ao carregar a página
    $("#searchContainer").hide().slideDown(1000); // Desliza para baixo em 1 segundo

    // Efeito ao clicar no botão de busca
    $("button").click(function() {
        $(this).effect("bounce", { times: 2 }, 300); // Efeito de bounce ao clicar
    });

    // Efeito ao focar no campo de entrada
    $("#searchQuery").focus(function() {
        $(this).stop().animate({
            borderWidth: "2px",
            borderColor: "#007bff"
        }, 300).css("box-shadow", "0 0 8px rgba(0, 123, 255, 0.5)"); // Animação de foco
    }).blur(function() {
        $(this).stop().animate({
            borderWidth: "1px",
            borderColor: "#ddd"
        }, 300).css("box-shadow", "none"); // Restaura o estilo ao perder o foco
    });
    
});

function showTabContent(tabName) {
    var i, tabcontent, tabbuttons;
    tabcontent = document.getElementsByClassName("tab-content");
    tabbuttons = document.getElementsByClassName("tab-button");

    // Esconde todos os conteúdos das abas
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove a classe 'active' de todos os botões
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].classList.remove("active");
    }

    // Mostra o conteúdo da aba selecionada e adiciona a classe 'active' ao botão
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}
