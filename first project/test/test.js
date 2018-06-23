const fs = require('fs');
const http = require('http');

const wr = fs.createWriteStream('./text.txt', { highWaterMark: 10 });
for (let i = 0; i <= 1000; i += 1) {
  wr.write(
    'ksdfkoadskfokadsofkosdakfokdsaofkdsoakfodksaofkdsaokfokdasofksoaksdfkoadskfokadsofkosdakfokdsaofkdsoakfodksaofkdsaokfokdasofksoaksdfkoadskfokadsofkosdakfokdsaofkdsoakfodksaofkdsaokfokdasofksoaksdfkoadskfokadsofkosdakfokdsaofkdsoakfodksaofkdsaokfokdasofksoa',
  );
}
wr.end();
// console.log(read);

const server = http((request, response) => {
  fs.readFile('./text.txt',(err,));
}).listen(40000);
