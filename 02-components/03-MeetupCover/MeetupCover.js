import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',
  props: {
    title: {
      type: String,
      requiered: false,
    },
    image: {
      type: String,
      requiered: false,
    },
  },
  computed: {
    bgStyle() {
      if (this.image) return { '--bg-url': 'url(' + this.image + ')' };
      return {};
    },
  },

  template: `
    <div class="meetup-cover" :style="bgStyle">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
});
