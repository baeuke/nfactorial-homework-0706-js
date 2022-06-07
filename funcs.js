// #7 #8
function firstLetterA (str) {
 return str.charAt(0) == "A";
}

function showPrinciples ({ p1, p2}) {
 return `The principles of the clan are to always ${p1} and ${p2}!`;
}

module.exports.firstLetterA = firstLetterA;
module.exports.showPrinciples = showPrinciples;
// export { firstLetterA };