function getOrderedSales(salesList) {
    let salesWithTotal = [];

    for (let i = 0; i < salesList.length; i++) {
        
        let sale = salesList[i];
        let total = sale.amount * sale.quantity;

        salesWithTotal.push({
            amount: sale.amount,
            quantity: sale.quantity,
            Total: total
        });
    }

    salesWithTotal.sort(function(a, b) {
        return b.Total - a.Total;
    });

    return salesWithTotal;
}

let sales = [
    { amount: 10000, quantity: 10 },
    { amount: 5000, quantity: 20 },
    { amount: 20000, quantity: 5 },
    { amount: 15000, quantity: 3 }
];

let orderedSales = getOrderedSales(sales);

// Output the ordered sales
console.log("Ordered Sales:", orderedSales);

