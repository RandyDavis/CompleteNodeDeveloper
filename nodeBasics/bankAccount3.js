var accounts = [];

function createAccount(account) {
    accounts.push(account);
    return account;
}

function getAccount(username) {
    var matchedAccount;

    // convert to use for or while loop
    for (var i = 0; i < accounts.length; i++) {
        if (accounts[i].username === username) {
            matchedAccount = accounts[i];
        }
    }

    return matchedAccount;
}

function deposit (account, amount) {
    // only accept number, use typeof
    if (typeof amount === 'number') {
        account.balance += amount;
    } else {
        console.log("Only numbers are acceptable for the deposit amount. Please try again.");
    }
}

function withdraw (account, amount) {
    // only accept number else console log message
    if (typeof amount === 'number') {
        account.balance -= amount;
    } else {
        console.log("Only numbers are acceptable for the withdrawal amount. Please try again.");
    }
}

function getBalance (account) {
    return account.balance;
}


// createBalanceGetter(account)
//      return function () {
//         reference account.balance (return it)
function createBalanceGetter(account) {
    return function () {
        return account.balance;
    }
}

var randy = createAccount({ username: 'Randy', balance: 0});
deposit(randy, 120);
withdraw(randy, 'my string');

var randy2 = getAccount('Randy');
var getRandy2Balance = createBalanceGetter(randy2);

console.log(getRandy2Balance());


//var randysAccount = createAccount({username: 'Randy', balance: 100});
////var greysAccount = createAccount({username: 'Grey', balance: 50});
//console.log(accounts);
//console.log('Randy Balance: ' + getBalance(randysAccount));
////console.log('Grey Balance: ' + getBalance(greysAccount));
//withdraw(randysAccount, 20);
////withdraw(greysAccount, 20);
//console.log('Randy Balance: ' + getBalance(randysAccount));
////console.log('Grey Balance: ' + getBalance(greysAccount));
//deposit(randysAccount, 15);
////deposit(greysAccount, 15);
//console.log('Randy Balance: ' + getBalance(randysAccount));
////console.log('Grey Balance: ' + getBalance(greysAccount));
//console.log('Randy Account: ' + getAccount('Randy'));
////console.log('Grey Account: ' + getAccount('Grey'));

























//var randysAccount = createAccount({
//    username: 'Randy',
//    balance: 675
//});
//
//deposit(randysAccount, 1000);
//console.log(getBalance(randysAccount));
//
//withdraw(randysAccount, 11);
//console.log(getBalance(randysAccount));
//
//var existingAccount = getAccount('Randy');
//console.log(getBalance(randysAccount));
//
//var jensAccount = createAccount({username: 'Jen001', balance: 500});
//
//console.log(accounts);
//
//var existingJenAccount = getAccount('Jen001');
//console.log(existingJenAccount);


