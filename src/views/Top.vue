<template>
  <div>
    <sui-segment>
      <sui-list divided relaxed>
        <sui-list-item>
          <sui-list-content v-for="(day, index) in days" :key="day">
            <sui-list-header>Day{{index + 1}}: {{day}}</sui-list-header>
            <sui-list-description>
              <sui-button secondary @click="$router.push({path: `/${index + 1}`})">
                Go to Page
              </sui-button>
            </sui-list-description>
          </sui-list-content>
        </sui-list-item>
      </sui-list>
    </sui-segment>
  </div>
</template>

<script>
export default {
  name: 'Top',
  data() {
    return {
      days: ['Sign up', 'Credit Card Checkout'],
    };
  },
  mounted() {
    console.log(this.$router);
  },
};
</script>

<style scoped lang="scss">
  .ui {
    &.segment {
      margin: 5vw 5vh;
    }
    &.list > .item > .content {
      margin: 10px 0;
    }
  }
</style>
