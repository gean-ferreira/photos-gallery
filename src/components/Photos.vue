<template>
  <h1>Fotos</h1>
  <loader v-if="isLoading"/>
  <div v-for="(photos, index) in photosAlbum" :key="index">
    <img :src="photos.thumbnailUrl">
    {{ photos.title }}
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { onMounted, ref } from 'vue';
import { getPhotos } from '../service/gallery-service';
import Loader from "./Loader.vue";

export default {
  components: {
    Loader
  },
  setup(){
    const route = useRoute();
    const photosAlbum = ref(null);
    const isLoading = ref(false);

    onMounted(() => {
      isLoading.value = true;
      getPhotos(route.params.id).then(resp => {
        photosAlbum.value = resp
      }).finally(() => {
        isLoading.value = false;
      });
    });

    return { photosAlbum, isLoading };
  }
}
</script>

<style>

</style>