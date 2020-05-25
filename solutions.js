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

var twoSum = function(nums, target) {
  for(var i=0;i<nums.length;i++){
      for(var j = i+1;j<nums.length;j++){
          if(nums[i]+nums[j] == target){
              return [i,j]
          }
      }
  }
};

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

