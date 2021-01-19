<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">
      <a :href="item.url"><component :is="getIcon(item.icon)" /></a>
    </li>
  </ul>
</template>

<script>
import SvgMail from '@/assets/svgs/Mail.svg?vue-template';
import SvgLinkedIn from '@/assets/svgs/LinkedIn.svg?vue-template';
import SvgXing from '@/assets/svgs/Xing.svg?vue-template';
export default {
  props: {
    items: {
      type: Array,
      default () {
        return [
          { icon: 'mail', url: 'mailto: ' },
          { icon: 'linkedIn', url: '#' },
          { icon: 'xing', url: '#' }
        ];
      }
    }
  },
  methods: {
    getIcon (name) {
      return {
        mail: SvgMail,
        linkedIn: SvgLinkedIn,
        xing: SvgXing

      }[String(name)];
    }
  }
};
</script>

<style lang="postcss" scoped>
ul {
  padding: 0;
  margin: 0;
  list-style: none;

  & li {
    margin-top: calc(20 / 414 * 100vw);

    @media (min-width: 568px) {
      margin-top: 20px;
    }
  }

  & a {
    color: currentColor;
  }

  & svg {
    display: block;
    width: calc(40 / 414 * 100vw);

    @media (min-width: 568px) {
      width: 40px;
    }

    @media (min-width: 768px) {
      width: 60px;
    }

    @media (min-width: 1200px) {
      width: 80px;
    }

    & path {
      fill: currentColor;
    }
  }
}
</style>
