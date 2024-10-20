import { useState } from "react";

export const useCoupons = (initialCoupons: Coupon[]) => {
	const [coupons, setCoupons] = useState<Coupon[]>(initialCoupons);

	function addCoupon(newCoupon: Coupon) {
		setCoupons((prev) => [...prev, newCoupon]);
	}
	return { coupons, addCoupon };
};
