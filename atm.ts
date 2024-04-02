#! /usr/bin/env node


import inquirer from "inquirer";
//initialize of inquirer code & pin
let myBalance = 100000;
let myPin = 1122;

// print welcome message.
console.log(
  "Welcome to code with|| ^^^G.Rauf Khan^^^ /||--||/ ^^^ATM-machine^^^");

  console.log("NOTE: This program pin is :: 1122 ::");


let pinAnswers = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "Enter your pin code :",
  },
]);

if (pinAnswers.pin === myPin) {
  console.log("Pin is correct:");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      type: "list",
      choices: [
        "Balance Inquiry",
        "withdrawal",
        "Fast withdrawal",
        "Deposit Amount",
        "EXIT",
      ],
    },
  ]);

  if (operationAns.operation === "withdrawal") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "Enter the amount to be withdrawal :",
      },
    ]);
    if (amountAns.amount > myBalance) {
      console.log("Insufficient balance :");
    }
    //-=,+=,*=,
    else {
      myBalance -= amountAns.amount;

      console.log(`Your current balance is:  ${myBalance}`);
    }
  }

  if (operationAns.operation === "Fast withdrawal") {
    let Fast = await inquirer.prompt([
      {
        name: "Fast",
        type: "list",
        choices: ["500", "1000", "2000", "5000", "10000", "20000", "25000"],
        message: "select a transaction operation :",
      },
    ]);
    myBalance -= Fast.Fast;
    console.log(
      `You have successfully withdrawal: ${Fast.Fast}\nyour remaining balance is: ${myBalance}`
    );
  } else if (operationAns.operation === "Balance Inquiry") {
    console.log(`Your new balance is : ${myBalance}`);
  }
  if (operationAns.operation === "Deposit Amount") {
    let Deposit = await inquirer.prompt([
      {
        name: "Amount",
        type: "number",
        message: "Enter the deposit amount  :",
      },
    ]);
    myBalance += Deposit.Amount;
    console.log(`Your new Deposit amount is : ${myBalance}`);
  }
  if (operationAns.operation === "EXIT") {
    console.log("Thank you for using our ATM machine.Goodbye!");
  }
} else {
  console.log("Entre wrong pin number, try again:");
}
