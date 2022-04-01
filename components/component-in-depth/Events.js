export default {
  emits: {
    // No validation
    click: null,

    // Validate submit event
    submit: ({ email, password }) => {
      if (email && password) {
        return true;
      } else {
        console.warn("Invalid submit event payload!");
        return false;
      }
    },
  },
  methods: {
    submitForm(email, password) {
      this.$emit("submit", { email, password });
    },
  },
};

// https://vuejs.org/guide/components/events.htm
// https://vuejs.org/guide/components/events.html#usage-with-v-model
// https://vuejs.org/guide/components/events.html#v-model-arguments
// https://vuejs.org/guide/components/events.html#multiple-v-model-bindings
// https://vuejs.org/guide/components/events.html#handling-v-model-modifiers
