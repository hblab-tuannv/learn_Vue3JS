import Registration from "./Registration.js";
import Props from "./Props.js";

export default {
  // Local Component Registration
  components: {
    LocalRegistration: Registration,

    BlogPost: Props,
  },
  data() {
    return {
      post: {
        title: "post.title",
        author: {
          name: "post.author.name",
        },
      },
    };
  },
  template: `
    Global: <GlobalRegistration />
    <br/>
    Local: <LocalRegistration />
    <br/><br/><br/>

    <!-- props passed as static values -->
    <BlogPost title="My journey with Vue" />

    <!-- Dynamically assign the value of a complex expression -->
    <BlogPost :title="post.title + ' by ' + post.author.name" />

    <!-- Binding Multiple Properties Using an Object -->
    <BlogPost v-bind="post" />
  `,
};
