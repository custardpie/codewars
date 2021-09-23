/**
 * mocha -r node_modules/ts-node/register src\FindTheSmallest.ts
 * 
You have a positive number n consisting of digits. You can do at most one operation: Choosing the 
index of a digit in the number, remove this digit at that index and insert it back to another or 
at the same place in the number in order to find the smallest number you can get.

Task:
Return an array or a tuple or a string depending on the language (see "Sample Tests") with

the smallest number you got
the index i of the digit d you took, i as small as possible
the index j (as small as possible) where you insert this digit d to have the smallest number.
*/
import chai, { assert } from "chai";
chai.config.truncateThreshold = 0;

export function smallest(n: number): number[] {
    const array = ('' + n).split('')
    let smallest = [-1, 0, 0]
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            // take character at i out and insert it at j
            const anotherArray = ('' + n).split('')
            const removedItem = anotherArray.splice(i, 1)
            anotherArray.splice(j, 0, removedItem[0])
            const newNumber = parseInt(anotherArray.join(''))
            if (smallest[0] == -1 || smallest[0] > newNumber) {
                smallest = [newNumber, i, j]
            }
        }
    }
    return smallest
}


describe("Fixed Tests smallest", function () {
    it("Basic tests", function () {
        assert.deepEqual(smallest(261235), [126235, 2, 0]);
        assert.deepEqual(smallest(209917), [29917, 0, 1]);
        assert.deepEqual(smallest(285365), [238565, 3, 1]);
        assert.deepEqual(smallest(269045), [26945, 3, 0]);
        assert.deepEqual(smallest(296837), [239687, 4, 1]);
        assert.deepEqual(smallest(111111111), [111111111, 0, 0]);
        assert.deepEqual(smallest(1227778), [1227778, 0, 0]);
    });
});
