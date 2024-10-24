import { useCombinedContext } from "../../context/combinedContext";

export const useCartComponent = () => {
	const { cart, calculateTotal, updateQuantity, removeFromCart } =
		useCombinedContext();

	function changeQuantity(id: string, quantity: number) {
		updateQuantity(id, quantity);
	}

	function removeSelectedFromCart(id: string) {
		removeFromCart(id);
	}

	return { cart, calculateTotal, changeQuantity, removeSelectedFromCart };
};
