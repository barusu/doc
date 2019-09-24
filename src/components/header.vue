<template>
  <header>
    <div class="logo" @click="$router.push('/')">
      <img class="whirligig" src="../assets/ab_story_bg.png" alt="">
    </div>
    <span class="title">Document</span>
    <nav>
      <router-link :to="{name: 'components'}">组件</router-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>