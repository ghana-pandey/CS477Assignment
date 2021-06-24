const convert = require('dns');

convert.lookup('www.miu.edu', (err, hostname) => {
    console.log("Equivalent ip address is ",hostname);

});