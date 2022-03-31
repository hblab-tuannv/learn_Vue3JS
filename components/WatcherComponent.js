export default {
  data() {
    return {
      object: {
        question: "",
        answer: "Questions usually contain a question mark. ;-)",
      },
    };
  },
  template: `
    <p>
      Ask a yes/no question:
      <input v-model="object.question" />
    </p>
    <p>{{ object.answer }}</p>
  `,
  watch: {
    // whenever object.question changes, this function will run
    "object.question"(newQuestion, oldQuestion) {
      if (newQuestion.indexOf("?") > -1) {
        this.getAnswer();
      }
    },
  },
  methods: {
    async getAnswer() {
      this.object.answer = "Thinking...";
      try {
        const res = await fetch("https://yesno.wtf/api");
        this.object.answer = (await res.json()).answer;
      } catch (error) {
        this.object.answer = "Error! Could not reach the API. " + error;
      }
    },
  },
};
