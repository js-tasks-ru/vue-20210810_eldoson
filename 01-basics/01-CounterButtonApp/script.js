import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

const vm = createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    handleClick() {
      this.counter++;
    },
    handleReset() {
      this.counter = 0;
    },
  },
}).mount('#app');
