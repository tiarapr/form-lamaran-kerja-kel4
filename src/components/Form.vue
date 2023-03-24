<template>
  <div class="container">
    <div class="row">
      <div>
        <form class="lamaran-form" @submit.prevent="onSubmit">
          <h1 class="border-bottom mb-8">Form Lamaran Kerja</h1>
          <!-- Base Input Nama -->
          <base-input type="text" v-model="form.name" label="Nama"></base-input>
          <div class="form-group">
            <label>Deskripsi Diri</label>
            <textarea class="form-control" rows="5" :value="form.description" @input="form.description = $event.target.value"></textarea>
          </div>
          <div class="form-group">
            <label>Pengalaman Kerja</label>
            <textarea class="form-control" rows="5" :value="form.experience" @input="form.experience = $event.target.value"></textarea>
          </div>
          <!-- Base Select Pendidikan -->
          <base-select label="Pendidikan" v-model="form.education" :options="dataForm.educations" placeholder="Pilih Pendidikan Terakhir"> </base-select>
          <!-- Base Input Email -->
          <base-input type="email" v-model="form.email" label="Email"></base-input>
          <!-- Base Input No. Telp -->
          <base-input type="text" v-model="form.telp" label="No. Telp"></base-input>
          <div class="form-group">
            <label>Alamat</label>
            <textarea class="form-control" rows="5" :value="form.address" @input="form.address = $event.target.value"></textarea>
          </div>
          <!-- Base Input Tanggal Lahir -->
          <base-input type="date" v-model="form.tgl_lahir" label="Tanggal Lahir"></base-input>
          <!-- Base Radio Group Jenis Kelamin -->
          <div class="base-group">
            <base-radio-group label="Jenis Kelamin" name="jenisKelamin" :options="dataForm.jk" v-model="form.jk"> </base-radio-group>
          </div>
          <!-- Base Select Posisi -->
          <base-select label="Pilih Posisi" v-model="form.posisiId" :options="dataForm.positions" placeholder="Select a position"> </base-select>
          <!-- Base Checkbox Group Skills -->
          <base-checkbox-group label="Skills" v-model="form.skills" :options="dataForm.skills" inline> </base-checkbox-group>
          <hr />
          <!-- Button Save -->
          <div class="form-group">
            <button type="submit" class="btn btn-lg btn-primary">Save</button>
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
  },
};
</script>
