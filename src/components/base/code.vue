<template>
  <pre :style="{'height': line + 'em'}"><code :class="lang" v-text="code" ref="code"></code></pre>
</template>

<script>
import hljs from 'highlight.js';

export default {
  props: ['lang', 'code', 'line'],
  watch: {
    code() {
      this.$nextTick(() => {
        hljs.highlightBlock(this.$refs.code);
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      hljs.highlightBlock(this.$refs.code);
    });
  }
};
</script>