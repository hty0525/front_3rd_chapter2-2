import { useCombinedContext } from "../../../context/combinedContext";
import { getMaxDiscountRate } from "../../../hooks/utils/cartUtils";
import { Button, ContentBox, FlexBox, SectionTitle } from "../../common";

export function Products() {
	const { products, cart, addToCart } = useCombinedContext();
	const handleAddCartButton = (product: Product) => () => {
		addToCart(product);
	};

	return (
		<div>
			<SectionTitle className="text-2xl font-semibold mb-4">
				상품 목록
			</SectionTitle>
			<div className="space-y-2">
				{products.map((product) => {
					const { id, name, price, stock, discounts } = product;

					const targetCartItem = cart.find(
						({ product: cartItem }) => cartItem.id === id
					);

					const remainingStock = stock - (targetCartItem?.quantity || 0);

					const maxDiscountRate = getMaxDiscountRate(discounts) * 100;

					return (
						<ContentBox key={id} data-testid={`product-${id}`}>
							<FlexBox align="center" justify="between" className="mb-2">
								<span className="font-semibold">{name}</span>
								<span className="text-gray-600">
									{price.toLocaleString()}원
								</span>
							</FlexBox>
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
							<Button
								onClick={handleAddCartButton(product)}
								styleType={remainingStock > 0 ? "blue" : "gray"}
								disabled={remainingStock <= 0}
							>
								{remainingStock > 0 ? "장바구니에 추가" : "품절"}
							</Button>
						</ContentBox>
					);
				})}
			</div>
		</div>
	);
}
