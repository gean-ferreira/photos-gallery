<template>
  <button class="button" @click="back"><span>Voltar</span></button>
  <h1>Fotos</h1>
  <loader v-if="isLoading" />
  <div class="organizacao">
    <div class="photos-album" v-for="(photos, index) in photosAlbum" :key="index">
      <img :src="photos.thumbnailUrl" >
      <div class="photos-title">{{ photos.title }}</div>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { getPhotos } from "../service/gallery-service";
import Loader from "./Loader.vue";

export default {
  components: {
    Loader,
  },
  setup() {
    const route = useRoute();
    const photosAlbum = ref(null);
    const isLoading = ref(false);
    const router = useRouter();

    onMounted(() => {
      isLoading.value = true;
      getPhotos(route.params.id)
        .then((resp) => {
          photosAlbum.value = resp;
        })
        .finally(() => {
          isLoading.value = false;
        });
    });

    const back = () => router.replace("/")

    return { photosAlbum, isLoading, back };
  },
};
</script>

<style>
h1 {
  margin: 1rem;
}
.button {
  border-radius: 4px;
  background-color: lightseagreen;
  border: none;
  color: #ffffff;
  text-align: center;
  padding: 15px;
  width: 100px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}
.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}
.button span:after {
  content: "\00ab";
  position: absolute;
  opacity: 0;
  top: 0;
  left: -20px;
  transition: 0.5s;
}
.button:hover span {
  padding-left: 15px;
}
.button:hover span:after {
  opacity: 1;
  left: 0;
}
.organizacao {
  display: grid;
  grid-template-columns: auto auto auto;
  margin: 0 0.5rem;
}
.photos-album {
  display: flex;
  width: 30rem;
  align-items: center;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
  border: solid 1px gray;
}
.photos-title {
  margin-left: 0.5rem;
}
</style>
