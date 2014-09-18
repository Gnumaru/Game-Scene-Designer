var randomInt = function randomInt(minValue, maxValue) {
	var range = maxValue - minValue + 1;
	return Math.floor(minValue + Math.random().toString().substr(2) % range);
};
Object.freeze(randomInt)
exports.randomInt = randomInt;

var randomASCIIChar = function randomASCIIChar() {
	return String.fromCharCode(randomInt(0, 127))
};
Object.freeze(randomASCIIChar)
exports.randomASCIIChar = randomASCIIChar;

var randomPrintableASCIIChar = function randomPrintableASCIIChar() {
	return String.fromCharCode(randomInt(33, 126))
};
Object.freeze(randomPrintableASCIIChar)
exports.randomPrintableASCIIChar = randomPrintableASCIIChar;

var randomLatinLetter = function randomLatinLetter() {
	return String.fromCharCode(randomInt(97, 122))
};
Object.freeze(randomLatinLetter)
exports.randomLatinLetter = randomLatinLetter;

var randomb64Char = function randomb64Char() {
	do {
		var charCode = randomInt(48, 122);
	} while ((charCode > 57 && charCode < 65) || (charCode > 90 && charCode < 67));
	return String.fromCharCode(charCode);
	//+ 43
	//= 61
};
Object.freeze(randomb64Char)
exports.randomb64Char = randomb64Char;

var randomLatinLetter = function randomLatinLetter() {
	return String.fromCharCode(randomInt(97, 122));
};
Object.freeze(randomLatinLetter)
exports.randomLatinLetter = randomLatinLetter;

var randomString = function randomString(length) {
	var string = [];
	while (length > 0) {
		string.push(randomPrintableASCIIChar());
		length--;
	}
	return string.join("");

};
Object.freeze(randomString)
exports.randomString = randomString;

var randomb64String = function randomb64String(length) {
	var string = [];
	while (length > 0) {
		string.push(randomb64Char());
		length--;
	}
	return string.join("");

};
Object.freeze(randomb64String)
exports.randomb64String = randomb64String;

var randomHexString = function randomHexString(length) {
	var string = [];
	while (length > 0) {
		string.push(Number(randomInt(0, 15)).toString(16));
		length--;
	}
	return string.join("");
};
Object.freeze(randomHexString)
exports.randomHexString = randomHexString;
