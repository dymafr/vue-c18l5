<template>
  <div class="card p-20 d-flex justify-content-center align-items-center">
    <h1>La page A</h1>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  height: 300px;
}
</style>
