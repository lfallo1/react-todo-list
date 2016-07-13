var moment = require('moment');
var x = [1,2,3];
var y = 17;

//combine arrays, filter elements greater than 2, sort descending
// console.log([...x,y]
//   .filter((d)=>{return d > 2;})
//   .sort((a,b)=>{return a < b ? 1 : a > b ? -1 : 0;})
// );

var m = moment();
console.log(m.format('MMMM DD, YYYY HH:mm:ss a wo'));
var timestamp = m.unix();
console.log(moment.unix(timestamp).format('MMMM Do, YYYY @ HH:mm A'));
// console.log(moment(timestamp*1000).format('MMMM DD, YYYY HH:mm:ss'));
