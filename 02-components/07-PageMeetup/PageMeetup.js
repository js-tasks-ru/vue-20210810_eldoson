import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import MeetupView from '../06-MeetupView/MeetupView.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from './meetupService.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },
  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      meetup: null,
      error: null,
      isLoading: null,
    };
  },
  watch: {
    meetupId: {
      immediate: true,
      handler() {
        this.isLoading = true;
        this.meetup = null;
        this.error = null;
        fetchMeetupById(this.meetupId)
          .finally(() => (this.isLoading = false))
          .then(
            (value) => (this.meetup = value),
            (error) => (this.error = error),
          );
      },
    },
  },

  template: `
    <div class="page-meetup">
      <!-- meetup view -->
      <meetup-view v-if="meetup && !isLoading" :meetup="meetup"></meetup-view>

      <ui-container v-else-if="isLoading">
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>

      <ui-container v-else-if="error">
        <ui-alert>Test Error</ui-alert>
      </ui-container>
    </div>`,
});
