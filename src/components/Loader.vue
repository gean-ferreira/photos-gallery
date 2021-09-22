<template>
  <div class="loader"></div>
</template>

<script>
export default {

}
</script>

<!-- https://www.w3schools.com/howto/howto_css_loader.asp -->
<style>
.loader {
  border: 14px solid #f3f3f3; 
  border-top: 14px solid black;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>