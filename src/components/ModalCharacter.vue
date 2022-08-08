<template class="teste">
  <section class="Containermodal">
    <div class="modal" @click="handleCloseModalOutside">
      <div class="InsideModal">   
        <h2 @click="handleCloseModal" class="close">x</h2>
        <div>
          <img :src="character.image" alt="">
          <h4>The character is: {{character.name}}</h4>
          <p>He/She/It is: {{character.status}}</p>
          <p>Species: {{character.species}}</p>
          <p>The Location are: {{character.location?.name}}</p>
        </div>        
      </div>
      
    </div>
  </section>
</template>
<script>
import {axiosInstance} from '@/Services.js';
export default {
  name: 'ModalCharacter', 
  props:['id','handleCloseModal','handleCloseModalOutside'],
  data(){
    return{
      character:{},
    }
  },
  methods:{
      fetchData(id){
         axiosInstance.get(`/character/${id}`).then(r=>{
        this.character=r.data})
      }
  },
    watch:{
    id:{
      handler(newId){
        this.fetchData(newId)
      }
    }
  },
    created(){
      this.fetchData(this.id)

    }
  }

</script>

<style scoped>
.modal{
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0,0,0,.4);
  display: flex;
  z-index: 1;
  padding: 10px;
  color: #000;
}
.InsideModal{
  position: relative;
  background: #f1faee;
  padding: 50px;
  border-radius: 4px;
  margin: auto;
  max-width: 400px;
}
.close{
  position: absolute;
  right: 0;
  top: 0;
  font-size: 2rem;
  margin-right: 10px;
  color: #000;
  cursor: pointer;
}
</style>