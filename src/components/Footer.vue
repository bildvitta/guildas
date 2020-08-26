<template>
  <footer class="footer">
    <p class="flex items-center">
      Feito com <q-icon class="footer__icon" name="favorite_border"></q-icon>pela 
      <img class="footer__logo" src="~assets/img/logo.png" />
    </p>
  </footer>
</template>

<script>
export default {
  name: 'app-footer'
}
</script>

<style lang="scss">
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: $darker-purple-text;

    &__icon {
      font-size: 16px;
      margin: 0 4px;
    }

    &__logo {
      max-width: 50px;
      display: inline-block;
      margin-left: 6px;
    }
  }
</style>