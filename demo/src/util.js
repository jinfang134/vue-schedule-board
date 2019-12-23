let data = [{
    name: 'Arwen',
    venue: 'Tokyo',
    time: ['12/10 10:00-18:00','12/11 10:00-12:00','12/12 14:00-16:00','12/13 15:00-18:00']
  },
  {
    name: 'Simran',
    venue: 'Tokyo',
    time: ['12/11 10:00-12:00','12/12 14:00-16:00','12/13 15:00-18:00','12/14 10:00-12:00']
  },
  {
    name: 'Lori',
    venue: 'Tokyo',
    time: ['12/10 10:00-12:00','12/13 15:00-18:00','12/15 10:00-12:00']
  },
  {
    name: 'Sommer',
    venue: 'Tokyo',
    time: ['12/12 15:00-18:00','12/14 10:00-18:00','12/15 10:00-12:00']
  },
  {
    name: 'Gladys',
    venue: 'Tokyo',
    time: ['12/10 10:00-12:00','12/12 14:00-16:00','12/15 10:00-12:00']
  },
  {
    name: 'Zaid',
    venue: 'Tokyo',
    time: ['12/12 14:00-16:00','12/13 15:00-18:00']
  },
  {
    name: 'Nuala',
    venue: 'Osaka',
    time: ['12/13 15:00-18:00','12/15 10:00-12:00']
  },
  {
    name: 'Jun',
    venue: 'Osaka',
    time: ['12/14 10:00-18:00','12/15 10:00-12:00']
  },
  {
    name: 'Bruce',
    venue: 'Osaka',
    time: ['12/12 14:00-16:00','12/13 15:00-18:00','12/14 10:00-12:00']
  },
  {
    name: 'Ema',
    venue: 'Osaka',
    time: ['12/13 15:00-18:00','12/15 10:00-12:00']
  },
  {
    name: 'Abid',
    venue: 'Osaka',
    time: ['12/13 15:00-18:00','12/14 10:00-12:00','12/15 10:00-12:00']
  },
  {
    name: 'Tyson',
    venue: 'Tokyo',
    time: ['12/10 10:00-18:00','12/11 10:00-12:00','12/12 15:00-18:00']
  },
  {
    name: 'Milo',
    venue: 'Tokyo',
    time: ['12/13 15:00-18:00','12/15 10:00-12:00']
  },
  {
    name: 'Lindsey',
    venue: 'Osaka',
    time: ['12/10 10:00-12:00','12/10 14:00-18:00','12/11 10:00-12:00','12/12 14:00-16:00','12/13 15:00-18:00']
  }
]


let interviewerList=[]
for(let i=0;i<data.length;i++){
  let it=data[i]
  console.log(it)
  let list=it.time.map(span=>{
    let date=span.split(' ')[0]
    let time=span.split(' ')[1]
    let startTime=`2019/${date} ${time.split('-')[0]}:00`
    let endTime=`2019/${date} ${time.split('-')[1]}:00`
    return {
      startTime,
      endTime
    }
  })
  it.timeSlots=list
  delete it.time
  interviewerList.push(it)
}
console.log(JSON.stringify(interviewerList))
console.log(interviewerList)
