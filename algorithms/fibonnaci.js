function printFibonnaci() {
    var previous = 0;
    var last = 1;
    var next;
    var items = [previous, last];
    while(last <= 50) {
        next = last + previous;
        previous = last;
        last = next;

        items.push(next);
    }
    console.log(items);
}

function printFibonnaciWithRecursion(items, limit) {
    if (items.length == 0) {
        items = new Array(0, 1);
    }
    const size = items.length;
    const previous = items[size - 2];
    const last = items[size - 1];
    const next = previous + last;
    items.push(next);

    if(next <= limit)
        return printFibonnaciWithRecursion(items, limit);
    return items;
}

const items = printFibonnaciWithRecursion(new Array(), 50);
console.log(items);