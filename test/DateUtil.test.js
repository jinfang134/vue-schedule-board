
import test from 'ava';
import {
  plusMinites,
  isTimeConflict,
  isContain,
  getDuration,
  format
} from '../src/components/DateUtil'



test('plusMinites', t => {
  let time = '2019-12-14 10:00:00'
  let time2 = plusMinites(time, 30)
  t.is(time2.getMinutes(), 30)
  t.is(format(time2), '2019-12-14 10:30:00')
});


test('getDuration', t => {
  let time = '2019-12-14 10:00:00'
  let time2 = '2019-12-14 10:30:00'
  t.is(getDuration(time, time2), 30)
});


test('isContain',t=>{
  t.is(isContain(
    { startTime: '2019-12-14 10:00:00', endTime: '2019-12-14 15:00:00' },
    { startTime: '2019-12-14 11:00:00', endTime: '2019-12-14 14:00:00' }
  ),true)
  t.is(isContain(
    { startTime: '2019-12-14 10:00:00', endTime: '2019-12-14 15:00:00' },
    { startTime: '2019-12-14 9:00:00', endTime: '2019-12-14 14:00:00' }
  ),false)
})


test('isTimeConflict', t => {
  t.is(
    isTimeConflict(
      { startTime: '2019-12-14 10:00:00', endTime: '2019-12-14 15:00:00' },
      { startTime: '2019-12-14 11:00:00', endTime: '2019-12-14 14:00:00' }
    ), true)

  t.is(
    isTimeConflict(
      { startTime: '2019-12-14 10:00:00', endTime: '2019-12-14 15:00:00' },
      { startTime: '2019-12-14 9:00:00', endTime: '2019-12-14 11:00:00' }
    ), true)

  t.is(
    isTimeConflict(
      { startTime: '2019-12-14 10:00:00', endTime: '2019-12-14 15:00:00' },
      { startTime: '2019-12-14 14:00:00', endTime: '2019-12-14 16:00:00' }
    ), true)

  t.is(
    isTimeConflict(
      { startTime: '2019-12-14 10:00:00', endTime: '2019-12-14 15:00:00' },
      { startTime: '2019-12-14 15:00:00', endTime: '2019-12-14 16:00:00' }
    ), false)

})
