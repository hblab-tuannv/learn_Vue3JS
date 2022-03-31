import Registration from "./Registration.js"

export default {
  // Local Component Registration
  components: {
    LocalRegistration: Registration,
  },
  data() {
    return {};
  },
  template: `
    Global: <GlobalRegistration />
    <br/>
    Local: <LocalRegistration />
  `,
};
