import { ChangeEvent, useState } from "react";

type Props = {
	product: Product;
	onProductUpdate: (updatedProduct: Product) => void;
	closeEditProductForm: () => void;
};

export function EditProduct({
	product,
	onProductUpdate,
	closeEditProductForm,
}: Props) {
	const [editingProduct, setEditingProduct] = useState<Product>(product);

	const [newDiscount, setNewDiscount] = useState<Discount>({
		quantity: 0,
		rate: 0,
	});

	const { name, price, stock, discounts } = editingProduct;

	const { quantity, rate } = newDiscount;

	function handleChangeProduct({
		target: { value, name },
	}: ChangeEvent<HTMLInputElement>) {
		setEditingProduct((prev) => ({ ...prev, [name]: value }));
	}

	function handleChangeProductDiscount({
		target: { value, name },
	}: ChangeEvent<HTMLInputElement>) {
		setNewDiscount((prev) => {
			const newValue =
				name === "rate" ? parseInt(value) / 100 : parseInt(value);

			return { ...prev, [name]: newValue };
		});
	}

	function handleClickAddDiscountButton() {
		setEditingProduct((prev) => ({
			...prev,
			discounts: [...prev.discounts, newDiscount],
		}));

		setNewDiscount({ quantity: 0, rate: 0 });
	}

	function handleRemoveDiscount(index: number) {
		return function () {
			setEditingProduct((prev) => ({
				...prev,
				discounts: prev.discounts.filter((_, i) => i !== index),
			}));
		};
	}

	function handleUpdateProductButton() {
		onProductUpdate(editingProduct);
		closeEditProductForm();
	}

	return (
		<div>
			<div className="mb-4">
				<label className="block mb-1">상품명: </label>
				<input
					type="text"
					name="name"
					value={name}
					onChange={handleChangeProduct}
					className="w-full p-2 border rounded"
				/>
			</div>
			<div className="mb-4">
				<label className="block mb-1">가격: </label>
				<input
					type="number"
					name="price"
					value={price}
					onChange={handleChangeProduct}
					className="w-full p-2 border rounded"
				/>
			</div>
			<div className="mb-4">
				<label className="block mb-1">재고: </label>
				<input
					name="stock"
					type="number"
					value={stock}
					onChange={handleChangeProduct}
					className="w-full p-2 border rounded"
				/>
			</div>
			할인 정보 수정 부분
			<div>
				<h4 className="text-lg font-semibold mb-2">할인 정보</h4>
				{discounts.map((discount, index) => (
					<div key={index} className="flex justify-between items-center mb-2">
						<span>
							{discount.quantity}개 이상 구매 시 {discount.rate * 100}% 할인
						</span>
						<button
							onClick={handleRemoveDiscount(index)}
							className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
						>
							삭제
						</button>
					</div>
				))}
				<div className="flex space-x-2">
					<input
						type="number"
						placeholder="수량"
						name="quantity"
						value={isNaN(quantity) ? "" : quantity}
						onChange={handleChangeProductDiscount}
						className="w-1/3 p-2 border rounded"
					/>
					<input
						type="number"
						placeholder="할인율 (%)"
						name="rate"
						value={isNaN(rate) ? "" : rate * 100}
						onChange={handleChangeProductDiscount}
						className="w-1/3 p-2 border rounded"
					/>
					<button
						onClick={handleClickAddDiscountButton}
						className="w-1/3 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
					>
						할인 추가
					</button>
				</div>
			</div>
			<button
				onClick={handleUpdateProductButton}
				className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 mt-2"
			>
				수정 완료
			</button>
		</div>
	);
}
