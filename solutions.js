// 1. Two Sum
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Easy - Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

const twoSum = (nums, target) => {
  let storage = {}; 

  for(let [index, num] of nums.entries()) {
    if(storage[num] !== undefined) return [storage[num], index]; 
      storage[target - num] = index; 
  }
}; 

// brute force
var twoSum = function(nums, target) {
  for(var i=0;i<nums.length;i++){
      for(var j = i+1;j<nums.length;j++){
          if(nums[j] == (target-nums[i]))
            return [i, j]; 
          }
      }
  }

var twoSum = function(nums, target) {
  let obj = {}
  let len = nums.length;
  for(let i = 0;i < len; i++) {
      let containKey = target - nums[i];
      if(obj[containKey]!=undefined) {
          return [obj[containKey],i]
      }
      obj[nums[i]] = i;
  }
};

// n = [1, 3, 10]; 

function sumNumbers(n) {
  let results = 0; // 1
  for (const n of nums) { // 1
    result += n; // 3 => n
  }
  return result; 
}

// return n.reduce((sum, curNum) => sum + curNum, 0); 

// T = 1 + 1 + 1 + n = 3 + n = 3 + 1*n 

console.log(sumNumbers([1, 3, 10])); 

const twoSum = function(nums, target) {
  const comp = {}; // storage
  for(let i=0; i<nums.length; i++){ // loop 
      if(comp[nums[i] ]>=0){
          return [ comp[nums[i] ] , i]
      }
      comp[target-nums[i]] = i
  }
};

// The brute force approach is simple. Loop through each element xx and find if there is another value that equals to target - xtarget−x.

// we are looking for the two numbers that satisfy the condition (x + y = target)
// he iterates through the array knowing that for each number, 
// there is only one complementary number that could possibly satisfy the return 
// condition (x + y = target). if we do some quick math and rearrange this equation, 
// this means that target - y = x. we already know target, and each time we iterate we get a value of y. 
// therefore every time we iterate we calculate what the complementary x must be for that given y, 
// so we save the value of complementary x as the key and we save the index of y. as we pass through the loop, 
// we simultaneously build up a database of the potential x values that will give us our answer.
// therefore, if the current number is a key in the database, we return the value of the y index we stored earlier, along with the current index, and we have our answer.

// 2. Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.



// 1. set two pointers, one for each input list. Create head of new list
// 2. add values that our pointer are at
// 3. check if theres a carry, add 1 
// 4. check if sum >= 10. if it is, mod it and set carry flag = true
// 5. move pointer foward
// after loop, check if carry is true. If it is, add additoinal node to result list
// return result list

// Algorithm

// Just like how you would sum two numbers on a piece of paper, 
// we begin by summing the least-significant digits, 
// which is the head of l1l1 and l2l2. Since each digit is in the 
// range of 0 \ldots 90…9, summing two digits may "overflow". 
// For example 5 + 7 = 125+7=12. In this case, we set the current 
// digit to 22 and bring over the carry = 1carry=1 to the next iteration. 
// carrycarry must be either 00 or 11 because the largest possible sum of 
// two digits (including the carry) is 9 + 9 + 1 = 199+9+1=19.

function addTwoNumbers(l1, l2){
  let resultHead = new ListNode('head');
  let resultNode = resultHead
  let carry = 0 
  while(l1 || l2 || carry) {
    const v1 = l1 ? l1.val : 0
    const v2 = l2 ? l2.val : 0
    const v = v1 + v2 + carry

    resultNode.next = new ListNode(v%10)
    resultNode = resultNode.next
    carry = v >= 10 ? 1 : 0
    l1 = l1 && l1.next
    l2 = l2 && l2.next 
  }
  return resultHead.next
}

var addTwoNumbers = function(l1, l2) {
  let node = null
  const carry = arguments[2]
  if (l1 || l2) {
      const val1 = l1 ? l1.val : 0
      const val2 = l2 ? l2.val : 0
      const next1 = l1 ? l1.next : null
      const next2 = l2 ? l2.next : null
      const val = carry ? val1 + val2 + 1 : val1 + val2
      node = new ListNode(val % 10)
      node.next = addTwoNumbers(next1, next2, val >= 10)  
  } else if (carry) {
      node = new ListNode(1)
      node.next = null
  }
  return node
};

// 3.  Kids With the Greatest Number of Candies

// Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.


 // ex 1

// Input: candies = [4,2,1,1,2], extraCandies = 1
// Output: [true,false,false,false,false] 
// Explanation: There is only 1 extra candy, therefore only kid 1 will have the greatest 
// number of candies among the kids regardless of who takes the extra candy.

// ex 2
// Input: candies = [12,1,12], extraCandies = 10
// Output: [true,false,true]

const kidsWithCandies = (candies, extraCandies) => {
  const greatest = Math.max(...candies)
 const result = candies.map((candy) => candy + extraCandies >= greatest)
 return result
};

const kidsWithCandies = (candies, extraCandies) => {
  const greatest = Math.max(...candies);
  const results = [];
  for(const candy of candies){
      results.push(candy + extraCandies >= greatest)
  }
  return results;
};

// 4. Shuffle the Array

// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// Ex. 1 

// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

// Example 2:

// Input: nums = [1,2,3,4,4,3,2,1], n = 4
// Output: [1,4,2,3,3,2,4,1]

var shuffle = function(nums, n) {
  let resArr = [];
  for (let i = 0; i < nums.length/2; i++) {
      resArr.push(nums[i]);
      resArr.push(nums[i + n]);
  }
  return resArr;
};

let result_array = [];
    
for(let i = 0; i < n; i++) {
    result_array.push(nums[i], nums[n+i])
    return result_array
}

(nums, n) => nums.map((x, i) => i % 2 === 0 ? nums[i / 2] : nums[n + (i - 1) / 2])

// 5. Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

 

// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

let defangIPaddr = function(address) {
  let defAddr = '';
  for (char of address) {
      if (char === '.') {
          defAddr += '[.]';
      } else {
          defAddr += char;
      }
  }
  return defAddr;
};

var defangIPaddr = function(address) {
  var addressArray = address.split(".");
  return addressArray.join('[.]');
};

var defangIPaddr = function(address) {
  return address.replace(/\./g, '[.]');
};

var defangIPaddr = function(address) {
  return address.split('.').join('[.]');
};


// 6. Reverse Integer

// Given a 32-bit signed integer, reverse digits of an integer.



var reverse = function(x) {
  let ans = parseInt(x.toString().split('').reverse().join('').toString());

  if (x < 0) { ans *= -1; }

  if (ans < (Math.pow(2, 31) * -1) || ans > Math.pow(2, 31) - 1) return 0;
  return ans;
};

const reverse = x => {
  const limit = 2147483648;
  const k = x < 0 ? -1 : 1;
  const n = Number(String(Math.abs(x)).split('').reverse().join(''));
  return n > limit ? 0 : n * k;
};

var reverse = function(x) {
  let xrev = parseInt(Math.abs(x).toString().split('').reverse().join(''));
  return xrev > Math.pow(2,31) - 1 ? 0 : x > 0 ? xrev : xrev * -1;
};

// 7. Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Example 1:

// Input: 121
// Output: true
// Example 2:

// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

var isPalindrome = function(x) {
  return x === Number(x.toString().split("").reverse().join(""));
};

function isPalindrome(x)
	{
		var rem, temp, final = 0;
		var number = x

		temp = number;
		while(number>0)
		{
			rem = number%10;
			number = parseInt(number/10);
			final = final*10+rem;
		}
		if(final==temp)
		{
			return true
		}
		else
		{
			return false
		}
  }

  var isPalindrome = function(x) {
    //Short circuit 
    if(x < 0 || (x !== 0 && x % 10 == 0))
        return false;

    let reverse = 0;
    
    while (x > reverse) {
        reverse = reverse * 10 + x % 10;
        x = ~~(x/10);
    }
    
    return x === reverse || x === ~~(reverse/10);
};



var reverse = function(x) {
  // Make the number positive and turn it into a string
  let s = Math.abs(x).toString();
  let arr = [];
  // Push each "number" from last to first into an array 
  for (let i = s.length - 1; i >= 0; i--) {
    arr.push(s[i])
  }
  // Turn the reversed string into a number
  let result = Number(arr.join(''));
  // If the number exceeds the range, return 0
  if (result > 2 ** 31 - 1) {
    return 0;
  }
  // If the original input number was negative, turn the final number negative
  if (x < 0) {
    result *= -1;
  }

  return result;
};

// 8. 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function(strs) {
  if(!strs.length){
      return ''
  }
  let firstStr=strs.shift()
  if(!strs.length){
      return firstStr
  }
  
  let isFound=false
  let str=firstStr
  
      for(var j=firstStr.length;j>0;j--){
          str=firstStr.slice(0,j)
          isFound=strs.every((item)=>{
              return item.indexOf(str)==0
          })
          if(isFound){
              return str
          }
      }
  return isFound ? str : ''
};