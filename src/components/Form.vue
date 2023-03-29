<template>
  <div class="container">
    <div class="row">
      <div>
        <form class="lamaran-form" @submit.prevent="onSubmit">
          <h1 class="border-bottom mb-8">Form Lamaran Kerja</h1>
          <!-- Base Input Nama -->
          <base-input type="text" v-model="form.name" label="Nama" :error="errors.name"></base-input>
          <!-- Base Textarea Deskripsi -->
          <base-textarea v-model="form.description" label="Deskripsi Diri" :error="errors.description"></base-textarea>
          <!-- Base Textarea Pengalaman Kerja -->
          <base-textarea v-model="form.experience" label="Pengalaman Kerja" :error="errors.experience"></base-textarea>
          <!-- Base Select Pendidikan -->
          <base-select label="Pendidikan" v-model="form.education" :options="dataForm.educations" placeholder="Pilih Pendidikan Terakhir" :error="errors.education"></base-select>
          <!-- Base Input Email -->
          <base-input type="email" v-model="form.email" label="Email" :error="errors.email"></base-input>
          <!-- Base Input No. Telp -->
          <base-input type="text" v-model="form.telp" label="No. Telp" :error="errors.telp"></base-input>
          <!-- Base Textarea Pengalaman Kerja -->
          <base-textarea v-model="form.address" label="Alamat" :error="errors.address"></base-textarea>
          <!-- Base Input Tanggal Lahir -->
          <base-input type="date" v-model="form.tgl_lahir" label="Tanggal Lahir" :error="errors.tgl_lahir"></base-input>
          <!-- Base Radio Group Jenis Kelamin -->
          <div class="base-group">
            <base-radio-group label="Jenis Kelamin" name="jenisKelamin" :options="dataForm.jk" v-model="form.jk" :error="errors.jk"></base-radio-group>
          </div>
          <!-- Base Select Posisi -->
          <base-select label="Pilih Posisi" v-model="form.posisiId" :options="dataForm.positions" placeholder="Select a position" :error="errors.posisi"> </base-select>
          <!-- Base Checkbox Group Skills -->
          <base-checkbox-group label="Skills" v-model="form.skills" :options="dataForm.skills" inline :error="errors.skills"> </base-checkbox-group>
          <hr />
          <!-- Button Save -->
          <div class="form-group">
            <button type="submit" class="btn btn-lg btn-primary">{{ isEdit ? 'Update' : 'Save' }}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    form: Object,
    onSubmit: Function,
    dataForm: Object,
    errors: Object,
    isEdit: Boolean
  },
};
</script>
