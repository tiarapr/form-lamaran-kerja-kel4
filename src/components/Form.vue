<template>
  <div class="col-10 form-card">
    <div>
      <form @submit.prevent="onSubmit">
        <h2 class="border-bottom mb-3 pb-4">Form {{ isEdit ? 'Edit Data' : 'Tambah Data' }}</h2>
        <div class="row">
          <div class="col-6">
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
          </div>
          <div class="col-6">
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
            <base-select label="Pilih Posisi" v-model="form.posisiId" :options="dataForm.positions" placeholder="Select a position" :error="errors.posisi"></base-select>
            <!-- Base Checkbox Group Skills -->
            <base-checkbox-group label="Skills" v-model="form.skills" :options="dataForm.skills" inline :error="errors.skills"></base-checkbox-group>
          </div>
        </div>
        <hr />
        <!-- Button Save -->
        <div class="buttons d-flex justify-content-end">
          <button type="button" class="btn btn-secondary" @click="cancelButton">Batal</button>
          <button type="submit" class="btn btn-primary">Simpan</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      id: String,
      form: Object,
      onSubmit: Function,
      dataForm: Object,
      errors: Object,
      isEdit: Boolean,
      clearFormInput: Function
    },
    methods: {
      cancelButton() {
        this.clearFormInput();
        if (this.isEdit)
          this.$router.push({name: "detail", params: {id: this.id}})
        else
          this.$router.push({name: "home"});
      }
    }
  };
</script>