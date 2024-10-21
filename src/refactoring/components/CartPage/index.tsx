import { useCart } from "../../hooks";
import { Cart } from "./Cart";
import { Products } from "./Products";

interface Props {
	products: Product[];
	coupons: Coupon[];
}

export const CartPage = ({ products, coupons }: Props) => {
	const {
		cart,
		addToCart,
		removeFromCart,
		updateQuantity,
		applyCoupon,
		calculateTotal,
		selectedCoupon,
	} = useCart();

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-3xl font-bold mb-6">장바구니</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<Products cart={cart} products={products} addToCart={addToCart} />
				<Cart
					cart={cart}
					updateQuantity={updateQuantity}
					removeFromCart={removeFromCart}
					coupons={coupons}
					applyCoupon={applyCoupon}
					calculateTotal={calculateTotal}
					selectedCoupon={selectedCoupon}
				/>
			</div>
		</div>
	);
};
