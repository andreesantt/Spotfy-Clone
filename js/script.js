document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card'); // Seleciona todas as playlists
    const audioPlayer = document.getElementById('audio-player'); // Player de áudio
    const audioSource = document.getElementById('audio-source'); // Elemento <source> do player
    const songTitle = document.querySelector('.song-info h4'); // Título da música
    const songArtist = document.querySelector('.song-info p'); // Artista da música
    const playPauseButton = document.querySelector('.controls .fa-play').parentElement; // Botão de play/pause
    const prevButton = document.querySelector('.controls .fa-step-backward').parentElement; // Botão de retroceder
    const nextButton = document.querySelector('.controls .fa-step-forward').parentElement; // Botão de avançar

    // Lista de músicas
    const songs = [
        { src: 'assets/songs/Matuê - Isso é Sério ft. Brandão.mp3', title: 'Isso é Sério', artist: 'Matuê' },
        { src: 'assets/songs/song2.mp3', title: 'Mix Nobreak', artist: 'POP SEM PARAR' },
        { src: 'assets/songs/song3.mp3', title: 'Nova Música', artist: 'Novo Artista' }, // Nova música adicionada
    ];

    let currentSongIndex = 0; // Índice da música atual

    // Função para carregar e reproduzir a música
    function playMusic(songPath, title, artist) {
        audioSource.src = songPath; // Define o caminho da música
        audioPlayer.load(); // Carrega a música
        audioPlayer.play(); // Reproduz a música

        // Atualiza o título e o artista no player
        songTitle.textContent = title;
        songArtist.textContent = artist;

        // Altera o ícone para "pause"
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    }

    // Função para tocar a música atual
    function playCurrentSong() {
        const currentSong = songs[currentSongIndex];
        playMusic(currentSong.src, currentSong.title, currentSong.artist);
    }

    // Função para avançar para a próxima música
    function nextSong() {
        currentSongIndex = (currentSongIndex + 1) % songs.length; // Avança para a próxima música
        playCurrentSong();
    }

    // Função para retroceder para a música anterior
    function prevSong() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length; // Retrocede para a música anterior
        playCurrentSong();
    }

    // Adiciona um evento de clique a cada playlist
    cards.forEach((card, index) => {
        card.addEventListener('click', function () {
            currentSongIndex = index; // Define a música atual como a selecionada
            playCurrentSong(); // Reproduz a música
        });
    });

    // Controle do botão de play/pause
    playPauseButton.addEventListener('click', function () {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audioPlayer.pause();
            playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    // Controle do botão de avançar
    nextButton.addEventListener('click', nextSong);

    // Controle do botão de retroceder
    prevButton.addEventListener('click', prevSong);

    // Reproduz a primeira música ao carregar a página
    playCurrentSong();
});