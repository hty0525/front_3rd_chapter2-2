import ApplyCoupon from "./ApplyCoupon";

type Props = {
	cart: CartItem[];
	updateQuantity: (productId: string, quantity: number) => void;
	removeFromCart: (productId: string) => void;
	coupons: Coupon[];
	selectedCoupon: Coupon | null;
	applyCoupon: (coupon: Coupon) => void;
	calculateTotal: () => void;
};

export function Cart({
	cart,
	updateQuantity,
	removeFromCart,
	coupons,
	selectedCoupon,
	applyCoupon,
}: Props) {
	const getAppliedDiscount = (cartItem: CartItem) => {
		const { product, quantity } = cartItem;
		const { discounts } = product;

		const appliedDiscount = discounts.filter(
			({ quantity: discountQuantity }) => quantity >= discountQuantity
		);

		if (appliedDiscount.length === 0) {
			return 0;
		}

		return Math.max(...appliedDiscount.map(({ rate }) => rate));
	};

	function handleUpdateQuantityButton(productId: string, quantity: number) {
		return function () {
			updateQuantity(productId, quantity);
		};
	}

	function handleRemoveCartButton(productId: string) {
		return function () {
			removeFromCart(productId);
		};
	}

	return (
		<div>
			<h2 className="text-2xl font-semibold mb-4">장바구니 내역</h2>
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
								<button
									onClick={handleUpdateQuantityButton(id, quantity - 1)}
									className="bg-gray-300 text-gray-800 px-2 py-1 rounded mr-1 hover:bg-gray-400"
								>
									-
								</button>
								<button
									onClick={handleUpdateQuantityButton(id, quantity + 1)}
									className="bg-gray-300 text-gray-800 px-2 py-1 rounded mr-1 hover:bg-gray-400"
								>
									+
								</button>
								<button
									onClick={handleRemoveCartButton(id)}
									className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
								>
									삭제
								</button>
							</div>
						</div>
					);
				})}
			</div>
			<ApplyCoupon
				coupons={coupons}
				selectedCoupon={selectedCoupon}
				applyCoupon={applyCoupon}
			/>
			{/* 
			<div className="mt-6 bg-white p-4 rounded shadow">
				<h2 className="text-2xl font-semibold mb-2">주문 요약</h2>
				<div className="space-y-1">
					<p>상품 금액: {totalBeforeDiscount.toLocaleString()}원</p>
					<p className="text-green-600">
						할인 금액: {totalDiscount.toLocaleString()}원
					</p>
					<p className="text-xl font-bold">
						최종 결제 금액: {totalAfterDiscount.toLocaleString()}원
					</p>
				</div>
			</div> */}
		</div>
	);
}
