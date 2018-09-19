var request = require("request");
var http = require('http');

var url = "https://api.data.go.th/search_virtuoso/api/dataset/query?dsname=vir_231&path=vir_231&property=col_4&operator=CONTAINS&valueLiteral=%E0%B8%9E%E0%B8%B4%E0%B8%9E%E0%B8%B4%E0%B8%98%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C&property=col_8&operator=CONTAINS&valueLiteral=%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%99&loadAll=1&type=json&limit=100&offset=0"

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        //console.log(body) // Print the json response
        
		var app = http.createServer(function (req, res) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
			res.write('<input type="file" name="filetoupload"><br>');
			res.write('<input type="submit">');
			res.write('</form>');
			return res.end();
		});
		app.listen();      
        
    }
})
