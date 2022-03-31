import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      count: 0,
    };
  },
  template: `
    <button @click="count++">
      You clicked me {{ count }} times.
    </button>`,
});
