import React, { useState } from "react";

type Props = {
	coupons: Coupon[];
	onCouponAdd: (newCoupon: Coupon) => void;
};

export function CouponManagement({ coupons, onCouponAdd }: Props) {
	const [newCoupon, setNewCoupon] = useState<Coupon>({
		name: "",
		code: "",
		discountType: "percentage",
		discountValue: 0,
	});

	const { name, code, discountType, discountValue } = newCoupon;

	function handleChangeCouponInput({
		target: { value, name },
	}: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) {
		const isDiscountValue = name === "discountValue";

		setNewCoupon((prev) => ({
			...prev,
			[name]: isDiscountValue ? Number(value) : value,
		}));
	}

	function handleAddCouponButton() {
		if (!name || !code || !discountValue) {
			return alert("모든 값을 입력해주세요.");
		}
		onCouponAdd(newCoupon);
		setNewCoupon({
			name: "",
			code: "",
			discountType: "percentage",
			discountValue: 0,
		});
	}

	return (
		<div>
			<h2 className="text-2xl font-semibold mb-4">쿠폰 관리</h2>
			<div className="bg-white p-4 rounded shadow">
				<div className="space-y-2 mb-4">
					<input
						type="text"
						placeholder="쿠폰 이름"
						name="name"
						value={name}
						onChange={handleChangeCouponInput}
						className="w-full p-2 border rounded"
					/>
					<input
						type="text"
						placeholder="쿠폰 코드"
						name="code"
						value={code}
						onChange={handleChangeCouponInput}
						className="w-full p-2 border rounded"
					/>
					<div className="flex gap-2">
						<select
							value={discountType}
							name="discountType"
							onChange={handleChangeCouponInput}
							className="w-full p-2 border rounded"
						>
							<option value="amount">금액(원)</option>
							<option value="percentage">할인율(%)</option>
						</select>
						<input
							type="number"
							placeholder="할인 값"
							name="discountValue"
							value={discountValue}
							onChange={handleChangeCouponInput}
							className="w-full p-2 border rounded"
						/>
					</div>
					<button
						onClick={handleAddCouponButton}
						className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
					>
						쿠폰 추가
					</button>
				</div>
				<div>
					<h3 className="text-lg font-semibold mb-2">현재 쿠폰 목록</h3>
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
			</div>
		</div>
	);
}
