import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: "TyPFvDI6qfIsn4QNWrYbnQtt",
  cache: {
    clear: "auto",
    type: "memory",
  },
});

export default Storyblok;