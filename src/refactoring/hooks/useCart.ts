// useCart.ts
import { useState } from "react";
import { calculateCartTotal, updateCartItemQuantity } from "./utils/cartUtils";

export type CartStore = CartState & CartAction;

type CartState = {
	cart: CartItem[];
	selectedCoupon: Coupon | null;
	calculateTotal: {
		totalBeforeDiscount: number;
		totalAfterDiscount: number;
		totalDiscount: number;
	};
};

type CartAction = {
	addToCart: (product: Product) => void;
	removeFromCart: (productId: string) => void;
	updateQuantity: (productId: string, newQuantity: number) => void;
	applyCoupon: (coupon: Coupon) => void;
};

export const useCart = (): CartStore => {
	const [cart, setCart] = useState<CartItem[]>([]);
	const [selectedCoupon, setSelectedCoupon] = useState<Coupon | null>(null);

	const calculateTotal = calculateCartTotal(cart, selectedCoupon);

	function addToCart(product: Product) {
		setCart((prev) => {
			const existedItem = prev.find((item) => item.product.id === product.id);
			if (existedItem) {
				return updateCartItemQuantity(
					prev,
					product.id,
					existedItem.quantity + 1
				);
			}
			return [...prev, { product, quantity: 1 }];
		});
	}

	function removeFromCart(productId: string) {
		setCart((prev) =>
			prev.filter((product) => product.product.id !== productId)
		);
	}

	function updateQuantity(productId: string, newQuantity: number) {
		setCart((prev) => updateCartItemQuantity(prev, productId, newQuantity));
	}

	function applyCoupon(coupon: Coupon) {
		setSelectedCoupon(coupon);
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
