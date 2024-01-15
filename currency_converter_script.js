const fromCurrencySelect = document.getElementById("fromCurrency");
const toCurrencySelect = document.getElementById("toCurrency");
const amountInput = document.getElementById("amount");
const convertedAmountInput = document.getElementById("convertedAmount");
const exchangeRateInput = document.getElementById("exchangeRate");
const calculationTimeInput = document.getElementById("calculationTime");
const errorMessage = document.getElementById("errorMessage");

const defaultSourceCurrency = "gbp";
const defaultDestinationCurrency = "inr";
const defaultSourceValue = 1;
const maxSourceValue = 100000;

fetch(`https://www.floatrates.com/daily/nad.json`)
  .then((response) => response.json())
  .then((data) => {
    const currencies = Object.keys(data);

    currencies.forEach((currency) => {
      const option1 = document.createElement("option");
      option1.text = `${currency} (${data[currency].name})`;
      option1.value = currency;
      fromCurrencySelect.add(option1);

      const option2 = document.createElement("option");
      option2.text = `${currency} (${data[currency].name})`;
      option2.value = currency;
      toCurrencySelect.add(option2);
    });

    setDefaultValues();
  })
  .catch((error) => {
    console.error("Error fetching currency data:", error);
  });

function setDefaultValues() {
  fromCurrencySelect.value = defaultSourceCurrency;
  toCurrencySelect.value = defaultDestinationCurrency;
  amountInput.value = defaultSourceValue;
}

function getCurrentTimestamp() {
  const now = new Date();
  return `${now.toUTCString()} (GMT) / ${now.toLocaleString("en-GB")} (UK)`;
}

function convert() {
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;
  const amount = parseFloat(amountInput.value);

  if (amount <= 0 || isNaN(amount)) {
    errorMessage.textContent = "Please enter a valid amount.";
    errorMessage.style.display = "block";
    return;
  } else if (amount > maxSourceValue) {
    errorMessage.textContent = `Maximum value allowed is ${maxSourceValue}.`;
    errorMessage.style.display = "block";
    return;
  } else {
    errorMessage.style.display = "none";
  }

  fetch(`https://www.floatrates.com/daily/${fromCurrency}.json`)
    .then((response) => response.json())
    .then((data) => {
      const exchangeRate = data[toCurrency].rate;
      const calculationTime = getCurrentTimestamp();

      const convertedAmount = amount * exchangeRate;

      exchangeRateInput.value = `1 ${fromCurrency} = ${exchangeRate.toFixed(
        5
      )} ${toCurrency}`;
      calculationTimeInput.value = calculationTime;
      convertedAmountInput.value = `${amount.toFixed(
        2
      )} ${fromCurrency} = ${convertedAmount.toFixed(3)} ${toCurrency}`;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
