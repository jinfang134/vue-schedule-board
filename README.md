# vue-schedule-board

A easy-to-use component to show somebody's schedule list to help interview arrangement or visit arrangement.


[中文](/doc/cn.md)

![Example](https://github.com/jinfang134/vue-schedule-board/blob/master/resources/sample.png?raw=true)


To get started, check out:
[demo](https://jinfang134.github.io/vue-schedule-board/)

## LICENSE

**NOTE:** Vue schedule board is licensed under [The MIT License](https://github.com/jinfang134/vue-pipeline/blob/master/LICENSE). Completely free, you can arbitrarily use and modify this plugin. If this plugin is useful to you, you can **Star** this repo, your support is my biggest motive force, thanks.


## Features

* Created calendar according your data dynamiclly
* Responsive web design
* Via data attributes
* show more than one people's schedule at the same day.


## Install

```bash
npm install vue-schedule-board
```

```js
import Vue from 'vue'
import ScheduleBoard from 'vue-schedule-board'

Vue.use(ScheduleBoard)

```
```vue
  <scheduler-board :persons="sample2" ref="pipeline" :startHour="10" @dblclick="handleDblClick" />
```

## Props

| Name      | Type    | Default | Description                                          |
| --------- | ------- | ------- | ---------------------------------------------------- |
| persons     | Array  | []    | The person list                             |
| startHour    | number  | 600     | The start hour                                               |
| endHour         | number  | 50      | The end hour                         |
|           |         |         |                                                      |

Person list example:

```json
{
    "name": "Arwen",
    "timeSlots": [
      {
        "startTime": "2019/12/10 10:00:00",
        "endTime": "2019/12/10 18:00:00"
      },
      {
        "startTime": "2019/12/11 10:00:00",
        "endTime": "2019/12/11 12:00:00"
      },
      {
        "startTime": "2019/12/12 14:00:00",
        "endTime": "2019/12/12 16:00:00"
      },
      {
        "startTime": "2019/12/13 15:00:00",
        "endTime": "2019/12/13 18:00:00"
      }
    ],
    "assignedTimes": [
      {
        "startTime": "2019-12-10 10:00:00",
        "endTime": "2019-12-10 11:00:00",
        "label": "Candidate A"
      },
      {
        "startTime": "2019-12-12 14:00:00",
        "endTime": "2019-12-12 15:00:00",
        "label": "Candidate B"
      },
    ]
}

```

## Events

| Name   | Params | Description                 |
| ------ | ------ | --------------------------- |
| @click | node   | Occurs when node is clicked |



## Contributing

If you find any bugs and/or want to contribute, feel free to create issues or submit pull requests.

Thanks!

## Local Development
```bash
cd demo
yarn install

// Compiles and hot-reloads for development
yarn run serve
```


### Lints and fixes files
```bash
yarn run lint
```
