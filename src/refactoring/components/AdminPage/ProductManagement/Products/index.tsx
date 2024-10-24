import { useState } from "react";
import { EditProduct } from "./EditProduct";
import { Button, ContentBox } from "../../../common";
import { useCombinedContext } from "../../../../context/combinedContext";

export function Products() {
	const { products } = useCombinedContext();
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
		return function () {
			setOpenProductIds((prev) => {
				const newSet = new Set(prev);
				if (newSet.has(productId)) {
					newSet.delete(productId);
				} else {
					newSet.add(productId);
				}
				return newSet;
			});
		};
	}

	return (
		<div className="space-y-2">
			{products.map((product, index) => {
				const { id, name, price, stock } = product;

				return (
					<ContentBox key={product.id} data-testid={`product-${index + 1}`}>
						<Button
							data-testid="toggle-button"
							onClick={handleToggleDetailButton(product.id)}
							className="w-full text-left font-semibold"
						>
							{name} - {price}원 (재고: {stock})
						</Button>
						{openProductIds.has(id) && (
							<div className="mt-2">
								{selectedEditProduct &&
								selectedEditProduct.id === product.id ? (
									<EditProduct
										product={product}
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
										<Button
											data-testid="modify-button"
											onClick={handleClickEditButton(product)}
											styleType="blue"
										>
											수정
										</Button>
									</div>
								)}
							</div>
						)}
					</ContentBox>
				);
			})}
		</div>
	);
}
