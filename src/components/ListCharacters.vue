<template>
  <section>
    <div class="containerCharacters">
        <div v-for="characters in api.results" :key="characters.id" @click="changeModal" class="containerInfo">    
          <figure>
            <img class="characters" :src="characters.image" alt="">
          </figure>  
          <div class="extraInfo">
            <p class="name">{{characters.name}}</p>
            <p>{{characters.status}}</p>
            <p>{{characters.species}}</p>
            <p>{{characters.gender}}</p>
          </div>  
        </div>         
    </div>
    <div v-if="showModal === true">
     <ModalCharacter/>
    </div>
  </section>
</template>

<script>
import {axiosInstance} from '@/Services.js';
import ModalCharacter from "@/components/ModalCharacter.vue"
export default {  
  name: 'ListCharacter',
  data(){
    return{
      api: [],
      showModal: false
    }
  },
  components:{
    ModalCharacter
  },
   methods:{
    getCharacters(){
    axiosInstance.get('character').then(response => (this.api = response.data))
    },
    changeModal(){
      this.showModal = true
    }
  },
created(){
  this.getCharacters();
}
}
</script>

<style scoped>
section{
  display: grid;
  margin: 0 auto;
}
.containerCharacters{
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  margin: 50px auto 0 auto;
}
ul{
  display: flex;
  flex-direction: column;
}
.characters{
  max-width: 200px;
}
.containerInfo{
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 2rem;  
  border-radius: 4px;
  color: #000;
  display: flex;
}
.extraInfo{
  display: flex;
  flex-direction: column; 
  width: 500px;
  justify-content: center;
}
.extraInfo p {
  margin-left: 10%;
}
.name{
  font-size: 1.9rem;
}
@media screen {
  
}
@media (max-width:1050px){
  .containerInfo{
  width: 400px;
  }
}
@media (max-width:900px){
  .containerInfo{
    flex-direction: column;
    box-shadow:none;  
    align-items: center;
  }
  .extraInfo{
    background: #fff;
    max-width: 250px;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2rem;  
    border-radius: 4px;
  }
  .extraInfo p {
  margin-left: 3%;
  }
  .name{
  font-size: 1.5rem;
  }
  .characters{
  max-width: 250px;
  }
}
</style>