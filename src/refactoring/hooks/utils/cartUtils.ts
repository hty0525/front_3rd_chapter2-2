export const calculateItemTotal = (item: CartItem) => {
	return 0;
};

export const getMaxApplicableDiscount = (item: CartItem) => {
	return 0;
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
