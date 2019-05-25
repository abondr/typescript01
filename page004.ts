interface LoggerInterface{
    log(arg : any) : void;
}
class Logger implements LoggerInterface{
    log(arg){
        if(typeof console.log === "function"){
            console.log(arg);
        }else{
            alert(arg);
        }
    }
}


var loger = new Logger();

loger.log("line 1");
loger.log("line 2");
loger.log("line 3");
loger.log("line 4");