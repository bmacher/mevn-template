<template>
  <div id="app">
    <h1>{{ messageFromCommon }}</h1>
    <h1>{{ messageFromBackend }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { sayHello } from '@mevn/common';

@Component
export default class Counter extends Vue {
  public messageFromCommon = `From Common: ${sayHello('world')}`;

  public messageFromBackend = 'From Backend: Loading...';

  private created(): void {
    fetch('http://localhost:3000')
      .then((data) => data.text())
      .then((data) => { this.messageFromBackend = `From Backend: ${data}`; })
      .catch(() => { this.messageFromBackend = 'From Backend: Could not load data.'; });
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
