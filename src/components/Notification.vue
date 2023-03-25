<script setup>
defineProps({
  notifData: Array
})
</script>

<template>
  <div class="notification" :class="{ notifActive: notifData[0] }" :style="{ backgroundColor: notifData[1] ? '#4f55c4' : '#e53170' }">
    <p v-text="notifData[1]"></p>
  </div>
</template>

<style scoped>
.notification {
  position: absolute;
  top: -5em;
  right: 2em;
  padding: 0.5em 1em;
  color: #FFFFFF;
  border-radius: 0.3em;
  outline: 2px solid transparent;
  z-index: 1;
  transition: all 300ms;
}

.notification.notifActive {
  top: 1em;
}

.notification:hover {
  outline-color: #4f55c4;
}

.notification p {
  font-weight: bold;
}
</style>
