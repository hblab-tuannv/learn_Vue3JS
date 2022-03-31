export default {
  data() {
    return {
      items: [{ message: "Foo" }, { message: "Bar" }],

      myObject: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10",
      },
    };
  },
  template: `
    <ul>
      <li v-for="(item, index) in items">
        [{{ index }}] {{ item.message }}
      </li>
    </ul>

    <ul>
      <li v-for="(value, key, index) in myObject">
        [{{ index }}] {{ key }}: {{ value }}
      </li>
    </ul>
  `,
};

// source: https://vuejs.org/guide/essentials/list.html
