export default {
  // reactive state
  data() {
    return {
      count: 10,
      objectOfAttrs: {
        id: "container",
        class: "wrapper",
      },
      attrName: 'TSN',
      isContenteditable: true
    };
  },
  template: `<div v-bind="objectOfAttrs" :contenteditable="isContenteditable" :[attrName]="'tsn'">count is {{ count }}</div>`,
};


// Directives are special attributes with the v- prefix. => v- is directive
