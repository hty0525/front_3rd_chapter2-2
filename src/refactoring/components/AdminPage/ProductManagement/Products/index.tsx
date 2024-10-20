import { useState } from "react";
import { EditProduct } from "./EditProduct";

type Props = {
	products: Product[];
	onProductUpdate: (updatedProduct: Product) => void;
};

export function Products({ products, onProductUpdate }: Props) {
	const [openProductIds, setOpenProductIds] = useState<Set<string>>(new Set());

	const [selectedEditProduct, setSelectedEditProduct] =
		useState<Product | null>(null);

	function handleClickEditButton(product: Product) {
		return function () {
			setSelectedEditProduct(product);
		};
	}

	function closeEditProductForm() {
		setSelectedEditProduct(null);
	}

	function handleToggleDetailButton(productId: string) {
		setOpenProductIds((prev) => {
			const newSet = new Set(prev);
			if (newSet.has(productId)) {
				newSet.delete(productId);
			} else {
				newSet.add(productId);
			}
			return newSet;
		});
	}

	return (
		<div className="space-y-2">
			{products.map((product, index) => {
				const { id, name, price, stock } = product;

				return (
					<div
						key={product.id}
						data-testid={`product-${index + 1}`}
						className="bg-white p-4 rounded shadow"
					>
						<button
							data-testid="toggle-button"
							onClick={() => handleToggleDetailButton(product.id)}
							className="w-full text-left font-semibold"
						>
							{name} - {price}원 (재고: {stock})
						</button>
						{openProductIds.has(id) && (
							<div className="mt-2">
								{selectedEditProduct &&
								selectedEditProduct.id === product.id ? (
									<EditProduct
										product={product}
										onProductUpdate={onProductUpdate}
										closeEditProductForm={closeEditProductForm}
									/>
								) : (
									<div>
										{product.discounts.map((discount, index) => (
											<div key={index} className="mb-2">
												<span>
													{discount.quantity}개 이상 구매 시{" "}
													{discount.rate * 100}% 할인
												</span>
											</div>
										))}
										<button
											data-testid="modify-button"
											onClick={handleClickEditButton(product)}
											className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mt-2"
										>
											수정
										</button>
									</div>
								)}
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
}
