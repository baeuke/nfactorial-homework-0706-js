/* ************** */
/* ! NO logical SEMANTIC meaning HERE, 
   events and characters encountered in this "code" are entirely fictional, 
   any real-world matches consider to be a coincidence 
*/
/* ************** */

// #1 #2
let age = 18, name = "Dalida", location = "Almaty", inPower = true;
let successor = null;


// #3 #5
let clanDalida = {
 "parent-house" : "nFactorioto",
 "founding-year" : 2022,
 members: 12,
 principles : {
  p1 : "have fun",
  p2 : "generate value"
 }
};

clanDalida.founder = name;
clanDalida.province = location ?? "Czechoslovakia"; // if instead of Almaty was null/undefined
clanDalida["prime-head"] = successor;


// console.log(clanDalida);

clanDalida["numYear"] = 28;
delete clanDalida.numYear;


clanDalida.zodiacSign = "capricorn";
// console.log(clanDalida);
delete clanDalida["zodiacSign"];



if (!clanDalida.hasOwnProperty("zodiacSign")) {
 inPower = false;
}


clanDalida["prime-head"] = (inPower) ? " " : "Dalida II";



// #4
let memberList = ["Aidar", "Mura", "AruZh", "Nartay"];
let initArr = memberList;
let animeChars = ["Luffy", "Eren", "Jiraiya"];
memberList = memberList.concat(animeChars);
clanDalida.members = memberList.length;
// console.log(clanDalida.members);


inPower = (memberList.slice(4)[1] == animeChars[1]) ? true : false;
console.log("Dalida's power status: " + inPower);
console.log();

memberList.push("Naruto");
memberList.unshift(memberList.pop());
memberList.shift();

// console.log(memberList);
console.log(clanDalida);
console.log();

let clanControl = function (founder, year, ...members) { // rest param (...) should be last in the list
 return `${founder} leads ${members} since ${year}`;
}

console.log(clanControl(clanDalida.founder, clanDalida["founding-year"], memberList));
console.log();



// #8
// import { firstLetterA } from "./funcs.mjs"; // <- doesn't work
const funcs = require("./funcs.js");


// #4
let someArr = memberList.filter(funcs.firstLetterA);
console.log(someArr);
console.log();

let surnamed = memberList.map(memb => memb + " de Dalida");
console.log(surnamed);
console.log();


let namesA = ['Armin', 'Ace', ...someArr, 'Ashura'];
console.log(namesA);
console.log();
// #7
clanDalida["full-name"] = () => "'" + clanDalida.founder + " of " + clanDalida.province + "'";
console.log(clanDalida["full-name"]());

console.log();
// #7 #8
console.log(funcs.showPrinciples(clanDalida.principles));

console.log();

let {members, founder} = clanDalida;
console.log("currently there are " + members + " members in the clan, " + "the founding mother is " + founder);