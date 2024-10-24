import { useCombinedContext } from "../../context/combinedContext";

export const useApplyCoupon = () => {
	const { coupons, selectedCoupon, applyCoupon } = useCombinedContext();

	const applySelectedCoupon = (value: string) => {
		applyCoupon(coupons[parseInt(value)]);
	};
	return { coupons, selectedCoupon, applySelectedCoupon };
};
