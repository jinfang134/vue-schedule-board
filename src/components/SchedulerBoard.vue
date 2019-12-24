
<template>
  <div class="board">

    <div class="board__hourlist">
      <div class="left"></div>
      <div class="hour-label" v-for="i in (endHour-startHour-1)" :key="i">
        {{(i+startHour)%12==0?12:(i+startHour)%12}} {{i+startHour>=12?'PM':'AM'}}
      </div>
    </div>
    <div class="board__schedulelist">
      <div class="board__hourspan">
        <div class="date"></div>
        <div class="left"></div>
        <div class="hour-span" v-for="i of (endHour-startHour)*2" :key="i.x">
        </div>
      </div>
      <div class="schedules">
        <day v-for="(it,index) in dayList" :key="index" :startHour="startHour" @click="handleClick"
          @dblclick="handleDblClick" :persons="filterPersons(it)" :day='it' />
      </div>
      <div class="board__bottom"> </div>
    </div>
  </div>
</template>
<script>
import Day from "./Day";
import { sameDay } from "./DateUtil";

export default {
  components: {
    Day
  },
  props: {
    persons: {
      type: Array,
      default: () => []
    },
    startHour: {
      type: Number,
      default: 8
    },
    endHour: {
      type: Number,
      default: 18
    }
  },
  data() {
    return {
      spanList: [],
      dayList: []
    };
  },
  computed: {
    personLength() {
      return this.persons.length;
    }
  },
  watch: {
    personLength() {
      this.render();
    }
  },
  methods: {
    handleClick(day, person) {
      this.$emit("click", day, person);
    },
    handleDblClick(day, person) {
      this.$emit("dblclick", day, person);
    },
    /**
     *
     * @param {Date} date
     */
    getDate(date) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },
    filterPersons(date) {
      return this.persons.filter(
        it =>
          it.timeSlots.filter(time =>
            sameDay(new Date(time.startTime), new Date(date))
          ).length > 0
      );
    },

    render() {
      this.dayList = [];
      let dateSet = new Set();
      this.persons.forEach(it => {
        it.timeSlots.forEach(time => {
          let date = this.getDate(new Date(time.startTime));
          dateSet.add(date);
        });
      });
      this.dayList = Array.from(dateSet);
      this.dayList.sort();
    }
  },
  mounted() {
    this.render();
  }
};
</script>

<style lang="scss">
$line-color: #ddd;

.board {
  color: #182026;

  &__bottom {
    position: sticky;
    border: 1px solid $line-color;
    bottom: 0px;
    left: 0px;
    width: 100%;
    z-index: 500;
  }

  &__hourlist {
    display: flex;
    padding: 0 5%;
    position: sticky;
    background-color: #fff;
    border-bottom: 1px solid $line-color;
    z-index: 2000;
    top: 0;
    .left {
      flex-shrink: 0;
      width: 180px;
    }
    .hour-label {
      padding: 5px;
      font-size: 0.9em;
      order: 1;
      width: 100%;
      text-align: center;
    }
  }

  &__schedulelist {
    position: relative;
    left: 0px;
    top: 0px;
    width: 100%;
    height: auto;

    .schedules {
      left: 0px;
      top: 0px;
      width: 100%;
    }
  }

  &__hourspan {
    width: 100%;
    position: absolute;
    display: flex;
    height: 100%;

    .date {
      flex-shrink: 0;
      width: 80px;
      border-left: 1px solid $line-color;
    }

    .left {
      flex-shrink: 0;
      width: 100px;
      border-left: 1px solid $line-color;
      border-right: 1px solid $line-color;
    }
    .hour-span {
      font-size: 0.8em;
      border-right: 1px solid $line-color;
      border-top: 1px solid $line-color;
      order: 1;
      width: 100%;
    }
  }
}
</style>
