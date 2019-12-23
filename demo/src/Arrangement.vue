<template>
  <div id="app">
    <h2>Scheduler Board</h2>
    <p>
      <ol>
        <li>Blue line represent a interviewer's available time </li>
        <li>Light green line represent a candidate's available time</li>
        <li>These blocks with other color represent arranged time.</li>
      </ol>
    </p>

    <h2>Example1:</h2>
    <div class="myboard">
      <scheduler-board :persons="sample1" ref="pipeline" @dblclick="handleDblClick" />
    </div>
    <h2>Example2:</h2>
    <div class="myboard">
      <scheduler-board :persons="sample2" ref="pipeline" :startHour="10" @dblclick="handleDblClick" />
    </div>
  </div>
</template>

<script>
import sample1 from "./data/sample1.json";
import sample2 from "./data/sample2.json";

export default {
  name: "app",
  components: {
    // hue
  },
  data() {
    return {
      tab: "pipeline",
      personList: [],
      msg: "",
      sample1,
      sample2
    };
  },
  watch: {},
  methods: {
    handleSelect(node) {
      this.msg = `{ ${node.name} }`;
    },
    handleDblClick(day, person) {}
  },
  mounted() {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 30px 30px;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
  /* height: 100vh; */
  /* display: flex; */
  /* flex-direction: column; */
}
.setting {
  margin: 30px;
  width: 800px;
}
.addline {
  display: flex;
  width: 300px;
}
.addline > *:not(:first-child) {
  margin-left: 5px;
}
.msg {
  margin: 20px auto;
  height: 20px;
}
.myboard {
  height: 600px;
  overflow-y: scroll;
}
.myboard::-webkit-scrollbar {
  display: none;
}
</style>
