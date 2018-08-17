<template>
  <div>
    <sui-segment class="day2">
      <div class="total-view">
        <div class="title">total</div>
        <div class="dollar">
          <sui-icon name="dollar sign" size="large"/>
          <div class="cost">100</div>
        </div>
      </div>
      <sui-divider horizontal>Credit Card Information</sui-divider>
      <sui-input class="owner-input" placeholder="Card Owner" />
      <div class="input-number">
        <div>Card Number</div>
        <div class="number-form">
          <sui-input />
          <sui-input />
          <sui-input />
          <sui-input />
          <sui-icon name="credit card outline" />
        </div>
      </div>
      <div class="input-info">
        <div>
          <div>Expiration Date</div>
          <sui-input />
          /
          <sui-input />
        </div>
        <sui-input placeholder="CVC" />
      </div>

      <div class="buttons">
        <sui-button secondary>Cancel</sui-button>
        <sui-button primary>Pay Now</sui-button>
      </div>
    </sui-segment>
  </div>
</template>

<script>
export default {
  name: 'Day2',
};
</script>

<style scoped lang="scss">
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

    &.button {
      min-width: 100px;
    }

    &.input {
      width: 20%;
    }
  }

  .day2 > * {
    margin: 5px 0;
  }

  .total-view {
    align-self: flex-start;

    .title {
      font-size: 2rem;
      line-height: normal;
      font-family: 'Courgette', cursive;
    }

    .dollar {
      display: flex;
      justify-content: center;

      .cost {
        font-size: 1.5rem;
        font-weight: bold;
      }
    }
  }

  .input.owner-input {
    width: 70%;
  }

  .input-number {
    width: 70%;

    .number-form {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .input-info {
    width: 70%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .buttons {
    display: flex;
    .button {
      margin: 0 10px;
    }
  }
</style>
