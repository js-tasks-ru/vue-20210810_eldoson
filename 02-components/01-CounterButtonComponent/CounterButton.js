import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  // Компонент должен иметь входной параметр
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  emits: ['update:count'],
  // Шаблон лучше держать максимально простым, а логику выносить в методы
  // Шаблон потребуется отредактировать
  computed: {
    counter() {
      return this.count + 1;
    },
  },
  methods: {
    handleClick() {
      this.$emit('update:count', this.counter);
    },
  },
  template: `<button type="button" @click="handleClick">{{ count }}</button>`,
});
