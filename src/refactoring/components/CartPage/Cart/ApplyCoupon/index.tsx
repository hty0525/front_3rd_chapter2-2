type Props = {
	coupons: Coupon[];
	selectedCoupon: Coupon | null;
	applyCoupon: (coupon: Coupon) => void;
};

export default function ApplyCoupon({
	coupons,
	selectedCoupon,
	applyCoupon,
}: Props) {
	function handleChangeCouponTypeSelect({
		target: { value },
	}: React.ChangeEvent<HTMLSelectElement>) {
		applyCoupon(coupons[parseInt(value)]);
	}

	return (
		<div className="mt-6 bg-white p-4 rounded shadow">
			<h2 className="text-2xl font-semibold mb-2">쿠폰 적용</h2>
			<select
				onChange={handleChangeCouponTypeSelect}
				className="w-full p-2 border rounded mb-2"
			>
				<option value="">쿠폰 선택</option>
				{coupons.map(({ code, name, discountType, discountValue }, index) => (
					<option key={code} value={index}>
						{name} -{" "}
						{discountType === "amount"
							? `${discountValue}원`
							: `${discountValue}%`}
					</option>
				))}
			</select>
			{selectedCoupon && (
				<p className="text-green-600">
					적용된 쿠폰: {selectedCoupon.name}(
					{selectedCoupon.discountType === "amount"
						? `${selectedCoupon.discountValue}원`
						: `${selectedCoupon.discountValue}%`}{" "}
					할인)
				</p>
			)}
		</div>
	);
}
