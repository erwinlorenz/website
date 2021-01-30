<template>
  <h1>
    <span
      v-font="[
        $getFont('Montserrat', 900, 'normal', {selector:'strong'}),
        $getFont('Montserrat', 300)]"
    >
      <slot><strong>Headline</strong><br> Content</slot>
    </span>
  </h1>
</template>

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
