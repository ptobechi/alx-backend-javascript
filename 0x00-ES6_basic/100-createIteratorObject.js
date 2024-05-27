export default function createIteratorObject(report) {
	let currentDepartmentIndex = 0;
	let currentEmployeeIndex = 0;

	const iterator = {
		next() {
			if (currentDepartmentIndex < Object.keys(report.allEmployees).length) {
				const currentDepartment = Object.keys(report.allEmployees)[currentDepartmentIndex];
				const currentEmployees = report.allEmployees[currentDepartment];

				if (currentEmployeeIndex < currentEmployees.length) {
					const result = { value: currentEmployees[currentEmployeeIndex], done: false };
					currentEmployeeIndex++;

					return result;
				} else {
					currentDepartmentIndex++;
					currentEmployeeIndex = 0;

					return this.next();
				}
			} else {

				return { done: true };
			}
		},
	};

	return iterator;
}

