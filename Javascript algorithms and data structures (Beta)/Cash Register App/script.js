let price = 3.26; // default price of the product
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

// to generate a random price for the product between 3.26 and 19.5
price = Math.random() > 0.5 ? 3.26 : 19.5;

/**
 * @function animateChangeDue
 * @description This function will animate the change due. Util function to animate the change due.
 * @param {HTMLElement} changeDue - The change due element.
 * @param {Number} duration - The duration of the animation.
 * @param {Number} setDuration - The duration during a timeout.
 * @returns {void}
 */

const animateChangeDue = (changeDue, duration = 600, setDuration = 3000) => {
  changeDue.style.opacity = 1;
  changeDue.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: duration,
  });

  setTimeout(() => {
    changeDue.style.opacity = 0;
    changeDue.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: duration,
    });
  }, setDuration);


};

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

document.querySelector(".cashier-drawer-change").innerHTML = `
  <p class="change-title"><strong>Change in drawer:</strong></p>
  ${cid
    .map((item) => {
      return `<p>${item[0]}: $${item[1]}</p>`;
    })
    .join("")}
`;

document.getElementById("price").innerHTML = `Total: $${price}`;

document.getElementById("cashier-form").onsubmit = (e) => {
  e.preventDefault();
  const cash = parseFloat(document.getElementById("cash").value);
  const changeDue = document.getElementById("change-due");

  if (isNaN(cash) || cash === "") {
    alert("Please enter a valid number");
    return;
  }

  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  if (cash === price) {
    changeDue.innerHTML = `<p>
    No change due - customer paid with exact cash
   </p>`;

    animateChangeDue(changeDue);
  } else if (price === 3.26 || price === 19.5) {
    let change = checkCashRegister(price, cash, cid);
    changeDue.innerHTML = `
      <span>
        Status: ${change.status} </span>
        ${change.change
          .map((item) => {
            return `<span>${item[0]}: $${item[1]}</span>`;
          })
          .join("")}
    `;
  }
};
