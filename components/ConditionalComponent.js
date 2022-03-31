export default {
  data() {
    return {
      awesome: "awesome",
      isShow: true,
    };
  },
  template: `
    <input v-model="awesome" />
    <h1 v-if="awesome === 'awesome'">Vue is awesome!</h1>
    <h1 v-else-if="awesome">Oh no 😢</h1>
    <h1 v-else="awesome === ''">Blank 😢</h1>

    <h1 v-show="isShow">V-show</h1>
  `,
};
