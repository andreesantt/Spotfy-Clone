// Adicione interações JavaScript aqui, se necessário
document.addEventListener('DOMContentLoaded', function () {
    const playButton = document.querySelector('.controls .fa-play');
    const audio = new Audio('assets/songs/song1.mp3'); // Adicione o caminho da música

    playButton.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            playButton.classList.remove('fa-play');
            playButton.classList.add('fa-pause');
        } else {
            audio.pause();
            playButton.classList.remove('fa-pause');
            playButton.classList.add('fa-play');
        }
    });
});