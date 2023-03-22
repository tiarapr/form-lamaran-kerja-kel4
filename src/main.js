import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Form from './components/Form.vue'
import BaseInput from './components/form/BaseInput.vue'
import BaseSelect from './components/form/BaseSelect.vue'
import BaseRadio from './components/form/BaseRadio.vue'
import BaseRadioGroup from './components/form/BaseRadioGroup.vue'
import BaseCheckboxGroup from './components/form/BaseCheckboxGroup.vue'

//createApp(ReusableKomponen).mount('#app')

const app = createApp(Form);
app.component("base-input", BaseInput)
.component("base-select", BaseSelect)
.component("base-radio", BaseRadio)
.component("base-radio-group", BaseRadioGroup)
.component('base-checkbox-group',BaseCheckboxGroup);
app.mount("#app");
