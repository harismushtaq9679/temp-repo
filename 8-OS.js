// OS MODULES
const os = require('os')

// SYSTEM USER INFO
const user = os.userInfo()

// console.log(user);

// SYSTEM UPTIME IN SECS
console.log(` the uptime is ${os.uptime()} seconds`);

const currentOS = {
  name:os.type(),
  release:os.release(),
  totalMem:os.totalmem(),
  freeMem:os.freemem()
}

console.log(currentOS);


