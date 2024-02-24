/**
 * @function checkCashRegister
 * @description This function will take in the price, cash, and cash-in-drawer and return the change due.
 * Also will return the status of the cash-in-drawer :
 * - "INSUFFICIENT_FUNDS" if the cash-in-drawer is less than the change due.
 * - "CLOSED" if the cash-in-drawer is equal to the change due.
 * - "OPEN" if the cash-in-drawer is greater than the change due.
 * @param {Number} price - The price of the item.
 * @param {Number} cash - The cash given to the cashier.
 * @param {Array} cid - The cash-in-drawer.
 * @returns {Object} - The status of the cash-in-drawer and the change due.
 *
 * @example
 * checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
 * // returns {status: "OPEN", change: [["QUARTER", 0.5]]}
 *
 * checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
 * // returns {status: "INSUFFICIENT_FUNDS", change: []}
 *
 * checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
 * // returns {status: "CLOSED", change: [["PENNY", 0.5]]}
 */

const checkCashRegister = (price, cash, cid) => {
  let change = {
    status: "",
    change: [],
  };

  let currency = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };

  let changeDue = cash - price;
  let totalCashInDrawer = 0;

  /* EXPLANATION
    - Iterate through the cash-in-drawer array and sum all the values.
    - If the total cash in drawer is less than the change due, return "INSUFFICIENT_FUNDS".
    - If the total cash in drawer is equal to the change due, return "CLOSED".
    - If the total cash in drawer is greater than the change due, continue to the next step.
    */
  for (let i = 0; i < cid.length; i++) {
    totalCashInDrawer += cid[i][1];
  }

  if (totalCashInDrawer < changeDue) {
    change.status = "INSUFFICIENT_FUNDS";
    return change;
  } else if (totalCashInDrawer === changeDue) {
    change.status = "CLOSED";
    change.change = cid;
    return change;
  } else {
    change.status = "OPEN";
    let changeArr = [];
    for (let i = cid.length - 1; i >= 0; i--) {
      let value = 0;
      while (cid[i][1] > 0 && changeDue >= currency[cid[i][0]]) {
        changeDue -= currency[cid[i][0]];
        changeDue = Math.round(changeDue * 100) / 100;
        cid[i][1] -= currency[cid[i][0]];
        value += currency[cid[i][0]];
      }
      if (value > 0) {
        changeArr.push([cid[i][0], value]);
      }
    }

    if (changeDue > 0) {
      change.status = "INSUFFICIENT_FUNDS";
      change.change = [];
      return change;
    }

    change.change = changeArr;

    return change;
  }
};

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
