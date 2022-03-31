import { defineComponent } from "vue";

export default defineComponent({
  props: ["title"],
  emits: ["enlarge-text"],
  template: `
    <slot />
    <h3>{{ title }}</h3>
    <button @click="$emit('enlarge-text')">Zoom</button>
    <br/><br/><br/>
  `,
});
