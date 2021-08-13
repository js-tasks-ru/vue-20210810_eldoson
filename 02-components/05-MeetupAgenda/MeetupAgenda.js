import { defineComponent } from './vendor/vue.esm-browser.js';
import MeetupAgendaItem from './MeetupAgendaItem.js';

export default defineComponent({
  name: 'MeetupAgenda',
  components: {
    agendaItem: MeetupAgendaItem,
  },
  props: {
    agenda: {
      type: Array,
      required: true,
    },
  },

  template: `
    <ul class="agenda">
      <li class="agenda__item" v-for="item in agenda">
        <agenda-item :agendaItem="item"></agenda-item>
      </li>
    </ul>`,
});
