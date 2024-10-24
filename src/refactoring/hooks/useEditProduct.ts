import { useState } from "react";
import { useCombinedContext } from "../context/combinedContext";

export const useEditProduct = (product: Product) => {
	const { updateProduct } = useCombinedContext();

	const [editingProduct, setEditingProduct] = useState<Product>(product);
	const [newDiscount, setNewDiscount] = useState<Discount>({
		quantity: 0,
		rate: 0,
	});

	function changeEditingProduct(key: keyof Product, value: string | number) {
		const isPriceOrStock = key === "price" || key === "stock";
		setEditingProduct((prev) => ({
			...prev,
			[key]: isPriceOrStock ? Number(value) : value,
		}));
	}

	function changeNewDiscount(key: keyof Discount, value: number) {
		const isRate = key === "rate";
		setNewDiscount((prev) => ({
			...prev,
			[key]: isRate ? value / 100 : value,
		}));
	}

	function removeSelectedDiscount(index: number) {
		setEditingProduct((prev) => ({
			...prev,
			discounts: prev.discounts.filter((_, i) => i !== index),
		}));
	}

	function addProductNewDiscount() {
		setEditingProduct((prev) => ({
			...prev,
			discounts: [...prev.discounts, newDiscount],
		}));

		setNewDiscount({ quantity: 0, rate: 0 });
	}

	function updateSelectedProduct() {
		const { name, price, stock } = editingProduct;
		if (name === "" || price === 0 || stock === 0) {
			alert("모든 항목을 입력해주세요.");
			return false;
		}

		updateProduct(editingProduct);
		return true;
	}

	return {
		editingProduct,
		newDiscount,
		changeEditingProduct,
		changeNewDiscount,
		addProductNewDiscount,
		removeSelectedDiscount,
		updateSelectedProduct,
	};
};
