<template>
  <div
    class="video"
    :class="{'js--ready':ready,'js--muted':muted}"
  >
    <video
      ref="videoMuted"
      :autoplay="autoplay"
      :playsinline="playsinline"
      :preload="preload"
      :loop="loop"
      :poster="played ? null: poster"
      :src="currentSourceMuted"
      muted="true"
      @canplay="onCanplay"
      @play="onPlay"
    />
    <video
      ref="video"
      :playsinline="playsinline"
      :preload="preload"
      :loop="loop"
      :src="currentSource"
    />
  </div>
</template>

<script>

export default {
  props: {
    preload: {
      type: String,
      default: 'metadata'
    },
    playsinline: {
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
    muted: {
      type: Boolean,
      default: true
    },
    mutedSources: {
      type: Array,
      default () {
        return [];
      }
    },
    sources: {
      type: Array,
      default () {
        return [];
      }
    },
    poster: {
      type: String,
      default: null
    }
  },
  data () {
    return { ready: false, currentSourceMuted: null, currentSource: null, played: false };
  },
  computed: {
    currentVideo () {
      return this.muted ? this.$refs.videoMuted : this.$refs.video;
    }
  },
  watch: {
    muted (value) {
      let currentTime;
      if (value) {
        this.$refs.video.pause();
        currentTime = this.$refs.video.currentTime;
        this.$refs.videoMuted.currentTime = currentTime;
        this.$refs.videoMuted.play();
      } else {
        this.$refs.videoMuted.pause();
        currentTime = this.$refs.videoMuted.currentTime;
        this.$refs.video.currentTime = currentTime;
        this.$refs.video.play();
      }
    }
  },
  created () {
    this.currentSource = this.sources[0].src;
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
    onLoadPoster () {},
    onCanplay () {
      this.ready = true;
    },
    changeSource () {
      this.currentSource = this.sources.find(source => global.matchMedia(source.media || 'all').matches).src;
      this.currentSourceMuted = this.mutedSources.find(source => global.matchMedia(source.media || 'all').matches).src;
    },
    onPlay () {
      this.played = true;
    },
    onResize () {
      global.clearTimeout(this.timeout);
      // eslint-disable-next-line scanjs-rules/call_setTimeout
      this.timeout = global.setTimeout(() => {
        const currentTime = this.currentVideo.currentTime;
        this.currentVideo.onplay = () => {
          this.currentVideo.currentTime = currentTime;
        };
        this.changeSource();
      }, 400);
    }
  }
};
</script>

<style lang="postcss" scoped>

.video {
  position: relative;

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

  filter: blur(10px);
  transition: filter 0.35s ease-in;
}

.js--ready {
  filter: none;
}

video {
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.js--muted {
  & video + video {
    opacity: 0;
  }
}
</style>
