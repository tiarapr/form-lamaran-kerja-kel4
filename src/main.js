import { createApp } from "vue";
import router from '@/router'
import "@/style.css";
import App from "@/App.vue";
import Form from "@/components/Form.vue";
import TableData from "@/components/TableData.vue";
import BaseInput from "@/components/form/BaseInput.vue";
import BaseTextarea from "@/components/form/BaseTextarea.vue";
import BaseSelect from "@/components/form/BaseSelect.vue";
import BaseRadio from "@/components/form/BaseRadio.vue";
import BaseRadioGroup from "@/components/form/BaseRadioGroup.vue";
import BaseCheckboxGroup from "@/components/form/BaseCheckboxGroup.vue";
import Notif from '@/components/Notification.vue';

const app = createApp(App);

app
  .use(router)
  .component("form-component", Form)
  .component("table-data", TableData)
  .component("notif-component", Notif)
  .component("base-input", BaseInput)
  .component("base-textarea", BaseTextarea)
  .component("base-select", BaseSelect)
  .component("base-radio", BaseRadio)
  .component("base-radio-group", BaseRadioGroup)
  .component("base-checkbox-group", BaseCheckboxGroup)
  .mount("#app");
