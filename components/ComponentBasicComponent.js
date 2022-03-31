import ButtonCounter from "./component_basic/ButtonCounter.js";
import BlogPost from "./component_basic/BlogPost.js";

export default {
  components: {
    ButtonCounter,

    BlogPost,
  },
  data() {
    return {
      count: 0,

      posts: [
        { id: 1, title: "My journey with Vue" },
        { id: 2, title: "Blogging with Vue" },
        { id: 3, title: "Why Vue is so fun" },
      ],
      postStyleObject: {
        fontSize: "15px"
      }
    };
  },
  template: `
    <h1>Here are many child components!</h1>
    <button-counter />
    <button-counter />
    <button-counter />
    <br/><br/><br/>

    <div :style="postStyleObject">
      <blog-post
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        @enlarge-text="postStyleObject.fontSize = parseInt(postStyleObject.fontSize.split('px')[0]) + 1 + 'px'"
      >Slot content</blog-post>
    </div>
  `,
};

// https://vuejs.org/guide/essentials/component-basics.html
