import { useState } from "react";

import { Nav, AdminPage, CartPage } from "./components";

import { CombinedContextProvider } from "./context/combinedContext";
import { useCoupons, useProducts } from "./hooks";
import { RootLayout, Layout } from "./components/layouts";

const initialProducts: Product[] = [
	{
		id: "p1",
		name: "상품1",
		price: 10000,
		stock: 20,
		discounts: [
			{ quantity: 10, rate: 0.1 },
			{ quantity: 20, rate: 0.2 },
		],
	},
	{
		id: "p2",
		name: "상품2",
		price: 20000,
		stock: 20,
		discounts: [{ quantity: 10, rate: 0.15 }],
	},
	{
		id: "p3",
		name: "상품3",
		price: 30000,
		stock: 20,
		discounts: [{ quantity: 10, rate: 0.2 }],
	},
];

const initialCoupons: Coupon[] = [
	{
		name: "5000원 할인 쿠폰",
		code: "AMOUNT5000",
		discountType: "amount",
		discountValue: 5000,
	},
	{
		name: "10% 할인 쿠폰",
		code: "PERCENT10",
		discountType: "percentage",
		discountValue: 10,
	},
];

const App = () => {
	const { products, updateProduct, addProduct } = useProducts(initialProducts);
	const { coupons, addCoupon } = useCoupons(initialCoupons);
	const [isAdmin, setIsAdmin] = useState(!false);

	const handleClickToggleAdminButton = () => {
		setIsAdmin((prev) => !prev);
	};

	return (
		<CombinedContextProvider>
			<RootLayout>
				<Nav
					isAdmin={isAdmin}
					handleClickToggleAdminButton={handleClickToggleAdminButton}
				/>
				<Layout>
					{isAdmin ? (
						<AdminPage
							products={products}
							coupons={coupons}
							onProductUpdate={updateProduct}
							onProductAdd={addProduct}
							onCouponAdd={addCoupon}
						/>
					) : (
						<CartPage products={products} coupons={coupons} />
					)}
				</Layout>
			</RootLayout>
		</CombinedContextProvider>
	);
};

export default App;
