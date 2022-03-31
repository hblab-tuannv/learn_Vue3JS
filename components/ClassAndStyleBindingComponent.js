export default {
  data() {
    return {
      isActive: true,
      error: null,
      classObject: {
        active: true,
        "text-danger": false,
      },
      activeClassName: "active",
      errorClassName: "text-danger",

      styleObject: {
        color: "red",
        fontSize: "13px",
      },
      styleObject1: {
        background: "darkgrey",
      },
    };
  },
  template: `
    <div
      class="static"
      :class="classObject"
    ></div>
    <div
      class="static"
      :class="computedClassObject"
    ></div>
    <div :class="[activeClassName, errorClassName]"></div>

    <div :style="styleObject"></div>
    <div :style="[styleObject, styleObject1]"></div>
  `,

  computed: {
    computedClassObject() {
      return {
        active: this.isActive && !this.error,
        "text-danger": this.error && this.error.type === "fatal",
      };
    },
  },
};
