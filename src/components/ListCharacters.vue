<template>
  <section>
    <input nome="search" id="search" class="search" v-model="search" type="text" @change="(e)=>this.name = e.target.value">
    {{search}}
    <div v-if="showModal === true">
     <ModalCharacter :handleCloseModal='closeModalOnX' :handleCloseModalOutside='CloseModalOnTarget' :id='id'/>
    </div>
    <div class="containerCharacters">
        <div v-for="characters in api.results" :key="characters.id" @click="handleSetId(characters.id)" class="containerInfo">    
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
    <div class="Containerbutton">
      <div v-if="this.page == this.totalPages || this.page < 1" >
        <button disabled>←</button>
        <button @click="this.page = this.page+1" >→</button>
      </div>      
      <div v-else>
        <button @click="this.page = this.page-1">←</button>
        <button @click="this.page = this.page+1" >→</button>
      </div>
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
      showModal: false,
      id:'',
      page:1,
      totalPages: 0,
      search:"",
      name: ""
    }
  },
  components:{
    ModalCharacter
  },
  methods:{
    getCharacters(){
    axiosInstance.get(`/character/?page=${this.page}&name=${this.name}`)
    .then(response => (this.api = response.data, this.totalPages = response.data.info.pages))
    },
    handleSetId(id){
     this.id = id; 
     this.showModal = true;
    },
    closeModalOnX(){
      this.showModal = false;
    },
    CloseModalOnTarget({target, currentTarget}){
      if(target === currentTarget){
        this.showModal = false;
      }
    },
    scrollToTop(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  },
  watch:{
    page:{
      handler(){
        this.getCharacters();
        this.scrollToTop()
      }
    },
    name:{
       handler(){
        this.getCharacters();
      }
    }
  },
  created(){
    this.getCharacters();
  }
}
</script>

<style scoped>
.search{
  display: grid;
  margin: 0 auto;
  width: 600px;
  height: 50px;
  border: none;
  box-shadow: rgba(0, 0, 0.1, 0.2) 0px 0px 1rem; 
  border-radius: 4px;
}
.search:focus,
.search:hover{
  transform: scale(1.02);
}
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
.Containerbutton{
  display: flex;
  align-items: center;
  grid-template-columns: 1fr;    
  justify-content: space-evenly;
}
.Containerbutton div{
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.Containerbutton button{
  border: none;
  background: #fff;
  padding: 10px;
  box-shadow: rgba(0, 0, 0.1, 0.2) 0px 0px 1rem; 
  margin-top: 10px;
  cursor: pointer;
  font-size: 2rem;
  border-radius: 4px;
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
  cursor: pointer;
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
@media (max-width:1500px){
  .search{
    width: 500px;
  }
}
@media (max-width:1050px){
  .containerInfo{
    max-width: 500px;
  }
  .search{
    max-width: 400px;
  }
}
@media (max-width:900px){
  .containerInfo{
    flex-direction: column;
    box-shadow:none;  
    align-items: center;
  }
  .search{
    max-width: 250px;
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