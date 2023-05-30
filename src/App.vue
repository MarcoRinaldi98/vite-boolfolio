<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  components: {
    AppHeader,
    AppMain
  }
}
</script>

<template>
  <header>
    <AppHeader></AppHeader>
  </header>
  <main>
    <AppMain></AppMain>
  </main>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
