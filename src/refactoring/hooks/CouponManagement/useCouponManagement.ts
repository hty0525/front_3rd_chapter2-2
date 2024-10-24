import { useState } from "react";
import { useCombinedContext } from "../../context/combinedContext";

export function useCouponManagement() {
	const { coupons, addCoupon } = useCombinedContext();
	const [newCoupon, setNewCoupon] = useState<Coupon>({
		name: "",
		code: "",
		discountType: "percentage",
		discountValue: 0,
	});

	function changeNewCoupon(key: keyof Coupon, value: string | number) {
		const isDiscountValue = key === "discountValue";
		setNewCoupon((prev) => ({
			...prev,
			[key]: isDiscountValue ? Number(value) : value,
		}));
	}

	function addNewCoupon() {
		const { name, code, discountValue } = newCoupon;
		if (!name || !code || !discountValue) {
			return alert("모든 값을 입력해주세요.");
		}

		addCoupon(newCoupon);

		setNewCoupon({
			name: "",
			code: "",
			discountType: "percentage",
			discountValue: 0,
		});
	}

	return { coupons, newCoupon, changeNewCoupon, addNewCoupon };
}
