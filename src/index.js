module.exports = function check(str, bracketsConfig) {
  const brackets = bracketsConfig.map((val) => val.join(''));
  for(i = 0; i < brackets.length; i++) {
  	if (str.includes(brackets[i])) {
  		str = str.replace(brackets[i], '');
  		i = -1;
  	}
  }
  return !str;
}
