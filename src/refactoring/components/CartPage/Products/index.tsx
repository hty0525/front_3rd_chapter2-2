import { getMaxDiscountRate } from "../../../hooks/utils/cartUtils";

type Props = {
	cart: CartItem[];
	products: Product[];
	addToCart: (product: Product) => void;
};

export function Products({ cart, products, addToCart }: Props) {
	const handleAddCartButton = (product: Product) => () => {
		addToCart(product);
	};

	return (
		<div>
			<h2 className="text-2xl font-semibold mb-4">상품 목록</h2>
			<div className="space-y-2">
				{products.map((product) => {
					const { id, name, price, stock, discounts } = product;

					const targetCartItem = cart.find(
						({ product: cartItem }) => cartItem.id === id
					);

					const remainingStock = stock - (targetCartItem?.quantity || 0);

					const maxDiscountRate = getMaxDiscountRate(discounts) * 100;

					return (
						<div
							key={id}
							data-testid={`product-${id}`}
							className="bg-white p-3 rounded shadow"
						>
							<div className="flex justify-between items-center mb-2">
								<span className="font-semibold">{name}</span>
								<span className="text-gray-600">
									{price.toLocaleString()}원
								</span>
							</div>
							<div className="text-sm text-gray-500 mb-2">
								<span
									className={`font-medium ${
										remainingStock > 0 ? "text-green-600" : "text-red-600"
									}`}
								>
									재고: {remainingStock}개
								</span>
								{discounts.length > 0 && (
									<span className="ml-2 font-medium text-blue-600">
										최대 {maxDiscountRate}% 할인
									</span>
								)}
							</div>
							{discounts.length > 0 && (
								<ul className="list-disc list-inside text-sm text-gray-500 mb-2">
									{discounts.map(({ quantity, rate }, index) => (
										<li key={index}>
											{quantity}개 이상: {(rate * 100).toFixed(0)}% 할인
										</li>
									))}
								</ul>
							)}
							<button
								onClick={handleAddCartButton(product)}
								className={`w-full px-3 py-1 rounded ${
									remainingStock > 0
										? "bg-blue-500 text-white hover:bg-blue-600"
										: "bg-gray-300 text-gray-500 cursor-not-allowed"
								}`}
								disabled={remainingStock <= 0}
							>
								{remainingStock > 0 ? "장바구니에 추가" : "품절"}
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
}
