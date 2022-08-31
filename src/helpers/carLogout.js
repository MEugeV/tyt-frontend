import axios from 'axios';

export const cartLogout = async (userId, cart, setCart) => {
	let orderId = '';
	try {
		// I look for the id of the order in the cart if it already exists
		console.log('entre al logout, este es el userId');
		console.log(userId);
		orderId = (await axios.get(`/purchases/cart?userId=${userId}`)).data;
		// if it already exists, I delete the items, to leave only the current ones loaded
		if (orderId.length > 0) {
			orderId = orderId[0].id;
			await axios.delete(`/order-items/PurchaseId/${orderId}`);
		} else {
			// if it doesn't exist, I create the purchase order
			orderId = (await axios.post(`/purchases/${userId}`, {})).data.id;
		}
		// in both cases I create the items of the cart without confirming and clean the state when leaving
		await Promise.all(
			cart.map(el =>
				axios.post('/order-items', {
					stockId: el.stockId,
					quantity: el.quantity,
					purchaseId: orderId,
					price: el.price,
					confirmed: false,
				})
			)
		);
		setCart([]);
	} catch (error) {
		alert(error.request.response);
	}
};
