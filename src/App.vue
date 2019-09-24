<template>
  <div>
    <o-header></o-header>
    <router-view/>
  </div>
</template>

<script>
import header from '@/components/header';

export default {
  name: 'App',
  components: {
    oHeader: header
  }
}
</script>
