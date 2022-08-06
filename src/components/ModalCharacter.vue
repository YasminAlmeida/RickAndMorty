<template>
  <section class="modal">
    <ul>
       
        <li v-for="characters in api.results" :key="characters.id" @click="changeModal" class="containerInfo"> 
          <img class="characters" :src="characters.image" alt="">
          <p class="name">{{characters.name}}</p>
          <p>{{characters.status}}</p>
          <p>{{characters.species}}</p>
          <p>{{characters.gender}}</p>
        </li>         
      </ul>
    <!-- <div v-for="characters in api.results" :key="characters.id" class="characters">
      <img class="characters" :src="characters.image" alt="">
      <div class="produtoInfo">
        <button @click="charactersModal = false" class="modalFechar">X</button>
        <h2 class="modalName">{{characters.name}}</h2>
      </div> 
    </div> -->
  </section>
</template>
<script>
// import { getCharacters } from '@/components/ListCharacters.vue'
export default {
  name: 'ModalCharacter',
  data(){
    return{
      // api: [],
      // charactersModal: false
    }
  },
  methods:{
    Modal() {
      console.log('abriu')
    },
    // fecharModal({ target, currentTarget }) {
    //   if (target === currentTarget) this.produto = false;
    // },
  }
}
</script>

<style>

</style>