const fs = require('fs');
const server = require('http').createServer();
server.on('request', (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url == '/') {
        res.write('<html>')
        res.write('<head><title>test progamming</head></title>')
        res.write('<body><form action="/getMessage" method="POSt">Enter Message <input name=message><button type="submit">submit</button></form></body>')
        // res.end();

    }
    else if (url === "/getMessage" && method == "POST") {
        let body = [];
        req.on('data', (chunk) => {
            body.push(chunk)

        })
        req.on('end', () => {
            let dataArray = Buffer.concat(body).toString();
            let newData = dataArray.split("=");
            let writeData = newData[1];




            let writer = fs.createWriteStream('message.txt');
            writer.write(writeData);

        })
        res.statusCode = 302;
        res.setHeader("Location", "/");
        res.end("done");
    }

}).listen(3000)