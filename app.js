//  var passwordLength= prompt("Give the length of ");
//  var specialchar="@#$%^&*";
//  var password="";
// // var random=Math.random()*passwordlength;
// // console.log(random)
// // var =random+specialchar;
// // console.log();
// for(var i=0;i<passwordLength;i++){
//     var random=Math.floor(Math.random()*specialchar.length);
    
// }
// console.log(password);

//Counter for Muharram
function calculateTimeDifference() {
var todayDate = new Date();

var muharramDate = new Date("7 July 2024");
var milliToday = todayDate.getTime()
var milliMuharram = muharramDate.getTime()
var diff = milliMuharram - milliToday;
var diffDays = diff / (1000 * 60 * 60 * 24);
var diffDays = Math.floor(diffDays);
diff-=diffDays*1000*60*60*24;
var todayHour = todayDate.getHours()
var todayMin = todayDate.getMinutes()
var todaySec = todayDate.getSeconds()
var muharramHour = muharramDate.getHours()
var muharramMin = muharramDate.getMinutes()
var muharramSec = muharramDate.getSeconds()
var diffHour = muharramHour - todayHour
var diffHour=Math.floor(diff/(1000*60*60))
var diffMin = muharramMin - todayMin
var diffMin=Math.floor(diff/(1000*60))
var diffSec = muharramSec - todaySec
var diffSec=Math.floor(diff/(1000))
var totalDiff = diffDays+":"+"day"+diffHour+":"+"hour"+diffMin+":"+"min"+diffSec+"sec"
console.log(totalDiff);
}
calculateTimeDifference()


// var till = todayDate-muharramDate;
// console.log(till);
