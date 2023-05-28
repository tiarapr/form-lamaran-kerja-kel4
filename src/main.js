import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import { router } from './services';

// setup fake backend
import { fakeBackend } from './services';
fakeBackend();

//components
import Nav from "@/views/components/Nav.vue";
import BaseInput from "@/views/components/form/BaseInput.vue";
import BaseTextarea from "@/views/components/form/BaseTextarea.vue";
import BaseSelect from "@/views/components/form/BaseSelect.vue";
import BaseRadio from "@/views/components/form/BaseRadio.vue";
import BaseRadioGroup from "@/views/components/form/BaseRadioGroup.vue";
import BaseCheckboxGroup from "@/views/components/form/BaseCheckboxGroup.vue";

const app = createApp(App);

app.use(createPinia());
app
.use(router)
.component("nav-component", Nav)
.component("base-input", BaseInput)
.component("base-textarea", BaseTextarea)
.component("base-select", BaseSelect)
.component("base-radio", BaseRadio)
.component("base-radio-group", BaseRadioGroup)
.component("base-checkbox-group", BaseCheckboxGroup)
.mount("#app");
