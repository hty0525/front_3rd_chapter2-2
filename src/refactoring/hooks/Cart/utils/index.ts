export const getAppliedDiscountRate = (cartItem: CartItem) => {
	const { product, quantity } = cartItem;
	const { discounts } = product;

	const appliedDiscount = discounts.filter(
		({ quantity: discountQuantity }) => quantity >= discountQuantity
	);

	if (appliedDiscount.length === 0) {
		return 0;
	}

	return Math.max(...appliedDiscount.map(({ rate }) => rate));
};
