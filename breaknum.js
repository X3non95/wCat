let fs = require('fs');
function breaknum(dirpath){
 fileBuffer =  fs.readFileSync(dirpath);
 to_string = fileBuffer.toString();
 split_lines = to_string.split("\n");
 let i = 0;
 while (i< split_lines.length){
  if (split_lines[i]!='\r'){
   console.log(i+1,split_lines[i]);
  }
  i++;
 }
}

module.exports={
 bnumFn: breaknum
};