const CC = require("currency-converter-lt");

let fromCurrency = "USD"; // US Dollars

let toCurrency = "INR"; // Indian Ruppee

let amountToConvert = 1;

let currencyConverter = new CC(
	{
		from: fromCurrency,
		to: toCurrency,
		amount: amountToConvert
	}
);

currencyConverter.convert().then((response)=>{
	console.log(amountToConvert + " " + fromCurrency + " is equal to " + 
		response + " " + toCurrency);
});