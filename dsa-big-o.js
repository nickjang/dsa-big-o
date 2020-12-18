/**
 * 1. What is the Big O for this?
 *
 *   1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people.
 *   You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone
 *   out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden
 *   retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"
 *
 *   O(1)
 *
 *   2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to
 *   find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people
 *   have the same breed as your dog. You start with the first person and ask him if he has a golden retriever.
 *   He says no, then you ask the next person, and the next, and the next until you find someone who has a golden
 *   or there is no one else to ask.
 *
 *   O(n)
 *
 * 2. Even or Odd
 * What is the Big O of the following algorithm? Explain your answer

    function isEven(value) {
        if (value % 2 === 0) {
            return true;
        }
        else {
            return false;
        }
    }
 *
 * O(1) because there is only one value and one operation done to it.
 * 
 * 3. Are you here?
 * What is the Big O of the following algorithm? Explain your answer

    function areYouHere(arr1, arr2) {
        for (let i = 0; i < arr1.length; i++) {
            const el1 = arr1[i];
            for (let j = 0; j < arr2.length; j++) {
                const el2 = arr2[j];
                if (el1 === el2) return true;
            }
        }
        return false;
    }
 * 
 * O(n x m) because you are doing doing something for each of arr2's items for each of arr1's items.
 * 
 * 4. Doubler
 * What is the Big O of the following algorithm? Explain your answer

    function doubleArrayValues(array) {
        for (let i = 0; i < array.length; i++) {
            array[i] *= 2;
        }
        return array;
    }
 * 
 * O(n) because you are doing a constant number of operations for each item in array.
 * 
 * 5. Naive search
 * What is the Big O of the following algorithm? Explain your answer

    function naiveSearch(array, item) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === item) {
                return i;
            }
        }
    }
 * 
 * O(n) because you are checking each item in the array if it is the matching item.
 * 
 * 6. Creating pairs:
 * What is the Big O of the following algorithm? Explain your answer

    function createPairs(arr) {
        for (let i = 0; i < arr.length; i++) {
            for(let j = i + 1; j < arr.length; j++) {
                console.log(arr[i] + ", " +  arr[j] );
            }
        }
    }
 * 
 * O(n^2) because you are doing something for every item in arr for every item in arr.
 * 
 * 7. Compute the sequence
 * What does the following algorithm do? What is its runtime complexity? Explain your answer

    function compute(num) {
        let result = [];
        for (let i = 1; i <= num; i++) {

            if (i === 1) {
                result.push(0);
            }
            else if (i === 2) {
                result.push(1);
            }
            else {
                result.push(result[i - 2] + result[i - 3]);
            }
        }
        return result;
    }
 * 
 * It returns an array from 0 to one minus the input number.
 * O(n) because it does a constant number of operations however many times the input number is.
 * 
 * 8.  An efficient search
 * In this example, we return to the problem of searching using a more sophisticated approach than in 
 * naive search, above. Assume that the input array is always sorted. What is the Big O of the following 
 * algorithm? Explain your answer

    function efficientSearch(array, item) {
        let minIndex = 0;
        let maxIndex = array.length - 1;
        let currentIndex;
        let currentElement;

        while (minIndex <= maxIndex) {
            currentIndex = Math.floor((minIndex + maxIndex) / 2);
            currentElement = array[currentIndex];

            if (currentElement < item) {
                minIndex = currentIndex + 1;
            }
            else if (currentElement > item) {
                maxIndex = currentIndex - 1;
            }
            else {
                return currentIndex;
            }
        }
        return -1;
    }
 * O(log(n)) because we are reducing the number of items to search by half everytime we search.
 * The number of times you half to divide the number of items in half can be represented by c * log(n) => O(log(n))
 * 
 * 9. Random element
 * What is the Big O of the following algorithm? Explain your answer

    function findRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
 * 
 * O(1) because you are getting one item from an array.
 * 
 * 10. 10. What Am I?
 * What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

    function isWhat(n) {
        if (n < 2 || n % 1 !== 0) {
            return false;
        }
        for (let i = 2; i < n; ++i) {
            if (n % i === 0) return false;
        }
        return true;
    }
 *  2, 3, 5, 7, 9, 11, 13, 15
 * It checks if the input is a prime number.
 * O(n) because it checks if the number has a multiple by dividing it against numbers up to itself. 
 * 
 * 11. Tower of Hanoi
 * The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:
 * 
 * There are three rods and a number of disks of different sizes which can slide onto any rod. The puzzle 
 * starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top 
 * (making a conical shape). The other two rods are empty to begin with.
 * The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where 
 * it was stacked before) where it will be stacked in the ascending order as well. This should be done obeying 
 * the following rules: i) Only one disk may be moved at a time ii) Each move consists of taking the upper disk 
 * from one of the rods and sliding it onto another rod, on top of the other disks that may already be present 
 * on that rod. iii) A larger disk may not placed on top of a smaller disk
 * 
 * Input:
 * Rod A	Rod B	Rod C
 * ----		
 * ---------		
 * -------------		
 * 
 * Output:
 * Rod A	Rod B	Rod C
 *              ----
 *              ---------
 *              -------------
 * Derive an algorithm to solve the Tower of Hanoi puzzle.
 * Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.
 * If you are given 5 disks, how do the rods look like after 7 recursive calls?
 * How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
 * What is the runtime of your algorithm?
 */
const hanoi = (source, middle, dest, realOrder = [source, middle, dest], numToMove = source.length) => {
  if (numToMove === 3) {
    dest.unshift(source.shift());
    console.log(realOrder);
    middle.unshift(source.shift());
    console.log(realOrder);
    middle.unshift(dest.shift());
    console.log(realOrder);
    dest.unshift(source.shift());
    console.log(realOrder);
    source.unshift(middle.shift());
    console.log(realOrder);
    dest.unshift(middle.shift());
    console.log(realOrder);
    dest.unshift(source.shift());
    console.log(realOrder);
    return [source, middle, dest];
  }
  console.log(realOrder);
  [source, dest, middle] = hanoi(source, dest, middle, realOrder, numToMove - 1);
  dest.unshift(source.shift());
  console.log(realOrder);
  [middle, source, dest] = hanoi(middle, source, dest, realOrder, numToMove - 1);
  return [source, middle, dest];
};
let A = ['----', '--------', '------------', '----------------', '--------------------', '------------------------', '----------------------------'],
  B = [],
  C = [];
hanoi(A, B, C);
/**
 * It looks the same because there is a base case for when there are only 3 to move.
 * 3 disks - 7, 4 disks - 15, 5 disks - 23
 * O(2^n) because each ring does the number of operations.
 * 
 * Big O of recursive exercises
 * 1. O(n) 2. O(n) 3. O(n) 4. O(n) 5. O(n) 6. O(n) 7. O(n) 8. O(n) 9. O(n) 10. O(n) 11. O(n) 12. O(n)
 */


