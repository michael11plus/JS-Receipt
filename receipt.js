/* 
Several Tasks:
Print the receipt into the console.
Calculate the total amount of the purchase.
Get the most expensive item in the receipt.
Calculate the average price per item in the receipt.


*/

let receiptArray = [
    {
        product: 'Apples',
        price: 0.29,
        amount: 4,
    },
    {
        product: 'Bananas',
        price: 0.19,
        amount: 7,
    },
    {
        product: 'Biscuits',
        price: 0.79,
        amount: 2,
    },
    {
        product: 'Cheese',
        price: 1.39,
        amount: 1,
    },
    {
        product: 'Ham',
        price: 1.19,
        amount: 1,
    },
    {
        product: 'Sugar',
        price: 0.89,
        amount: 1,
    },
    {
        product: 'Wine',
        price: 4.49,
        amount: 3,
    },
    {
        product: 'Milk',
        price: 0.65,
        amount: 2,
    },
    {
        product: 'Water',
        price: 0.29,
        amount: 6,
    },
    {
        product: 'Toothpaste',
        price: 1.99,
        amount: 1,
    },
    {
        product: 'Toothbrush',
        price: 2.29,
        amount: 3,
    }
]

function printReceipt() {
    let i = 0;
    while (i < receiptArray.length) {
        console.log('Item: ' + receiptArray[i].product + '\nPrice: $' + receiptArray[i].price + '\nAmount: ' + receiptArray[i].amount + ' pcs');
        console.log('Total Price = $' + (receiptArray[i].price * receiptArray[i].amount).toFixed(2) + '\n ');
        i++;
    }
}

function getTotalPrice() {
    let j = 0;
    let receiptTotal = 0;

    while (j < receiptArray.length) {
        receiptTotal = receiptTotal + (receiptArray[j].price * receiptArray[j].amount);
        j++;
    }

    console.log(`TOTAL PRICE: $${receiptTotal}`);
}

function getMostExpensiveItem() {
    let k = 1;
    let mostExpensiveItem = receiptArray[0].product;
    let highestPrice = receiptArray[0].price;

    while (k < (receiptArray.length)) {
        if (receiptArray[k].price > highestPrice) {
            mostExpensiveItem = receiptArray[k].product;
            highestPrice = receiptArray[k].price;
            k++;
        } else {
            k++;
        }
    }

    console.log(`Most expensive item: ${mostExpensiveItem}. \nPrice: $${highestPrice}`)
}