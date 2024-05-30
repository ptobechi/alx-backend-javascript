import Currency from './3-currency.js';

class Pricing {
	constructor(amount, currency) {
		this._amount = this._validateAmount(amount);
		this._currency = this._validateCurrency(currency);
	}

	// Validation methods
	_validateAmount(amount) {
		if (typeof amount !== 'number') {
			throw new TypeError('Amount must be a number');
		}
		return amount;
	}

	_validateCurrency(currency) {
		if (!(currency instanceof Currency)) {
			throw new TypeError('Currency must be an instance of Currency');
		}
		return currency;
	}

	// Getter and setter for amount
	get amount() {
		return this._amount;
	}

	set amount(value) {
		this._amount = this._validateAmount(value);
	}

	// Getter and setter for currency
	get currency() {
		return this._currency;
	}

	set currency(value) {
		this._currency = this._validateCurrency(value);
	}

	// Method to display full price
	displayFullPrice() {
		return `${this._amount} ${this._currency.name} (${this._currency.code})`;
	}

	// Static method to convert price
	static convertPrice(amount, conversionRate) {
		if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
			throw new TypeError('Both amount and conversionRate must be numbers');
		}
		return amount * conversionRate;
	}
}

export default Pricing;
