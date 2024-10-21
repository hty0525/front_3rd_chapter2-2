export const calculateItemTotal = (item: CartItem, isDiscount = true) => {
	const {
		product: { price },
		quantity,
	} = item;

	const discountRate = getMaxApplicableDiscount(item, isDiscount);

	return price * quantity * (1 - discountRate);
};

export const getMaxApplicableDiscount = (item: CartItem, isDiscount = true) => {
	if (!isDiscount) {
		return 0;
	}
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
		(acc, item) => acc + calculateItemTotal(item, false),
		0
	);

	const totalAfterDiscount = applyCoupon(
		selectedCoupon,
		cart.reduce((acc, item) => acc + calculateItemTotal(item), 0)
	);

	const totalDiscount = totalBeforeDiscount - totalAfterDiscount;

	return {
		totalBeforeDiscount,
		totalAfterDiscount,
		totalDiscount,
	};
};

const applyCoupon = (selectedCoupon: Coupon | null, totalAmount: number) => {
	if (!selectedCoupon) {
		return totalAmount;
	}
	const { discountType, discountValue } = selectedCoupon;

	if (discountType === "amount") {
		return totalAmount - discountValue;
	} else {
		return totalAmount * (1 - discountValue / 100);
	}
};

export const updateCartItemQuantity = (
	cart: CartItem[],
	productId: string,
	newQuantity: number
): CartItem[] => {
	const updatedCart = cart
		.map((item) => {
			const { product } = item;

			if (product.id === productId) {
				if (newQuantity > product.stock) {
					return { ...item, quantity: item.product.stock };
				}
				return { ...item, quantity: newQuantity };
			}
			return item;
		})
		.filter(({ quantity }) => Boolean(quantity));

	return updatedCart;
};

export const getMaxDiscountRate = (discounts: Discount[]) => {
	if (discounts.length === 0) {
		return 0;
	}
	return Math.max(...discounts.map(({ rate }) => rate));
};
