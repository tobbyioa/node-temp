const os =  require('os');

const systemDetails =  {
 user: os.userInfo().username,
 version: os.release(),
 availableMemory: os.freemem(),
 totalMemory: os.totalmem()
};

console.log(systemDetails);