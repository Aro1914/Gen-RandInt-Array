/**
 *   Description: A helper function that returns an array filled with random numbers.
 * 
 *   Copyright 2022 Emmanuel Agbavwe to Present.
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

/**
 * Populates an array of a specified size with randomly generated integers, setting the range of possible values using the from and to arguments.
 * @param {Number} size The desired size of the array
 * @param {Number} from The upper bound of the range
 * @param {Number} to The lower bound of the range
 * @returns {Array<Number>} An array of integers within the specified range.
 */
const genRandIntArray = (size = 0, from = 0, to = 0) => {
    const randomArray = [];
    let i = 0;
    for (i; i < size; i++) {
        randomArray[i] = to + Math.round((Math.random() * (from - to)));
    }
    return randomArray;
};

// To verify the output data in the array uncomment and run the lines below
// console.log(genArray(10000000, 1000, 500)); // This will create an array with a length of 10 million and fill it with integers given the minimum possible value as 500 and the maximum possible value as 1000. 
// Note that inverting the from and to arguments would still produce the same results for the JavaScript implementation.


export default genRandIntArray();