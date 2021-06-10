/**
 * Given a positive number n > 1 find the prime factor decomposition of n. 
 * The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"

where a ** b means a to the power of b

with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
https://www.dcode.fr/prime-factors-decomposition#:~:text=To%20find%20the%20prime%20factorization,which%20are%20less%20than%20N%20.

 */

const primeFactors = (n : number) : string => {
        let current = 2
        const primes : number[] = []
        const times : number[] = []
        do {
            if (n % current === 0) {
                n = n / current;
                //if (primes.includes(current)) {
                if (primes.indexOf(current) !== -1) {
                    times[times.length - 1] = times[times.length - 1] + 1
                }
                else {
                    primes.push(current)
                    times.push(1)
                }
            }
            else {
                current++
            }
        } 
        while (n > 1)

        let output = ''
        for (let i = 0; i < primes.length; i++) {
            output = output.concat(`(${primes[i]}${times[i] == 1 ? '' : '**' + times[i]})`)
        }

        return output
    }

console.log(primeFactors(6))
console.log(primeFactors(5))
console.log(primeFactors(7775460))
console.log(primeFactors(7919))
console.log(primeFactors(17*17*93*677))