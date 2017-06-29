var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100]
  }
];

function calculateSalesTax(salesData, taxRates) {
  // 1. Initialize output object
  var results = {};
  // 2. Iterate over input and mutate results for each item
  for(var x = 0; x < salesData.length; x ++){
    var sales = salesData[x]["sales"].reduce(function(a,b){
      return a + b;
    },0);

    if (results[salesData[x].name] === undefined) {
      results[salesData[x].name] = {
        totalSales: sales,
        totalTaxes: sales * taxRates[salesData[x]["province"]]
      };
    }else{
      results[salesData[x].name].totalSales += sales
      results[salesData[x].name].totalTaxes += sales * taxRates[salesData[x]["province"]]
    }
  }
  return results;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
/* Expected Results:
 {
 Telus: {
 totalSales: 1300
 totalTaxes: 144
 },
 Bombardier: {
 totalSales: 800,
 totalTaxes: 40
 }
 }
 */