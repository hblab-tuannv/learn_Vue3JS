export default {
  data() {
    return {
      text: "input value",
      textarea: "textarea value",

      checkedNames: [],

      picked: "",

      selected: "",
    };
  },
  template: `
    <p>Text is: {{ text }}</p>
    <input v-model="text" placeholder="edit me" />
    <br/><br/><br/>

    <span>Multiline text is:</span>
    <p style="white-space: pre-line;">{{ textarea }}</p>
    <textarea v-model="textarea" placeholder="add multiple lines" :rows="5"></textarea>
    <br/><br/><br/>

    <div>Checked names: {{ checkedNames }}</div>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <br/><br/><br/>

    <div>Picked: {{ picked }}</div>
    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>
    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>
    <br/><br/><br/>

    <div>Selected: {{ selected }}</div>
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
  `,
};

// https://vuejs.org/guide/essentials/forms.html#checkbox
