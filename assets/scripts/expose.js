// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose > img');
  const audio = document.querySelector('audio');
  const playButton = document.querySelector('button');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');

  const jsConfetti = new JSConfetti();

  const hornMap = {
    'air-horn':   { src: 'assets/images/air-horn.svg',   alt: 'Air Horn',   audio: 'assets/audio/air-horn.mp3' },
    'car-horn':   { src: 'assets/images/car-horn.svg',   alt: 'Car Horn',   audio: 'assets/audio/car-horn.mp3' },
    'party-horn': { src: 'assets/images/party-horn.svg', alt: 'Party Horn', audio: 'assets/audio/party-horn.mp3' },
  };

  function getVolumeIcon(volume) {
    if (volume === 0)        return { src: 'assets/icons/volume-level-0.svg', alt: 'Muted' };
    else if (volume < 33)   return { src: 'assets/icons/volume-level-1.svg', alt: 'Volume level 1' };
    else if (volume < 67)   return { src: 'assets/icons/volume-level-2.svg', alt: 'Volume level 2' };
    else                    return { src: 'assets/icons/volume-level-3.svg', alt: 'Volume level 3' };
  }

  hornSelect.addEventListener('change', () => {
    const selected = hornMap[hornSelect.value];
    if (selected) {
      hornImage.src = selected.src;
      hornImage.alt = selected.alt;
      audio.src = selected.audio;
    }
  });

  volumeSlider.addEventListener('input', () => {
    const value = Number(volumeSlider.value);
    audio.volume = value / 100;

    const icon = getVolumeIcon(value);
    volumeIcon.src = icon.src;
    volumeIcon.alt = icon.alt;
  });

  playButton.addEventListener('click', () => {
    if (!audio.src) return;
    audio.currentTime = 0;
    audio.play();

    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}