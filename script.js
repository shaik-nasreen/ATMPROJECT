// function authenticate() {
//     const atmNumber = document.getElementById("atmNumber").value;
//     const pin = document.getElementById("pin").value;

//     if (atmNumber === "12345" && pin === "123") {
//         document.getElementById("message").innerText = "Login successful!";
        
//         // Hide login form
//         document.getElementById("login-form").style.display = "none";
        
//         // Show ATM actions
//         document.getElementById("atm-actions").style.display = "block";
//     } else {
//         document.getElementById("message").innerText = "Incorrect ATM Number or PIN!";
//     }
// }

// let balance=0;
// function viewBalance() {
//     alert(`Your Account Balance: ${balance}`);
// }

// function withdraw() {
//     let amount = prompt("Enter amount to withdraw:");
//     if(balance>=amount) {
//         balance-=amount;
//         alert(`You have withdrawn $${amount}`);
//     } else {
//         alert("Insufficient funds!");
//     }
// }

// function deposit() {
//     let amount = prompt("Enter amount to deposit:");
//     balance+=amount;
//     alert(`You have deposited $${amount}`);
// }

// function miniStatement() {

//     alert("Mini Statement:\n - Withdrawn: $500\n - Deposited: $1000");
// }

// function logout() {
//     // Show login form again
//     document.getElementById("login-form").style.display = "block";
    
//     // Hide ATM actions
//     document.getElementById("atm-actions").style.display = "none";

//     // Reset login inputs
//     document.getElementById("atmNumber").value = "";
//     document.getElementById("pin").value = "";

//     document.getElementById("message").innerText = "Welcome! Please enter your ATM details.";
// }
let balance = 0;
let transactions = []; // Array to store transaction history

function authenticate() {
    const atmNumber = document.getElementById("atmNumber").value;
    const pin = document.getElementById("pin").value;

    if (atmNumber === "12345" && pin === "123") {
        document.getElementById("message").innerText = "Login successful!";
        
        // Hide login form
        document.getElementById("login-form").style.display = "none";
        
        // Show ATM actions
        document.getElementById("atm-actions").style.display = "block";
    } else {
        document.getElementById("message").innerText = "Incorrect ATM Number or PIN!";
    }
}

function viewBalance() {
    alert(`Your Account Balance: $${balance}`);
}

function withdraw() {
    let amount = parseFloat(prompt("Enter amount to withdraw:"));
    
    if (isNaN(amount) || amount <= 0) {
        alert("Invalid amount!");
        return;
    }

    if (balance >= amount) {
        balance -= amount;
        transactions.push(`Withdrawn: -$${amount}`);
        alert(`You have withdrawn $${amount}`);
    } else {
        alert("Insufficient funds!");
    }
}

function deposit() {
    let amount = parseFloat(prompt("Enter amount to deposit:"));

    if (isNaN(amount) || amount <= 0) {
        alert("Invalid amount!");
        return;
    }

    balance += amount;
    transactions.push(`Deposited: +$${amount}`);
    alert(`You have deposited $${amount}`);
}

function miniStatement() {
    if (transactions.length === 0) {
        alert("No transactions yet.");
        return;
    }

    let statement = "Mini Statement:\n" + transactions.join("\n");
    alert(statement);
}

function logout() {
    // Show login form again
    document.getElementById("login-form").style.display = "block";
    
    // Hide ATM actions
    document.getElementById("atm-actions").style.display = "none";

    // Reset login inputs
    document.getElementById("atmNumber").value = "";
    document.getElementById("pin").value = "";

    document.getElementById("message").innerText = "Welcome! Please enter your ATM details.";
}
