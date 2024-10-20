import { useState } from "react";

import { AddProduct } from "./AddProduct";
import { Products } from "./Products";

type Props = {
	products: Product[];
	onProductAdd: (newProduct: Product) => void;
	onProductUpdate: (updatedProduct: Product) => void;
};

export function ProductManagement({
	products,
	onProductAdd,
	onProductUpdate,
}: Props) {
	const [isOpenNewProductForm, setIsOpenNewProductForm] = useState(false);

	function handleToggleProductAddButton() {
		setIsOpenNewProductForm((prev) => !prev);
	}

	return (
		<div>
			<h2 className="text-2xl font-semibold mb-4">상품 관리</h2>
			<button
				onClick={handleToggleProductAddButton}
				className="bg-green-500 text-white px-4 py-2 rounded mb-4 hover:bg-green-600"
			>
				{isOpenNewProductForm ? "취소" : "새 상품 추가"}
			</button>
			{isOpenNewProductForm && (
				<AddProduct
					onProductAdd={onProductAdd}
					closeProductForm={handleToggleProductAddButton}
				/>
			)}
			<Products products={products} onProductUpdate={onProductUpdate} />
		</div>
	);
}
