var http=require('http')

http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hello World\n')
    //write the comment what you want to see the Server Page,\n is used for new line

}).listen(8081)
//here is the declaration of the port which u want to look

console.log("server is successfully running at http://127.0.0.1:8081/ ")//server status at the run time

// C A L L _ B A C K _ C O N C E P T//

var fs=require("fs")
var data=fs.readFileSync('input.txt')
console.log(data.toString());
console.log('program ended');

//E V E N T _ L O O P//

var events=require("events")
var eventEmitter=new events.EventEmitter();

connectHandler=function connected() {
    console.log('connected Succcessfully');
    eventEmitter.emit('data_received')
}


eventEmitter.on('connection',connectHandler);

eventEmitter.on("data_received",function (){
    console.log('datad received successfully');

});
eventEmitter.emit('connection');
console.log('program ended');

//***B U F F E R***//

buf = new Buffer(256);
len = buf.write("Simply Easy Learning");

console.log("Octets written : "+  len);

//****S E T - T I M E- O U T ****//

function printHello() {
    console.log( "Hello, World!");
}

// Now call above function after 2 seconds
setTimeout(printHello, 2000);



//**** S E T - I N T E R V E L ****//

console.log("wait for the result it will show after 2 seconds")
function printHello() {
    console.log( "Hello, World!");
}

// Now call above function after 2 seconds
var t=setInterval(printHello, 4000);

//CLEAR-INTERVEL WILL STOP THE setIntervel object//
clearInterval(t);