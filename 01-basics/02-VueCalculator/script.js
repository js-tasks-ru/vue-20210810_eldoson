import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const vm = createApp({
  data() {
    return {
      firstArgument: 0,
      secondArgument: 0,
      operation: '',
    };
  },
  computed: {
    result() {
      if (this.operation === 'sum') return Number(this.firstArgument) + Number(this.secondArgument);
      else if (this.operation === 'subtract') return this.firstArgument - this.secondArgument;
      else if (this.operation === 'multiply') return this.firstArgument * this.secondArgument;
      else if (this.operation === 'divide') return this.firstArgument / this.secondArgument;
      return 0;
    },
  },
}).mount('#app');
