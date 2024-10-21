import { ChangeEvent, useState } from "react";

type Props = {
	onProductAdd: (newProduct: Product) => void;
	closeProductForm: () => void;
};

export function AddProduct({ onProductAdd, closeProductForm }: Props) {
	const [newProduct, setNewProduct] = useState<Omit<Product, "id">>({
		name: "",
		price: 0,
		stock: 0,
		discounts: [],
	});

	const { name, price, stock } = newProduct;

	function handleChangeProductInput({
		target: { value, name },
	}: ChangeEvent<HTMLInputElement>) {
		setNewProduct((prev) => ({ ...prev, [name]: value }));
	}

	function handleAddProductButton() {
		if (name === "" || price === 0 || stock === 0) {
			return alert("모든 항목을 입력해주세요.");
		}

		onProductAdd({ ...newProduct, id: Date.now().toString() });
		closeProductForm();
	}

	return (
		<div className="bg-white p-4 rounded shadow mb-4">
			<h3 className="text-xl font-semibold mb-2">새 상품 추가</h3>
			<div className="mb-2">
				<label
					htmlFor="productName"
					className="block text-sm font-medium text-gray-700"
				>
					상품명
				</label>
				<input
					id="productName"
					type="text"
					value={name}
					onChange={handleChangeProductInput}
					className="w-full p-2 border rounded"
				/>
			</div>
			<div className="mb-2">
				<label
					htmlFor="productPrice"
					className="block text-sm font-medium text-gray-700"
				>
					가격
				</label>
				<input
					id="productPrice"
					type="number"
					value={price}
					onChange={handleChangeProductInput}
					className="w-full p-2 border rounded"
				/>
			</div>
			<div className="mb-2">
				<label
					htmlFor="productStock"
					className="block text-sm font-medium text-gray-700"
				>
					재고
				</label>
				<input
					id="productStock"
					type="number"
					value={stock}
					onChange={handleChangeProductInput}
					className="w-full p-2 border rounded"
				/>
			</div>
			<button
				onClick={handleAddProductButton}
				className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
			>
				추가
			</button>
		</div>
	);
}
