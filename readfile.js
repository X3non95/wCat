let fs = require('fs');

function forRead(dirpath){
 let rdLine = fs.readFileSync(dirpath,{encoding:"utf8"})
 console.log(rdLine)
}

module.exports={
    readFn : forRead
};