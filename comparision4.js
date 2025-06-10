console.log("3">1);// this will convert the string dataype into number and then compare 

console.log(null > 0);   // false  (null becomes 0, 0 > 0 is false)
console.log(null < 0);   // false  (0 < 0 is false)
console.log(null >= 0);  // true   (0 >= 0 is true)
console.log(null == 0);  // false  (== does NOT convert null to 0 here)
/* for this reason is that equality check and comparision < ,>,>= ,<= works differently 
comaprision convert null to a number ,treating it as 0 // that's why it is true AND null> 0 is false 
*Comparisons (<, >, <=, >=) → convert null to 0
*Equality check (==) → does not convert null to 0
*(null == 0 → false ❌)
*/
console.log(5 == "5");    // true ✅ (because "5" gets converted to 5)
console.log(5 === "5");   // false ❌ (number !== string)
