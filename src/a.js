const totalGrossTonnage = '$11,000'
const totalGrossTonnageAsNumber = 
    parseInt(totalGrossTonnage.replace(/,/g,'').substring(1),10);

console.log(totalGrossTonnageAsNumber)