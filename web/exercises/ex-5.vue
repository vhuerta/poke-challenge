/*
Vue.js
Make a child component that has a button that when pressed, emits a signal to increase a counter.
Implement that component in a parent component that handles the logic of the counter.
Complexity: Easy
*/

<template>
<div>
  <Children :val="value" />
</div>
</template>

<script>
import Children from './Children.vue'

export default {
  components: {
    Children
  },

  data: function () {
    return {}
  },

  methods: {

  }
}
</script>