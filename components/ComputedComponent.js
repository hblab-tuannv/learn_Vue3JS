export default {
  data() {
    return {
      author: {
        firstName: "Tuan",
        lastName: "Nguyen",
        books: ["books 1", "books 2"],
      },
    };
  },
  template: `
    <input v-model="fullName = this.fullName"/>
    <p>Author: {{ fullName }} </p>
    <p>Has published books: {{ publishedBooksMessage }}</p>
  `,

  // computed properties are cached based on their reactive dependencies
  computed: {
    publishedBooksMessage() {
      return this.author.books.length ? "yes" : "no";
    },

    fullName: {
      get() {
        return this.author.firstName + " " + this.author.lastName;
      },
      set(newValue) {
        [this.firstName, this.lastName] = newValue.split(" ");
      },
    },
  },
};
