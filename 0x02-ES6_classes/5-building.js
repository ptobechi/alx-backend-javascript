class Building {
	constructor(sqft) {
		if (new.target === Building) {
			throw new TypeError('Cannot construct Building instances directly');
		}
		this._sqft = this._validateSqft(sqft);
	}

	// Validation method
	_validateSqft(sqft) {
		if (typeof sqft !== 'number') {
			throw new TypeError('sqft must be a number');
		}
		return sqft;
	}

	// Getter for sqft
	get sqft() {
		return this._sqft;
	}

	// Abstract method check
	evacuationWarningMessage() {
		throw new Error('Class extending Building must override evacuationWarningMessage');
	}
}

export default Building;
