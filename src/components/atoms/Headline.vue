<template>
  <component
    :is="tag"
    v-font="[
      $getFont('Montserrat', 900),
      $getFont('Montserrat', 300, 'normal', {selector:'span'})]"
    v-html="content"
  />
</template>
<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'h1'
    },
    content: {
      type: String,
      default: 'Headline <br><span>Headline</span>'
    }
  }
};
</script>

<style lang="postcss" scoped>
* {
  margin: 0;
  color: currentColor;
}

h1 {
  font-size: calc(30 / 414 * 100vw);
  text-align: center;
  text-transform: uppercase;
  user-select: none;

  @media (min-width: 568px) {
    font-size: 30px;
  }

  @media (min-width: 768px) {
    font-size: 40px;
  }
}
</style>
