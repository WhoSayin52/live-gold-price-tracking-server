const eventSource = new EventSource('/live')

const livePrice = document.getElementById('price-display');
const liveStatus = document.getElementById('connection-status');

eventSource.onmessage = (event) => {
	const price = event.data;
	console.log(price, event)
	livePrice.textContent = ` ${price}`;
	liveStatus.textContent = 'Live Price 🟢'
}

eventSource.onerror = () => {
	liveStatus.textContent = 'Live Price 🔴'
}
