<template>
  <div class="page">
    <div class="video">
      <atom-youtube :mute="videoMuted" v-bind="video" />
    </div>
    <div class="mobile">
      <speedkit-picture v-bind="picture" class="" />
    </div>
    <div class="content">
      <molecule-contacts class="contacts" v-bind="contacts" />
      <atom-sound-button :muted="videoMuted" @muted="videoMuted = $event" />
      <atom-headline critical class="headline" v-bind="headline" />
      <a class="play-button" :href="videoUrl">
        <svg-showreel-button />
      </a>
    </div>
  </div>
</template>

<script>

import SvgShowreelButton from '@/assets/svgs/Showreel_Button.svg?vue-template';
import MoleculeContacts from '@/components/molecules/Contacts';
import AtomYoutube from '@/components/atoms/Youtube';
import AtomSoundButton from '@/components/atoms/SoundButton';
import AtomHeadline from '@/components/atoms/Headline';
import SpeedkitPicture from 'nuxt-speedkit-components/SpeedkitPicture';

export default {
  components: {
    SvgShowreelButton,
    MoleculeContacts,
    AtomYoutube,
    AtomSoundButton,
    AtomHeadline,
    SpeedkitPicture
  },

  asyncData () {
    return {
      headline: {
        content: 'Erwin Lorenz<br><span>Art Director</span>'
      },
      contacts: {
        items: [
          { icon: 'mail', url: 'mailto: erwin.lorenz@gmail.com', title: 'Mail' },
          { icon: 'linkedIn', url: 'https://www.linkedin.com/in/erwin-lorenz-3a2323a2/', target: '_blank', title: 'LinkedIn', rel: 'noreferrer' },
          { icon: 'xing', url: 'https://www.xing.com/profile/Erwin_Lorenz/', target: '_blank', title: 'Xing', rel: 'noreferrer' }
        ]
      },
      // eslint-disable-next-line no-secrets/no-secrets
      videoUrl: 'https://www.youtube.com/watch?v=R6Emy08zWTU',
      video: {
        id: 'R6Emy08zWTU',
        autoplay: true
      },
      picture: {
        sources: [
          {
            media: '',
            placeholder: {
              // eslint-disable-next-line no-secrets/no-secrets
              url: 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMfaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIxNUFDQUE1NTlCQTExRUJBQjU2RUREMDI2REQyRDMxIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIxNUFDQUE0NTlCQTExRUJBQjU2RUREMDI2REQyRDMxIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSIxQjk4QTUyMDEwQzU3Q0MzQjVGMEZDMzExMzlBMTE3NyIgc3RSZWY6ZG9jdW1lbnRJRD0iMUI5OEE1MjAxMEM1N0NDM0I1RjBGQzMxMTM5QTExNzciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCAA1AB4DAREAAhEBAxEB/8QAhQAAAwEAAwEAAAAAAAAAAAAAAwYHBAACBQgBAAIDAQAAAAAAAAAAAAAAAAQFAAECAxAAAgECBAQCBgsAAAAAAAAAAQIDEQQAIRIFMSITBkGBUWFCFBUWcZGhMmKCwiNDJQcRAAIBBAIBBAMAAAAAAAAAAAABAhExEgMhIkFRYRMEkRQF/9oADAMBAAIRAxEAPwD5/hhBOOgNQJJDiyI6qpDAYho0BRoOIUAjk08OOIZqabeIyyItDzHEoVUZrXsDcrmL3+YNb7aNI62kksSaUUfqOWOO3bjY7xjxWVhsHYPbCWbWfVLTSgD3qoJWnNWvAcMDfJKtw3CGNuCOy7q8sjzRwkRajn54Y5Cp6yh9l7I11ebbd3tq0dnAkkl5E/KzvGxZFFeIcMo8j6scp70rEhrVeRm7w/0pF2mSzudskt5SVVFiddIGTLxX8IwsnNzePkKU8lSggL3/ACGxZWiY3INEYMNIFRWuWr7ca+H3N98cPApi8ktYJLKWHTKtQ1aeOGakCuFeSt7B3HDt/aO1vewMLlkZ4yystULUqhZaAfQcLNyo6Dn6GtY25MHzPa7tuiWNlqlurgkCNiirVamgYMeKj1Y5rS2+A1/ZUVyc+Q+4jJ1GkgVgeS36oMjDLPhoGWf3sa/VdDL/AKMa24Jzt+47nb3st41rHO8hUiRhzJo4BCQwWvjlXLjhjKDa4dBFqnGHipU7a22je9st723inijWNY7tro9UtIhXUOnEUd9WZ1aqVpl6F0tUsuz/AAMde+q6i/fSQWs6ttO3Qw3Ul2sEdFMjlAqslRK8tCzOV5NI5fGuN4Ju7oXk/Idtm7sKJLJbIt6qNcw2upmlYkBj+37OVeXVqr7PhjOCsaW8YrHsrZ7GEKyG6kHEy0ofyigwVLaxctUanuwyrFGsYgQvGD0lKEChpWjqpA8DngbYm7BOtpGPcb0C3au3NHRmMcmjrNGzEksiozkamI1U4+PDHJKaOvV+RMM0/vokMN31vZm6UvUrpI46a+OL7+hvoOD/ABX0fVTBLAgL/GNY06/LRTFFg5fjdP5fKmKLQD+51DOauLIf/9k='
            },
            sizes: [
              { width: 414, media: '', url: '/img/414.jpg', format: 'jpg' },
              { width: 768, media: '(min-width: 768px)', url: '/img/768.jpg', format: 'jpg' },
              { width: 1024, media: '(min-width: 1024px)', url: '/img/1024.jpg', format: 'jpg' },
              { width: 414, media: '', url: '/img/webp/414.jpg', format: 'jpg' },
              { width: 768, media: '(min-width: 768px)', url: '/img/webp/768.webp', format: 'webp' },
              { width: 1024, media: '(min-width: 1024px)', url: '/img/webp/1024.webp', format: 'webp' }
            ]
          }
        ]
      }
    };
  },
  data () {
    return {
      videoMuted: true
    };
  }
};
</script>

<style lang="postcss" scoped>

.page {
  position: relative;
  box-sizing: border-box;
  display: flex;
  padding: calc(30 / 414 * 100vw);
  color: #fff;
  background: #000;

  @media (min-width: 568px) {
    padding: 30px;
  }

  @media (min-width: 768px) {
    padding: 30px;
  }

  @media (min-width: 1200px) {
    padding: 50px;
  }

  @media (min-width: 1680px) {
    padding: 60px;
  }
}

.content {
  position: relative;
  flex: 1;
}

.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.mobile {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(230 / 414 * 100vw);
  pointer-events: auto;
  background: transparent;
  border: none;
  border-radius: 0;
  outline: none;
  transform: translate(-50%, -50%);
  appearance: none;

  @media (min-width: 568px) {
    width: 230px;
  }

  @media (min-width: 768px) {
    width: 290px;
  }

  @media (min-width: 1280px) {
    display: none;
  }
}

@media (min-width: 1280px) {
  .mobile {
    display: none;
  }
}

.contacts {
  position: absolute;
  right: 0;
  bottom: 0;
}

.headline {
  position: relative;
}

</style>
