<template>
  <div class="day7">
    <sui-tab
        :menu="{ vertical: true, fluid: true }"
        menu-position="left"
    >
      <sui-tab-pane title="Preference" class="pane">
        <div class="title">Preference</div>
        <div>
          <div>Theme</div>
          <sui-dropdown
              placeholder="Theme"
              selection
              :options="theme.list"
              v-model="theme.current"
          />
        </div>
        <div>
          <div>Input</div>
          <sui-input placeholder="Anysome" />
        </div>
        <div>
          <sui-checkbox label="Checkbox"/>
        </div>
      </sui-tab-pane>
      <sui-tab-pane title="Code Style">
        <div class="title">Code Style</div>
      </sui-tab-pane>
      <sui-tab-pane title="Other...">
        <div class="title">Other</div>
      </sui-tab-pane>
    </sui-tab>
  </div>
</template>

<script>
export default {
  name: 'Day7',
  data() {
    return {
      theme: {
        current: 'light',
        list: [{
          text: 'Light',
          value: 'light',
        }, {
          text: 'Dark',
          value: 'dark',
        }],
      },
    };
  },
};
</script>

<style scoped lang="scss">
  .day7 {
    width: 95%;
    margin: 60px 2.5% 0;

    .title {
      font-size: 1.2rem;
    }

    .pane > div:not(:nth-child(1)) {
      margin-top: 5px;
    }
  }
</style>
