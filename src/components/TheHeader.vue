<template>
  <section class="hello">
    <img class="logoImg" src="@/Image/logo.png"/>
  </section>
</template>

<script>
export default {
  name: 'TheHeader',
  props: {
    msg: String
  },
}

</script>

<style scoped>
.logoImg{
  max-width: 200px;
  display: flex;
  margin: 0 auto 0;
}
</style>
