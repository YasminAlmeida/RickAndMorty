<template>
  <section>
    <h1>home</h1>
    <ListCharacter/>
  </section>
</template>

<script>
import ListCharacter from '@/components/ListCharacters.vue'

export default {
  name: 'TheHome',
  components: {
    ListCharacter
  },
}
</script>

<style>
section{
  color: #80b918;
}
</style>