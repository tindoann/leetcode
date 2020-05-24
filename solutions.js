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