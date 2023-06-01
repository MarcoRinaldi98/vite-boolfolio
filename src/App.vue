<script>
// importiamo gli elementi statici della pagina
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader
  }
}
</script>

<template>
  <header>
    <AppHeader></AppHeader>
  </header>
  <main>
    <!--componente che gestisce tutte le view delle routes-->
    <router-view></router-view>
  </main>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
