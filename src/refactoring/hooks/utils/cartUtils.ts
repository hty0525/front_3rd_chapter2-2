export const calculateItemTotal = (item: CartItem) => {
	return 0;
};

export const getMaxApplicableDiscount = (item: CartItem) => {
	const { product, quantity } = item;

	const discountRates = product.discounts
		.filter(({ quantity: discountQuantity }) => quantity >= discountQuantity)
		.map(({ rate }) => rate);

	if (discountRates.length === 0) {
	return 0;
}

	return Math.max(...discountRates);
};

export const calculateCartTotal = (
	cart: CartItem[],
	selectedCoupon: Coupon | null
) => {
	const totalBeforeDiscount = cart.reduce(
		(acc, { product: { price }, quantity }) => acc + price * quantity,
		0
	);

	const totalAfterDiscount = cart.reduce(
		(acc, { product: { price }, quantity }) => acc + price * quantity,
		0
	);

	const totalDiscount = cart.reduce(
		(acc, { product: { price }, quantity }) => acc + price * quantity,
		0
	);

	return {
		totalBeforeDiscount,
		totalAfterDiscount,
		totalDiscount,
	};
};

export const updateCartItemQuantity = (
	cart: CartItem[],
	productId: string,
	newQuantity: number
): CartItem[] => {
	return [];
};
