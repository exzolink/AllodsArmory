<template>
  <header class="header">
    <RouterLink class="d-flex" to="/">
      <img
        alt="Оружейная"
        class="header__logo"
        decoding="async"
        height="86"
        src="@/assets/images/logo.svg"
        width="200"
      />
    </RouterLink>
  </header>
</template>

<style lang="scss">
.header {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}
</style>
