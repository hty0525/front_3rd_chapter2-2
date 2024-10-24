import { useState } from "react";

export type CouponStore = CouponState & CouponAction;

type CouponState = {
	coupons: Coupon[];
};

type CouponAction = {
	addCoupon: (newCoupon: Coupon) => void;
};

export const useCoupons = (initialCoupons: Coupon[]): CouponStore => {
	const [coupons, setCoupons] = useState<Coupon[]>(initialCoupons);

	function addCoupon(newCoupon: Coupon) {
		setCoupons((prev) => [...prev, newCoupon]);
	}
	return { coupons, addCoupon };
};
