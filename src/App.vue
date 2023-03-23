<script setup>
import { ref } from 'vue'
import Form from './components/Form.vue'
import TableData from './components/TableData.vue'
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <Form />
      </div>
      <div class="col-md-6">
        <TableData />
      </div>
    </div>
  </div>
</template>