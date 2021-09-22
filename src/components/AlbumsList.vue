<template>
  <h1>Álbuns</h1>
  <loader v-if="isLoading"/>
  <div class="div-albums" v-for="(albums, index) in list" :key="index" @click="getAlbumId(albums.id)">
    {{ albums.title }}
  </div>
</template>

<script>
import { getAlbumsList } from "../service/gallery-service";
import { onMounted, ref } from "vue";
import { useRouter } from 'vue-router'
import Loader from "./Loader.vue";

export default {
  components: {
    Loader
  },
  setup() {
    const list = ref([]);
    const router = useRouter();
    const isLoading = ref(false);

    onMounted(() => {
      isLoading.value = true;
      getAlbumsList().then((resp) => {
        list.value = resp;
      }).finally(() => {
        isLoading.value = false;
      });
    });

    const getAlbumId = id => router.push({ name:"photos", params:{id} });

    return { list, getAlbumId, isLoading };
  },
};
</script>

<style>
  h1{
      margin: 1rem
    }
   .div-albums{
     width: 450px;
     margin-left: 1.5rem;
     margin-bottom: 0.5rem;
     border: solid 1px black;
     border-radius: 20px;
     padding: 0.5rem;
     cursor: pointer;
   }
   .div-albums:hover{
     background: lightseagreen;
   }
</style>