const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function getMonthName(numberMonth) {
    numberMonth = numberMonth - 1;
    const month = months[numberMonth];

    if (!month)
        throw new Error('Invalid month');

    return month;
}

try {
    const result = getMonthName(13);
    console.log(result);
} catch(error) {
    console.log(error.name);
    console.log(error.message);
    throw error;
}