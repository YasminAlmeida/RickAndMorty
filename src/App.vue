<template>
  <div class="background">
    <TheHeader/>
    <TheHome/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheHome from '@/view/TheHome.vue'
export default {
    name: 'App',
    components: {
      TheHeader,
      TheHome
    },
  }
</script>

<style>
*{
  list-style: none;  
  padding: 0;
  margin: 0;
}
.background{
  background: linear-gradient(to right,#d6eadf 30%, #ffff 30%);
}
</style>
