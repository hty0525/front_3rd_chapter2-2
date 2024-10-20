// useCart.ts
import { useState } from "react";
import { calculateCartTotal, updateCartItemQuantity } from "./utils/cartUtils";

export const useCart = () => {
	const [cart, setCart] = useState<CartItem[]>([]);
	const [selectedCoupon, setSelectedCoupon] = useState<Coupon | null>(null);

	function addToCart(product: Product) {}

	function removeFromCart(productId: string) {
		setCart((prev) =>
			prev.filter((product) => product.product.id !== productId)
		);
	}

	function updateQuantity(productId: string, newQuantity: number) {}

	function applyCoupon(coupon: Coupon) {}

	function calculateTotal() {
		return calculateCartTotal(cart, selectedCoupon);
	}

	return {
		cart,
		addToCart,
		removeFromCart,
		updateQuantity,
		applyCoupon,
		calculateTotal,
		selectedCoupon,
	};
};
