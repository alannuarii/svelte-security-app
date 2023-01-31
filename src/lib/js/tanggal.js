export function waktu(tanggal){
	const date = new Date(tanggal)
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	const result = date.toLocaleDateString('id-ID', options)
	return result
}
