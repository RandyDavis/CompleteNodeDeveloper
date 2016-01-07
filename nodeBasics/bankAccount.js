var account = {
    balance: 0
};

// deposit
function deposit (account, amount) {
    account.balance += amount;
    return console.log(account.balance);
}

// withdraw
function withdraw (account, amount) {
    account.balance -= amount;

    return console.log(account.balance);
}

// getBalance
function getBalance (account) {
    return console.log(account.balance);
}

deposit(account, 100);
withdraw(account, 50);
getBalance(account);