<template>
  <div class="youtube" :class="{'js--playing':playing,'js--ready':ready}">
    <div>
      <div ref="player">
      <!-- <iframe
        :src="src"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      /> -->
      </div>
    </div>
    <speedkit-picture v-if="!playing" v-bind="picture" class="youtube__poster" @load="onLoadPoster" />
    <span />
  </div>
</template>

<script>
import YoutubePlayer from 'youtube-player';
import Deferred from 'nuxt-speedkit/classes/Deferred';

import SpeedkitPicture from 'nuxt-speedkit-components/SpeedkitPicture';
export default {
  components: { SpeedkitPicture },
  props: {
    id: {
      type: String,
      default: 'vHT-ZXZvbVM'
    },
    controls: {
      type: Boolean,
      default: false
    },
    loop: {
      type: Boolean,
      default: true
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    mute: {
      type: Boolean,
      default: true
    },
    picture: {
      type: Object,
      default () {
        return {
          sources: [
            {
              media: '',
              placeholder: {
              // eslint-disable-next-line no-secrets/no-secrets
                url: 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMcaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQ0NjAsIDIwMjAvMDUvMTItMTY6MDQ6MTcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVEQzQ1RTdFNUIyNTExRUI5QjA1QjZDMENDMDk2NUY4IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVEQzQ1RTdENUIyNTExRUI5QjA1QjZDMENDMDk2NUY4IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMDIwIE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI4MTAwMjA1RkQ4MTdFN0MyNkJGMTU5OEI3NkI0MzFFRiIgc3RSZWY6ZG9jdW1lbnRJRD0iODEwMDIwNUZEODE3RTdDMjZCRjE1OThCNzZCNDMxRUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgICAgICAgICAgIDAwMDAwMDAwMDAQEBAQEBAQIBAQICAgECAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwP/wAARCAARAB4DAREAAhEBAxEB/8QAhQAAAgMBAAAAAAAAAAAAAAAABwkFBgoIAQADAAMBAAAAAAAAAAAAAAADBAUAAQYCEAABBAIBAgQEBwAAAAAAAAAEAgMFBgEHCAAJsRIVFxExcXIiQhMzFCREEQACAQMDAwMEAQUAAAAAAAABAhESAwQAIQUxQRNRcTLwYRQGIoHBQqIj/9oADAMBAAIRAxEAPwDMbsoPIN9pdapzu5tmSli2UTGEauh9n7MctUyzIy0dioUSNLCOmTM3Lb6CCpVqTbAMew2ahSm8upXjqRiNk3UuMfEi0Ck0LBO8t2+BhYkbjY9NLHLyaJZmY9/5H1kk7xpl/IbgfqWUjOO/soHy44sbPPiLSJypoe9tv2K9a+15sMAuNbZqmvdpxhtfYsxMGO0Y88MtOHFjqxl59h0dxColv9sXjrjgtbzbqOUhFANaliwIMqQFoBio+QlR9uy4n9UzOaxhfOSmPUguBHBa41qY8lMilT/jVFX2G+uZNccVbRv4S6R3G+/7Tv8Ad9Oa92JcruYrc2xD6zfLNrCuTFsntd65jhHxJWRMLrceh0Ytl93H83ORkodwla+qGf8Ast3E5exhcgi2kzGXxKLYqRGiGuSYUk1ArH8YknppC5xDpxeRyGNcF61h3fHdcMaWYkiU70qKSSTBmB0nRDo1rvbuq93T2veTu2w9Oh6upVG5BVv3BsUhM2HR5j0Ds7W0Cpp4z1iH2DTdzDD05JrS/XENzyo7LuWj1tJNlYdz87Gt5GMDn+Z1tGgSr0tJ+6vYraDtKVRKjXPpydxbLLX/AM2UHc7bGNvY/wCpI0zvgP2k+6twusO7LXH8duEXIG0bhjYANFw3HyEHalaO9AuyRgUhWvTq+bIMS/rBY5aSUvIWhwFpPx8mPLkmV+HyHjVjcW1bDSi7A1QJJHoJj0mdFPH3qKEdV6QYJ6doPr39dMvr+kO+81QwKBjjj2wkQotPGpkqKm/BnBzIi2Von5lcNKJZiBJu3OOOOyOUN5Q6t1WPNlOMJ6xeL43xHGsB7digqoUKKAe6GJDd6pmd+utriX0ylzb95rmSLgclixrIIIVt902in4xtEaXHAdjnvA0Zl2O0bC8c9AwJtpXczoTW3ISHFDKsLqXWcmESpTRtsaCYHy0lgEU1gVn9FP4V4zlPRBwfE5L/AJHLtdzMgJQrXlUm2g6KlIVRvMtBYzE6eu5+faLrgC3jW7k1LaqVXq61Akz6AdNFJfZ77tJWim9Yq0HwuhNqxmyfcdjknWNuavidi29JQD0QfUNkjBUMOCtsY2Y4LYAjDRC3gZmGDcaaS/8A22iW/wBe41Mq43nvNxjoB4SbhCsCCGVi0qOqlQwlWYHYkamNk5bUki2MlZFULuDtBWImNp9j1GtXkN8hfuT4dJY3Q6sjv9d9E0H8/wBU9ULXy/przq6sftJ+mPHPTh6/XpqTnfEe+pj/ACZ+3Hj0wnxf2H9tJdtf/9k='
              },
              sizes: [
                { width: 1024, media: '(min-width: 1024px)', url: '/img/youtube/webp/1024.webp', format: 'webp' },
                { width: 1024, media: '(min-width: 1024px)', url: '/img/youtube/webp/1280.webp', format: 'webp' },
                { width: 1480, media: '(min-width: 1480px)', url: '/img/youtube/webp/1920.webp', format: 'webp' },

                { width: 1024, media: '(min-width: 1024px)', url: '/img/youtube/1024.jpg', format: 'jpg' },
                { width: 1024, media: '(min-width: 1024px)', url: '/img/youtube/1280.jpg', format: 'jpg' },
                { width: 1480, media: '(min-width: 1480px)', url: '/img/youtube/1920.jpg', format: 'jpg' }
              ]
            }
          ]
        };
      }
    }

  },
  data () {
    return {
      player: null,
      loading: false,
      playing: false,
      ready: false,
      playerReady: new Deferred(),
      deferred: new Deferred()
    };
  },
  computed: {
    src () {
      const options = {
        controls: 0,
        modestbranding: 0,
        showinfo: 0,
        autoplay: this.autoplay ? 1 : 0,
        loop: this.loop ? 1 : 0,
        mute: this.mute ? 1 : 0,
        playsinline: 1,
        rel: 0,
        disablekb: 0,
        playlist: this.id,
        vq: 'hd720'

      };

      return `https://www.youtube-nocookie.com/embed/${this.id}?` + Object.keys(options).map(key => `${key}=${options[String(key)]}`).join('&');
    }
  },
  async mounted () {
    // if (window.matchMedia('(min-width: 1280px)')) {
    //   this.loading = true;
    //   await this.loadPlayer();
    // }
    // this.ready = true;
  },
  methods: {
    async onLoadPoster () {
      await this.playerReady.promise;
      this.player.playVideo();
    },
    loadPlayer () {
      this.player = YoutubePlayer(this.$refs.player, {
        host: 'https://www.youtube-nocookie.com',
        videoId: this.id,
        playerVars: {
          controls: 0,
          modestbranding: 0,
          showinfo: 0,
          // autoplay: this.autoplay ? 1 : 0,
          loop: this.loop ? 1 : 0,
          mute: this.mute ? 1 : 0,
          playsinline: 1,
          rel: 0,
          disablekb: 0,
          playlist: this.id,
          vq: 'hd720'

        }
      });
      this.player.on('ready', () => { this.playerReady.resolve(); });
      this.player.on('stateChange', (e) => {
        if (e.data === 1) {
          global.requestAnimationFrame(() => {
            this.loading = false;
            this.playing = true;
          });
        }
      });
    }
  }
};
</script>

<style lang="postcss" scoped>

.youtube {
  width: 100%;
  height: 100%;
  overflow: hidden;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    pointer-events: none;
    content: '';
    background: black;
    opacity: 0.2;
  }

  & > div {
    position: absolute;
    top: -100px;
    left: 50%;

    /*
    left: calc((100% - 16 / 9 * 100vh) / 2);
   */
    width: calc(16 / 9 * 100vh);
    min-width: 100%;
    height: calc(100vh + 200px);
    overflow: hidden;
    transform: translateX(-50%);

    & >>> iframe {
      width: 100%;
      height: 100%;

      @media (min-width: 1280px) {
        pointer-events: none;
      }
    }
  }

  & .youtube__poster {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;

    /* & >>> img {
      filter: none;
    } */

    /* filter: blur(10px);
    transition: filter 0.2s linear;
    will-change: filter; */
  }

  /* &.js--playing {
    & .youtube__poster {
      filter: blur(0);
    }
  } */

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>
