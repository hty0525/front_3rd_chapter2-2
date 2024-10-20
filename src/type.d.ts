interface Product {
	id: string;
	name: string;
	price: number;
	stock: number;
	discounts: Discount[];
}

interface Discount {
	quantity: number;
	rate: number;
}

interface CartItem {
	product: Product;
	quantity: number;
}

interface Coupon {
	name: string;
	code: string;
	discountType: "amount" | "percentage";
	discountValue: number;
}
