<template>
  <video
    ref="video"
    :preload="preload"
    :loop="loop"
    :class="{'js--ready':ready}"
    :poster="poster"
    :src="currentSource"
    :muted="muted"
    @canplay="onCanplay"
  />
</template>

<script>
export default {
  props: {
    preload: {
      type: String,
      default: 'metadata'
    },
    loop: {
      type: Boolean,
      default: false
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    muted: {
      type: Boolean,
      default: false
    },
    sources: {
      type: Array,
      default () {
        return [
          {
            // eslint-disable-next-line no-secrets/no-secrets
            src: require('@/assets/videos/210116_Showreel_webseite_EL.mp4')
          }
        ];
      }
    },
    poster: {
      type: String,
      default: require('@/assets/videos/210116_Showreel_webseite_EL_Standbild.jpg')
    }
  },
  data () {
    return { ready: false, currentSource: null };
  },
  mounted () {
    // eslint-disable-next-line scanjs-rules/call_addEventListener
    global.addEventListener('resize', this.onResize);
    this.changeSource();
  },
  destroyed () {
    // eslint-disable-next-line scanjs-rules/call_addEventListener
    global.removeEventListener('resize', this.onResize);
  },
  methods: {
    onCanplay () {
      if (this.autoplay) {
        // eslint-disable-next-line scanjs-rules/call_setTimeout
        global.setTimeout(() => {
          this.$refs.video.play();
          global.requestAnimationFrame(() => {
            this.ready = true;
          });
        }, 300);
      } else {
        this.ready = true;
      }
    },
    changeSource () {
      this.currentSource = this.sources.find(source => global.matchMedia(source.media || 'all').matches).src;
    },
    onResize () {
      global.clearTimeout(this.timeout);
      // eslint-disable-next-line scanjs-rules/call_setTimeout
      this.timeout = global.setTimeout(() => {
        const currentTime = this.$refs.video.currentTime;
        this.$refs.video.onplay = () => {
          this.$refs.video.currentTime = currentTime;
        };
        this.changeSource();
      }, 400);
    }
  }
};
</script>

<style lang="postcss" scoped>

video {
  object-fit: cover;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.4s ease-in;

  &.js--ready {
    opacity: 1;
  }
}

</style>
