class Account {
    constructor(customerId, balance, ...transfers) {
        this.customerId = customerId;
        this.balance = balance;
        this.transfers = transfers;
    }

    // static
    static displayName = "Banco XPTO SA";
    static code() {
        return "0052";
    }


    // Getter
    get totalBalance() {
        return this.balance;
    }

    // Method
    getCustomerId() {
        return this.customerId;
    }

    // Method
    *getTransfers() {
        for (const transfer of this.transfers) {
            yield transfer;
        }
    }
}

const firstAccount = new Account(1, 150.99, 10.0, 140.99);
console.log(`Customer ID: ${firstAccount.getCustomerId()}`);
console.log(`Balance: ${firstAccount.totalBalance}`);
console.log(`Transfers: ${firstAccount.transfers}`);
console.log(`Display Name (class): ${Account.displayName}`);
console.log(`Code (class): ${Account.code()}`);