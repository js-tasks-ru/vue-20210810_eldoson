import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

// Требуется создать Vue приложение
const vm = createApp({
  data() {
    return {
      meetupId: 0,
      meetupTitle: 'Meetup Title',
    };
  },
  watch: {
    meetupId() {
      fetchMeetupById(this.meetupId).then((result) => (this.meetupTitle = result.title));
    },
  },
}).mount('#app');
