export default {
  data() {
    return {
      count: 0,
    };
  },
  template: `
    <button @click="count+=10">Add 10</button>
    <p>Count is: {{ count }}</p>

    <button @click="resetCount">Reset Count</button>
    <br/><br/><br/>

    <!-- using $event special variable -->
    <button @click="warn('Form cannot be submitted yet.', $event)">
      Submit
    </button>
    <br/><br/><br/>

    <!-- the click event's propagation will be stopped -->
    <a @click.stop="stop">stop</a>
  `,

  methods: {
    resetCount(event) {
      this.count = 0;

      // `event` is the native DOM event
      if (event) {
        console.log(event.target.tagName);
      }
    },

    warn(message, event) {
      // now we have access to the native event
      if (event) {
        event.preventDefault();
      }
      alert(message);
    },

    stop() {
      alert("'.stop' Modifiers");
    },
  },
};


// https://vuejs.org/guide/essentials/event-handling.html#key-modifiers
