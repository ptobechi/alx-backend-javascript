class Currency {
	constructor(code, name) {
		this._code = this._validateCode(code);
		this._name = this._validateName(name);
	}

	// Validation methods
	_validateCode(code) {
		if (typeof code !== 'string') {
			throw new TypeError('Code must be a string');
		}
		return code;
	}

	_validateName(name) {
		if (typeof name !== 'string') {
			throw new TypeError('Name must be a string');
		}
		return name;
	}

	// Getter and setter for code
	get code() {
		return this._code;
	}

	set code(value) {
		this._code = this._validateCode(value);
	}

	// Getter and setter for name
	get name() {
		return this._name;
	}

	set name(value) {
		this._name = this._validateName(value);
	}

	// Method to display full currency
	displayFullCurrency() {
		return `${this._name} (${this._code})`;
	}
}

export default Currency;
