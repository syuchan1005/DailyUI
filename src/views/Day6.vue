<template>
  <div class="day6">
    <div class="background">
      <div id="particles-js"></div>
      <img src="assets/day6.gif" alt="nyancat" class="cat">
    </div>

    <div class="wrapper">
      <img class="ui medium image" src="@/assets/sample.png" />
    </div>
    <div class="sections">
      <div class="section" v-for="item in sections" :key="item.name">
        <div>{{item.name}}</div>
        <div @click="item.link && open(item.link)"
             :style="{cursor: (item.link ? 'pointer' : 'default')}">
          {{item.value}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'particles.js';

export default {
  name: 'Day6',
  data() {
    return {
      sections: [
        {
          name: 'Nickname',
          value: 'syuchan1005',
        },
        {
          name: 'Realname',
          value: 'Secret',
        },
        {
          name: 'Twitter',
          value: '@syu_chan_1005',
          link: 'https://twitter.com/syu_chan_1005',
        },
      ],
    };
  },
  mounted() {
    window.particlesJS.load('particles-js', 'assets/day6.json');
  },
  methods: {
    open(url) {
      window.open(url);
    },
  },
};
</script>

<style scoped lang="scss">
  .day6 {
    display: flex;
    justify-content: space-around;
  }

  .wrapper {
    background-color: white;
    padding: 10px;
    border-radius: 1.5%;
    width: fit-content;
    margin-top: 60px;
  }

  .sections {
    margin-top: 60px;
    color: white;
    font-size: 1.5rem;

    .section {
      display: flex;

      & > div:nth-child(2) {
        margin-left: 10px;
      }
    }
  }

  .background {
    z-index: -1;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;

    #particles-js {
      background-color: #043564;
      position: fixed;
      top: 0;
      left: 0;
    }

    .cat {
      position: relative;
      width: 60%;
    }
  }
</style>
