<template>
  <button aria-label="Mute Button" :class="{'js--muted': value}" @click="onClick">
    <svg-sound />
  </button>
</template>

<script>
import SvgSound from '@/assets/svgs/Sound.svg?vue-template';
export default {
  components: {
    SvgSound
  },
  props: {
    muted: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      value: this.muted
    };
  },
  watch: {
    value () {
      this.$emit('muted', this.value);
    }
  },
  methods: {
    onClick () {
      this.value = !this.value;
    }
  }

};
</script>

<style lang="postcss" scoped>
button {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  appearance: none;

  & svg {
    display: block;
    width: calc(40 / 414 * 100vw);

    @media (min-width: 568px) {
      width: 40px;
    }

    @media (min-width: 1680px) {
      width: 60px;
    }

    & path {
      fill: #fff;
    }

    & #on,
    & #off {
      opacity: 0;
    }

    & #on {
      opacity: 1;
    }
  }

  &.js--muted {
    & svg #on {
      opacity: 0;
    }

    & svg #off {
      opacity: 1;
    }
  }
}
</style>
