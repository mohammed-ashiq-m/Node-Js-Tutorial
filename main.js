var http=require('http')

http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hello World\n')
    //write the comment what you want to see the Server Page,\n is used for new line

}).listen(8081)
//here is the declaration of the port which u want to look

console.log("server is successfully running at http://127.0.0.1:8081/ ")//server status at the run time
