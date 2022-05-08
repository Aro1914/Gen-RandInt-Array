'''
    Description: A helper function that returns an array filled with random integers.

    Copyright 2022 Emmanuel Agbavwe to Present.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
'''

import math
import random


def genRandIntArray(size = 0, _from = 0, to = 0):
    '''Populates an array of a specified size with randomly generated integers, setting the range of possible values using the from and to arguments.
    param size: int
    _from: int
    to: int
    :returns: list[int]
    '''
    try:
        randomArray = [0] * size
        for i in range(size):
            randomArray[i] = (
                int(math.floor(random.randrange(_from, to+1))))
        return randomArray
    except ValueError:
        return 'Invalid arguments passed. "_from" must be greater than or equal to "to"'

# To verify the output data in the array uncomment and run the lines below
# print(genArray(10000000, 1000, 500)); # This will create a list with a length of 10 million and fill it with integers given the minimum possible value as 500 and the maximum possible value as 1000.
# Note that inverting the _from and to arguments would cause an error as the '_from' argument must be greater than or equal to 'to'.
