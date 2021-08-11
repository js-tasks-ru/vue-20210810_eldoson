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
      default: '',
    },
  },

  template: `
    <div class="meetup-cover" :style="{'--bg-url': 'url(' + image +')'}" >
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
});
