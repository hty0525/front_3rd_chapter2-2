import { ChangeEvent } from "react";
import { useCombinedContext } from "../../../../context/combinedContext";
import {
	Button,
	ContentBox,
	FlexBox,
	Input,
	Label,
	SubSectionTitle,
} from "../../../common";
import { useAddProduct } from "../../../../hooks/useAddProduct";

type Props = {
	closeProductForm: () => void;
};

export function AddProduct({ closeProductForm }: Props) {
	const { newProduct, changeNewProduct, addNewProduct } = useAddProduct();

	function handleChangeProductInput({
		target: { value, name },
	}: ChangeEvent<HTMLInputElement>) {
		const _name = name as keyof Omit<typeof newProduct, "discounts">;
		changeNewProduct(_name, value);
	}

	function handleAddProductButton() {
		addNewProduct();
		closeProductForm();
	}

	return (
		<ContentBox className="mb-4">
			<SubSectionTitle className="mb-2">새 상품 추가</SubSectionTitle>
			<FlexBox col gap={2} className="mb-4">
				{Object.keys(newProduct).map((key, index) => {
					const _key = key as keyof typeof newProduct;
					if (_key === "discounts") {
						return <></>;
					}
					const label = () => {
						switch (_key) {
							case "name":
								return "상품명";

							case "price":
								return "가격";
							default:
								return "재고";
						}
					};

					const htmlFor = () => {
						switch (_key) {
							case "name":
								return "productName";
							case "price":
								return "productPrice";
							default:
								return "productStock";
						}
					};

					const value = newProduct[_key];

					const type = _key === "name" ? "text" : "number";

					return (
						<FlexBox key={index} col>
							<Label htmlFor={htmlFor()}>{label()}</Label>
							<Input
								name={_key}
								value={value}
								onChange={handleChangeProductInput}
								type={type}
							/>
						</FlexBox>
					);
				})}
			</FlexBox>

			<Button
				styleType="blue"
				className="w-full"
				onClick={handleAddProductButton}
			>
				추가
			</Button>
		</ContentBox>
	);
}
