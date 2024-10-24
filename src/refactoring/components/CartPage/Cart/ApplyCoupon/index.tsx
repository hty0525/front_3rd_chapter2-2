import { useApplyCoupon } from "../../../../hooks/Cart";
import { ContentBox, SectionTitle, Select } from "../../../common";

export default function ApplyCoupon() {
	const { coupons, selectedCoupon, applySelectedCoupon } = useApplyCoupon();

	function handleChangeCouponTypeSelect({
		target: { value },
	}: React.ChangeEvent<HTMLSelectElement>) {
		applySelectedCoupon(value);
	}

	return (
		<ContentBox className="mt-6 ">
			<SectionTitle className="text-2xl font-semibold mb-2">
				쿠폰 적용
			</SectionTitle>
			<Select
				onChange={handleChangeCouponTypeSelect}
				className="w-full p-2 border rounded mb-2"
			>
				<Select.Option value="">쿠폰 선택</Select.Option>
				{coupons.map(({ code, name, discountType, discountValue }, index) => (
					<Select.Option key={code} value={index}>
						{name} -{" "}
						{discountType === "amount"
							? `${discountValue}원`
							: `${discountValue}%`}
					</Select.Option>
				))}
			</Select>
			{selectedCoupon && (
				<p className="text-green-600">
					적용된 쿠폰: {selectedCoupon.name}(
					{selectedCoupon.discountType === "amount"
						? `${selectedCoupon.discountValue}원`
						: `${selectedCoupon.discountValue}%`}{" "}
					할인)
				</p>
			)}
		</ContentBox>
	);
}
