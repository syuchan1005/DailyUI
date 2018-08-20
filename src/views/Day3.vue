<template>
  <div class="day3">
    <div class="balloons">
      <div class="balloon" v-for="(style, i) in balloons" :key="i" :style="style">
      </div>
    </div>
    <div class="page">
      <div>
        <div class="title">つぶグミ</div>

        <div>今日はやる気が起きなかったのでものすごく適当です</div>
      </div>
      <div>
        <img src="@/assets/fruit_mix_gummy.jpg" alt="Test" class="main-image">
      </div>
    </div>
    <sui-label class="bottom attached" color="red">
      The real web site is <a href="http://www.kasugai.co.jp/product/gummycandy/4901326040151.html">Here</a>
    </sui-label>
  </div>
</template>

<script>
export default {
  name: 'Day3',
  data() {
    return {
      balloons: [],
    };
  },
  mounted() {
    this.colorfulBalloon(80, 50, 30);
  },
  methods: {
    colorfulBalloon(n, max, min) {
      for (let i = 0; i < n; i += 1) {
        const size = (Math.random() * (max - min)) + min;
        this.balloons.push({
          'background-color': `hsla(${Math.random() * 360}, 50%, 50%, 0.2)`,
          top: `calc(${-1 * size * Math.random()}px + ${Math.random() * 100}%)`,
          left: `calc(${-1 * size * Math.random()}px + ${Math.random() * 100}%)`,
          width: `${size}px`,
          height: `${size}px`,
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
  .day3 {
    /*background-color: #4ad5ff;*/
    width: 100%;
    height: 100%;
  }

  .balloons {
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .balloon {
    border-radius: 50%;
    z-index: -1;
    position: fixed;
  }

  .main-image {
    width: 25vw;
  }

  .page {
    display: flex;
    width: 100%;
    height: 100%;

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 100%;
    }

    .title {
      line-height: normal;
      font-family: 'M PLUS Rounded 1c', sans-serif;
      font-size: 6rem;
      color: #ff60d0;
      -webkit-text-stroke: 3px #ffffff;
      text-shadow: 6px 6px 0  #ff60d0;
    }
  }
</style>
