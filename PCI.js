var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
fs.readFile('Pci.html',function(err,data){
	res.writeHead(200,{'context-Type':'text/html'})
	res.write(data);
	res.end();
});
}).listen(8080);
