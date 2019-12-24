<template>
  <div class="schedulerow">
    <div class="schedulerow__date" :style="{width:dateWidth}">
      <div>
        <div class="month"> {{getMonth()}} </div>
        <div class="day"> {{new Date(day).getDate()}} </div>
      </div>
    </div>
    <div class="schedulerow__person-list">
      <div :class="'schedulerow__person '+'order'+person.order" v-for="person in persons" :key="person.name">
        <div class="schedulerow__person__name">
          <span>{{person.name}}</span>
        </div>
        <div class="schedulerow__person__schedule">
          <div class="timeline-list">

            <div v-for="(it,index) in getTimeSlotsMargins(person)" class="timeline" :key="'available'+index"
              v-on:click="handleClick(person)" :style="{'margin-left':it.marginLeft+'%',width:it.width+'%' }">
              {{it.label}}
            </div>

            <div v-for="(it,index) in getAssignedSlotsMargin(person)" class="timeline assigned"
              v-on:click="handleClick(person)" @dblclick="handleDblClick(person)" :key="'assigned'+index"
              :style="{'margin-left':it.marginLeft+'%',width:it.width+'%','background-color':getColor(index) }">
              {{it.label}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
import { sameDay } from "./DateUtil";
export default {
  props: {
    day: {
      type: String
    },
    persons: {
      type: Array
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
      timer: {},
      dateWidth: "80px"
    };
  },
  methods: {
    getMonth() {
      return new Date(this.day)
        .toGMTString()
        .split(" ")[2]
        .toUpperCase();
    },
    getColor(index) {
      let list = ["#f6b44b", "#E8C009", "#FFB917", "#E88A09", "#FF6400"];
      return list[index % list.length];
    },
    getTimeSlotsMargins(person) {
      let list = [];
      for (let i = 0; i < person.timeSlots.length; i++) {
        let range = person.timeSlots[i];
        if (!sameDay(new Date(range.startTime), new Date(this.day))) {
          continue;
        }
        list.push(this.getParams(range));
      }
      return list;
    },

    getParams(range) {
      let h = new Date(range.startTime).getHours();
      let m = new Date(range.startTime).getMinutes();
      let interval = (h - this.startHour) * 60 + m;
      let marginLeft =
        (interval * 100) / 30 / (this.endHour - this.startHour) / 2;
      let hh = new Date(range.endTime).getHours();
      let mm = new Date(range.endTime).getMinutes();
      let interval2 = (hh - h) * 60 + mm;
      let width =
        (interval2 * 100) / (30 * (this.endHour - this.startHour) * 2);
      return { marginLeft, width, label: range.label };
    },

    getAssignedSlotsMargin(person) {
      let list = [];
      if (!person.assignedTimes) {
        return [];
      }
      for (let i = 0; i < person.assignedTimes.length; i++) {
        let range = person.assignedTimes[i];
        if (!range || !sameDay(new Date(range.startTime), new Date(this.day))) {
          continue;
        }
        list.push(this.getParams(range));
      }
      return list;
    },

    handleClick(person) {
      // console.log(this.day, person);
      clearTimeout(this.timer);
      let that = this;
      this.timer = setTimeout(() => {
        that.$emit("click", that.day, person);
      }, 500);
    },
    handleDblClick(person) {
      clearTimeout(this.timer);
      this.$emit("dblclick", this.day, person);
    }
  },
  mounted() {},
  components: {
    // Person
  }
};
</script>

<style  lang="scss" scoped>
$line-color: #ccc;

.schedulerow {
  display: flex;
  width: 100%;
  border-bottom: 1px solid $line-color;
  position: relative;
  &__date {
    width: 102px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }

  &__person-list {
    width: 100%;
  }
  .order1 .timeline-list .timeline {
    background-color: #2ceef0;
  }

  &__person {
    width: 100%;
    height: 1.2em;
    margin: 16px 0px;
    display: flex;

    &__name {
      width: 103px;
      flex-shrink: 0;
      line-height: 1.2em;
      span {
        padding: 0 0 0 8px;
        font-size: 17px;
      }
    }
    &__schedule {
      width: 100%;
      height: 1.2em;
      .timeline-list {
        position: relative;
        width: 100%;
        .timeline {
          position: absolute;
          height: 1.4em;
          line-height: 1.4em;
          text-align: center;
          background-color: #059dc0;
          color: #fff;
          z-index: 1000;
          cursor: pointer;
          .assigned {
            z-index: 1200;
          }
        }
      }
    }

    &:hover {
      .timeline:not(.assigned) {
        box-shadow: 3px 3px 5px #aaa;
      }
      span {
        font-size: 1.3em;
        color: #059dc0;
        cursor: pointer;
      }
    }
  }
} //day
</style>
