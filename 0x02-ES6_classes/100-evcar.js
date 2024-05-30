import Car from './10-car.js';

const _range = Symbol('range');

class EVCar extends Car {
	constructor(brand, motor, color, range) {
		super(brand, motor, color);
		this[_range] = range;
	}

	get range() {
		return this[_range];
	}

	cloneCar() {
		const { [_brand]: brand, [_motor]: motor, [_color]: color } = this;
		return new Car(brand, motor, color);
	}
}

export default EVCar;
