export function sumTriangularNumbers(n:number):number {
    let tn = 0;
    let cur = 0;
    if(n > 0) {
      for (let i = 1; i <= n; i++) {
        cur += i;
        tn += cur;
      }
    }
    return tn;
  }
  
  console.log(sumTriangularNumbers(-971))

  /*
      assert.equal(solution.sumTriangularNumbers(6), 56);
    assert.equal(solution.sumTriangularNumbers(34), 7140);
    assert.equal(solution.sumTriangularNumbers(-291), 0);
    assert.equal(solution.sumTriangularNumbers(943), 140205240);
    assert.equal(solution.sumTriangularNumbers(-971), 0);
    */