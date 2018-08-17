<template>
  <div id="home">
    <sui-segment>
      <div class="title">Title</div>

      <div class="ui left icon action input">
        <sui-icon name="user" />
        <input type="text" placeholder="nickname">
        <sui-button class="blue">Search</sui-button>
      </div>
      <sui-input placeholder="password" icon="key" iconPosition="left" />
      <sui-input placeholder="one more password" icon="key" iconPosition="left" />
      <sui-button primary>
        Sign up
      </sui-button>

      <sui-divider horizontal>Or</sui-divider>

      <sui-button secondary>
        Sign in
      </sui-button>
    </sui-segment>
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>

<style scoped lang="scss">
  .title {
    font-size: 3rem;
    line-height: normal;
    font-family: 'Courgette', cursive;
  }

  .ui {
    &.segment {
      margin: 5vw 5vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &.divider {
      width: 100%;
    }

    &.input {
      padding: 5px;
      width: 60%;
    }
  }
</style>
