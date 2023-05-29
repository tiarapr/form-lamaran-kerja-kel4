<template>
  <div class="min-h-full">
    <HeaderComponent />

    <div class="py-8">
      <main>
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <RouterView></RouterView>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { RouterView } from 'vue-router'

import HeaderComponent from './components/HeaderComponent.vue'

export default {
  components: {
    RouterView,
    HeaderComponent
  }
}
</script>
