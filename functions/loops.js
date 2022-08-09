function loopFor() {
    for (var i = 10; i >= 0; i--) {
        console.log(i);
    }
}

function loopWhile() {
    var i = 10;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}

function loopDoWhile() {
    var i = 10;
    do {
        console.log(i);
        i--;
    } while (i >= 0);
}

// for...in iterates over property names
function loopForIn() {
    const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reverse();
    for(const i in items) {
        console.log(i);
    }
}

// for...of iterates over property values
function loopForOf() {
    const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reverse();
    for(const i of items) {
        console.log(i);
    }
}

// loopFor();
// loopWhile();
// loopDoWhile();
loopForIn();
loopForOf();