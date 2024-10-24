import { useState } from "react";

import { Button, SectionTitle } from "../../common";
import { AddProduct } from "./AddProduct";
import { Products } from "./Products";

export function ProductManagement() {
	const [isOpenNewProductForm, setIsOpenNewProductForm] = useState(false);

	function handleToggleProductAddButton() {
		setIsOpenNewProductForm((prev) => !prev);
	}

	return (
		<div>
			<SectionTitle className="mb-4">상품 관리</SectionTitle>
			<Button
				onClick={handleToggleProductAddButton}
				styleType="green"
				className="mb-4"
			>
				{isOpenNewProductForm ? "취소" : "새 상품 추가"}
			</Button>
			{isOpenNewProductForm && (
				<AddProduct closeProductForm={handleToggleProductAddButton} />
			)}
			<Products />
		</div>
	);
}
