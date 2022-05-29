const EventEmmiter  = require('events');
//const emmiter =  new EventEmmiter();

var url = "http://mylogger.io/log";

class Logger extends EventEmmiter {

     log (message){
        console.log(message);
    
        this.emit('messageLogged',{id: 1,url: 'http://'});
    
    }

}



module.exports = Logger;