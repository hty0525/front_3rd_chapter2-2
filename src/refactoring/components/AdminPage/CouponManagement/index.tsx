import { useCouponManagement } from "../../../hooks/CouponManagement";
import {
	Button,
	ContentBox,
	FlexBox,
	Input,
	SectionTitle,
	Select,
	SubSectionTitle,
} from "../../common";

export function CouponManagement() {
	const { coupons, newCoupon, changeNewCoupon, addNewCoupon } =
		useCouponManagement();
	const { discountType, discountValue } = newCoupon;

	function handleChangeCouponInput({
		target: { value, name },
	}: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) {
		changeNewCoupon(name as keyof Coupon, value);
	}

	function handleAddCouponButton() {
		addNewCoupon();
	}

	return (
		<div>
			<SectionTitle className="text-2xl font-semibold mb-4">
				쿠폰 관리
			</SectionTitle>
			<ContentBox>
				<div className="space-y-2 mb-4">
					{Object.keys(newCoupon).map((key) => {
						const _key = key as keyof Coupon;

						if (_key === "discountType" || _key === "discountValue") {
							return null;
						}

						const value = newCoupon[_key];
						const placeholder = _key === "name" ? "쿠폰 이름" : "쿠폰 코드";
						const type = _key === "name" ? "text" : "text";
						return (
							<Input
								key={_key}
								type={type}
								name={_key}
								placeholder={placeholder}
								value={value}
								className="w-full"
								onChange={handleChangeCouponInput}
							/>
						);
					})}

					<FlexBox gap={2}>
						<Select
							value={discountType}
							name="discountType"
							onChange={handleChangeCouponInput}
							className="w-full p-2 border rounded"
						>
							<Select.Option value="amount">금액(원)</Select.Option>
							<Select.Option value="percentage">할인율(%)</Select.Option>
						</Select>
						<input
							type="number"
							placeholder="할인 값"
							name="discountValue"
							value={discountValue}
							onChange={handleChangeCouponInput}
							className="w-full p-2 border rounded"
						/>
					</FlexBox>
					<Button
						onClick={handleAddCouponButton}
						className="w-full"
						styleType="green"
					>
						쿠폰 추가
					</Button>
				</div>
				<div>
					<SubSectionTitle className="text-lg font-semibold mb-2">
						현재 쿠폰 목록
					</SubSectionTitle>
					<div className="space-y-2">
						{coupons.map((coupon, index) => (
							<div
								key={index}
								data-testid={`coupon-${index + 1}`}
								className="bg-gray-100 p-2 rounded"
							>
								{coupon.name} ({coupon.code}):
								{coupon.discountType === "amount"
									? `${coupon.discountValue}원`
									: `${coupon.discountValue}%`}{" "}
								할인
							</div>
						))}
					</div>
				</div>
			</ContentBox>
		</div>
	);
}
