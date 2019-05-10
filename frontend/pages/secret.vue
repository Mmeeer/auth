<template lang="html">
  <div class="">
    this is secret admin panel
    {{res}}
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  async asyncData({$axios, store}){
    console.log(store.state.token);
    $axios.setToken(store.state.token);
    let res = await $axios.$get("http://localhost:8080/info")
    return {res: res};
  }
}
</script>

<style lang="css" scoped>
</style>
