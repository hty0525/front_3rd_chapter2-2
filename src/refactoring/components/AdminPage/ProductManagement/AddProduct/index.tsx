import { ChangeEvent, useState } from "react";
import { useCombinedContext } from "../../../../context/combinedContext";
import {
	Button,
	ContentBox,
	FlexBox,
	Input,
	Label,
	SubSectionTitle,
} from "../../../common";

type Props = {
	closeProductForm: () => void;
};

export function AddProduct({ closeProductForm }: Props) {
	const { addProduct } = useCombinedContext();
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
		const isPriceOrStock = name === "price" || name === "stock";

		setNewProduct((prev) => ({
			...prev,
			[name]: isPriceOrStock ? Number(value) : value,
		}));
	}

	function handleAddProductButton() {
		if (name === "" || price === 0 || stock === 0) {
			return alert("모든 항목을 입력해주세요.");
		}

		addProduct({ ...newProduct, id: Date.now().toString() });
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
