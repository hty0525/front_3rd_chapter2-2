import { useCartComponent } from "../../../hooks/Cart";
import { getAppliedDiscount } from "../../../hooks/Cart/utils";
import { Button, ContentBox, SectionTitle } from "../../common";
import ApplyCoupon from "./ApplyCoupon";

export function Cart() {
	const { cart, calculateTotal, changeQuantity, removeSelectedFromCart } =
		useCartComponent();
	const { totalBeforeDiscount, totalDiscount, totalAfterDiscount } =
		calculateTotal;

	function handleUpdateQuantityButton(productId: string, quantity: number) {
		return function () {
			changeQuantity(productId, quantity);
		};
	}

	function handleRemoveCartButton(productId: string) {
		return function () {
			removeSelectedFromCart(productId);
		};
	}

	return (
		<div>
			<SectionTitle className="text-2xl font-semibold mb-4">
				장바구니 내역
			</SectionTitle>
			<div className="space-y-2">
				{cart.map((item) => {
					const { product, quantity } = item;
					const { name, price, id } = product;

					const appliedDiscount = getAppliedDiscount(item);
					return (
						<div
							key={id}
							className="flex justify-between items-center bg-white p-3 rounded shadow"
						>
							<div>
								<span className="font-semibold">{name}</span>
								<br />
								<span className="text-sm text-gray-600">
									{price}원 x {quantity}
									{appliedDiscount > 0 && (
										<span className="text-green-600 ml-1">
											({(appliedDiscount * 100).toFixed(0)}% 할인 적용)
										</span>
									)}
								</span>
							</div>
							<div>
								<Button
									onClick={handleUpdateQuantityButton(id, quantity - 1)}
									className="bg-gray-300 text-gray-800 hover:bg-gray-400"
								>
									-
								</Button>
								<Button
									onClick={handleUpdateQuantityButton(id, quantity + 1)}
									className="bg-gray-300 text-gray-800 hover:bg-gray-400"
								>
									+
								</Button>
								<Button onClick={handleRemoveCartButton(id)} styleType="red">
									삭제
								</Button>
							</div>
						</div>
					);
				})}
			</div>
			<ApplyCoupon />

			<ContentBox className="mt-6 ">
				<SectionTitle className="text-2xl font-semibold mb-2">
					주문 요약
				</SectionTitle>
				<div className="space-y-1">
					<p>상품 금액: {totalBeforeDiscount.toLocaleString()}원</p>
					<p className="text-green-600">
						할인 금액: {totalDiscount.toLocaleString()}원
					</p>
					<p className="text-xl font-bold">
						최종 결제 금액: {totalAfterDiscount.toLocaleString()}원
					</p>
				</div>
			</ContentBox>
		</div>
	);
}
