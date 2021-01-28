<template>
  <div class="youtube" :class="{'js--ready':ready}">
    <div>
      <iframe
        :src="src"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </div>
</template>

<script>
export default {
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
    }
  },
  data () {
    return {
      ready: false
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
  mounted () {
    this.ready = true;
  }
};
</script>

<style lang="postcss" scoped>

.youtube {
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.4s 1s ease-in;

  &.js--ready {
    opacity: 1;
  }

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
    left: calc((100% - 16 / 9 * 100vh) / 2);
    width: calc(16 / 9 * 100vh);
    height: calc(100vh + 200px);
    overflow: hidden;

    & iframe {
      width: 100%;
      height: 100%;

      @media (min-width: 1280px) {
        pointer-events: none;
      }
    }
  }
}

</style>
