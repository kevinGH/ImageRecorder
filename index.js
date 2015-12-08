var WebSocket = require('ws'),
    fs = require('fs'),
    ws = new WebSocket('ws://localhost:9999');
    


ws.on('open', function open() {
    //ws.send('something');
});

ws.on('message', function (msg, flags) {
    // flags.binary will be set if a binary data is received. 
    // flags.masked will be set if the data was masked. 
    var data = JSON.parse(msg);
    var UTCTime = data.UTCTime;
    var TimezoneOffset = data.TimezoneOffset;
    var Img = data.Img;
    //console.log(msg);
    //var decodedImage = new Buffer(Img, 'base64').toString('binary');
    fs.writeFile(data.UTCTime + '.jpg', data.Img, 'base64', function (err) {
        if (err)
            console.log('write file err=' + err);
    });
});

ws.on('close', function close() {
    console.log('disconnected');
});