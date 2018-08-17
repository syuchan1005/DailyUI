<template>
  <div>
    <sui-segment>
      <div class="title">Title</div>

      <sui-input icon="user" iconPosition="left" placeholder="nickname" action="Check"/>
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
  name: 'Day1',
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
