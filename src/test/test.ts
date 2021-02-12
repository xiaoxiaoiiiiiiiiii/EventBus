import bus from '../libs/EventBus'

bus.on("first",(data?:any)=>{console.log("this is test emmit1:"+data)})
bus.on("first",(data?:any)=>{console.log("this is test emmit2:"+data)})
bus.emmit("first","emmit01")
bus.emmit("first","emmit02")


bus.off("first")
bus.emmit("first","emmit03")

console.log("this is test: " );