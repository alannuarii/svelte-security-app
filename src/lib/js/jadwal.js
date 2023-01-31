export function jadwalPiket(tanggal) {
	const numberOfDays = 365;
	const imran = [0, 'p', 'p', 'p', 'p', 'p', 0];
	const faisal = [0, 'p', 'p', 's', 's', 'm', 'm', 0, 0, 'm'];
	const karter = ['s', 'm', 'm', 0, 0, 'm', 0, 'p', 'p', 's'];
	const jerry = [0, 'm', 0, 'p', 'p', 's', 's', 'm', 'm', 0];
	const ewin = ['p', 's', 's', 'm', 'm', 0, 0, 'm', 0, 'p'];
	const jonly = ['m', 0, 0, 'm', 0, 'p', 'p', 's', 's', 'm'];

	const imranCycle = [];
	const faisalCycle = [];
	const karterCycle = [];
	const jerryCycle = [];
	const ewinCycle = [];
	const jonlyCycle = [];
	const dateArray = [];

	for (let i = 0; i < numberOfDays; i++) {
		imranCycle.push(imran[i % imran.length]);
		faisalCycle.push(faisal[i % faisal.length]);
		karterCycle.push(karter[i % karter.length]);
		jerryCycle.push(jerry[i % jerry.length]);
		ewinCycle.push(ewin[i % ewin.length]);
		jonlyCycle.push(jonly[i % jonly.length]);

		let date = new Date('2023-01-01');
		date.setDate(date.getDate() + i);
		dateArray.push(date);
	}

	//   const targetDate = new Date(tanggal);
	const index = dateArray.findIndex((date) => date.toISOString().substr(0, 10) === tanggal);

	return {
		imran: imranCycle[index],
		faisal: faisalCycle[index],
		karter: karterCycle[index],
		jerry: jerryCycle[index],
		ewin: ewinCycle[index],
		jonly: jonlyCycle[index]
	};
}

// console.log(jadwal('2023-02-24'));
