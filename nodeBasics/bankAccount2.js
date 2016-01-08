var accounts = [];

// Account Object - balance, username

// createAccount(account)
// push onto accounts array
// return account

function createAccount(account) {
    accounts.push(account);
    return account;
}

// getAccount(username)
// find matching account using forEach
function getAccount(username) {
    var matchedAccount;

    accounts.forEach(function (account) {
        if (account.username === username) {
            matchedAccount = account;
        }
    });

    return matchedAccount;
}


// deposit
function deposit (account, amount) {
    account.balance += amount;
}

// withdraw
function withdraw (account, amount) {
    account.balance -= amount;
}

// getBalance
function getBalance (account) {
    return account.balance;
}


var randysAccount = createAccount({
    username: 'Randy',
    balance: 675
});

deposit(randysAccount, 1000);
console.log(getBalance(randysAccount));

withdraw(randysAccount, 11);
console.log(getBalance(randysAccount));

var existingAccount = getAccount('Randy');
console.log(getBalance(randysAccount));

var jensAccount = createAccount({username: 'Jen001', balance: 500});

console.log(accounts);

var existingJenAccount = getAccount('Jen001');
console.log(existingJenAccount);


