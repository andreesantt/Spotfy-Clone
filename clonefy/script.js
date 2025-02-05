document.addEventListener('DOMContentLoaded', function() {
    const songList = document.getElementById('song-list');
    const audioPlayer = document.getElementById('audio-player');
    const audioSource = document.getElementById('audio-source');

    songList.addEventListener('click', function(e) {
        if (e.target && e.target.nodeName === 'LI') {
            const songSrc = e.target.getAttribute('data-src');
            audioSource.src = songSrc;
            audioPlayer.load();
            audioPlayer.play();
        }
    });
});