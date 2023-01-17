export function waktu(tanggal) {
	const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
	const months = [
		'Januari',
		'Februari',
		'Maret',
		'April',
		'Mei',
		'Juni',
		'Juli',
		'Agustus',
		'September',
		'Oktober',
		'November',
		'Desember'
	];
	const day = days[new Date(tanggal).getDay()];
	const date = tanggal.slice(8);
	const month = months[new Date(tanggal).getMonth()];
	const year = tanggal.slice(0, 4);

	return `${day}, ${date} ${month} ${year}`;
}
