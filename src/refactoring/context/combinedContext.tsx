import { createContext, useContext } from "react";
import {
	CartStore,
	CouponStore,
	ProductStore,
	useCart,
	useCoupons,
	useProducts,
} from "../hooks";

const CombinedContext = createContext<
	(CartStore & CouponStore & ProductStore) | null
>(null);

export const useCombinedContext = () => {
	const context = useContext(CombinedContext);
	if (!context) {
		throw new Error("CombinedContext를 찾을 수 없습니다.");
	}
	return context;
};

type Props = {
	children: React.ReactNode;
};

export function CombinedContextProvider({ children }: Props) {
	const cart = useCart();
	const products = useProducts(initialProducts);
	const coupons = useCoupons(initialCoupons);

	const value = { ...cart, ...products, ...coupons };
	return (
		<CombinedContext.Provider value={value}>
			{children}
		</CombinedContext.Provider>
	);
}

const initialProducts: Product[] = [
	{
		id: "p1",
		name: "상품1",
		price: 10000,
		stock: 20,
		discounts: [{ quantity: 10, rate: 0.1 }],
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
