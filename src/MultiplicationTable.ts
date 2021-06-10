// run with mocha -r ts-node/register src\MultiplicationTable.ts
import { assert } from 'chai';

function multiplicationTable (size: number): number[][] {
    const table : number[][] = [];
    for (let i = 0; i < size; i++) {
        table[i] = []
        for (let j = 1; j <= size; j++) {
          table[i].push((i+1) * j)
        }
    }
    return table;
}

describe('Example Tests', () => {
    it('should work work with example tests', () => {
      assert.deepStrictEqual(multiplicationTable(1), [[1]])
      assert.deepStrictEqual(multiplicationTable(2), [[1, 2], [2, 4]])
      assert.deepStrictEqual(multiplicationTable(3), [[1, 2, 3], [2, 4, 6], [3, 6, 9]])
    })
  })
