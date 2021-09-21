<template>
  <h1>Fotos</h1>
  <div v-for="(photos, index) in photosAlbum" :key="index">
    <img :src="photos.thumbnailUrl">
    {{ photos.title }}
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { onMounted, ref } from 'vue';
import { getPhotos } from '../service/gallery-service';

export default {
  setup(){
    const route = useRoute();
    const photosAlbum = ref(null)

    onMounted(() => {
      getPhotos(route.params.id).then(resp => {
        photosAlbum.value = resp
        console.log(resp)
      })
    })

    return { photosAlbum };
  }
}
</script>

<style>

</style>