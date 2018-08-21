<template>
  <div class="calc">
    <div class="screen">
      {{ input }}
    </div>
    <div class="buttons">
      <div class="main">
        <div class="button" v-for="pad in buttons.submethod" :key="pad">{{pad}}</div>
        <div class="button" v-for="pad in buttons.main" :key="pad"
             :class="{ doubleWidth: pad === '.'}">{{pad}}</div>
      </div>
      <div class="method">
        <div class="button" v-for="pad in buttons.method" :key="pad">{{pad}}</div>
      </div>
    </div>
    もちべ0
  </div>
</template>

<script>
export default {
  name: 'Day4',
  data() {
    return {
      input: '0',
      buttons: {
        submethod: ['AC', '+/-', '%'],
        main: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, '.'],
        method: ['/', '*', '-', '+', '='],
      },
    };
  },
};
</script>

<style scoped lang="scss">
  .calc {
    margin-top: 60px;
    width: 340px;
    color: white;
  }

  .screen {
    width: 100%;
    height: 85px;
    background-color: #020202;
    font-size: 85px;
    line-height: normal;
    text-align: right;
  }

  .buttons {
    display: flex;
    width: 100%;

    .button {
      width: 85px;
      height: 85px;
      border-left: black 1px solid;
      border-top: black 1px solid;
      font-size: 60px;
      line-height: normal;
      text-align: center;
      vertical-align: middle;

      &.doubleWidth {
        max-width: 170px;
        width: 60vw;
      }
    }

    .main {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-end;
      max-width: min(255, 90vw);

      .button {
        background-color: #818181;
      }
    }

    .method {
      .button {
        background-color: #FFB500;
      }
    }
  }
</style>
