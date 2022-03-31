export default {
  data() {
    return {
      list: [
        1
      ],
    };
  },
  template: `
    <ul>
      <li v-for="item in list" ref="items">
        {{ item }}
      </li>
    </ul>
  `,
  mounted() {
    console.log(this.$refs.items);
  },
};

// source: https://vuejs.org/guide/essentials/template-refs.html#refs-inside-v-for
