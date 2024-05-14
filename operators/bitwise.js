// &	AND	Sets each bit to 1 if both bits are 1
// |	OR	Sets each bit to 1 if one of two bits is 1
// ^	XOR	Sets each bit to 1 if only one of two bits is 1
// ~	NOT	Inverts all the bits
// <<	Zero fill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
// >>	Signed right shift	Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
// >>>	Zero fill right shift	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off


// Operation	Result	Same as	Result
// 5 & 1	1	0101 & 0001	 0001
console.log(5&1);
// 5 = 0101
// 1 = 0001
// res = 0001 = 1


// Operation	Result	Same as	Result
// 5 | 1	5	0101 | 0001	 0101
console.log(5 | 1);
// 5 = 0101
// 1 = 0001
// res = 0101 = 5

// Operation	Result	Same as	Result
// ~ 5	10	 ~0101	 1010
console.log(~5);
// Since JavaScript uses 32 bits signed integers, it will not return 10. It will return -6.
// 00000000000000000000000000000101 (5)
// 11111111111111111111111111111010 (~5 = -6)
// NOT - inverts all bits 0 become 1 etc
// 5 = 0101 
// res = 1010 = -6 

// Operation	Result	Same as	Result
// 5 << 1	10	0101 << 1	 1010
console.log(5 << 2);
// Move left (shifts left) by pushing zeroes from right and let leftmost bits fall off
// 5 << 1 = 0101 << 1
// res = 1010 drop the left most and move everyting and shuffle by 1 = 10

// Operation	Result	Same as	Result
// 5 ^ 1	4	0101 ^ 0001	 0100
console.log(5 ^ 1);
// sets bit to one only if satisfies
// 	0101 ^ 0001 = 0100 == 4

// Operation	Result	Same as	Result
// 5 >> 1	2	0101 >> 1	 0010
console.log(5 >> 1);
// shifts right 
// 5 >> 1
// 0101 >> 1	 0010 -> drop the 1 and add zero on eflt

// Operation	Result	Same as	Result
// 5 >>> 1	2	0101 >>> 1	 0010
