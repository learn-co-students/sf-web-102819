let bank = (() => {
  let balance = 1000;
  return {
    seeBalance: () => balance,
    withdraw: (amt) => balance -= amt,
    deposit: (amt) => balance += amt
  };
})();

console.log(bank);
