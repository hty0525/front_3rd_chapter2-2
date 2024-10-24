import {
	Button,
	FlexBox,
	Input,
	Label,
	SubSectionTitle,
} from "../../../../common";
import { useEditProduct } from "../../../../../hooks/useEditProduct";

type Props = {
	product: Product;
	closeEditProductForm: () => void;
};

export function EditProduct({ product, closeEditProductForm }: Props) {
	const {
		editingProduct,
		newDiscount,
		changeEditingProduct,
		changeNewDiscount,
		removeSelectedDiscount,
		addProductNewDiscount,
		updateSelectedProduct,
	} = useEditProduct(product);

	const { discounts } = editingProduct;

	function handleChangeEditingProductInput({
		target: { name, value },
	}: React.ChangeEvent<HTMLInputElement>) {
		changeEditingProduct(name as keyof Product, value);
	}

	function handleChangeNewDiscountInput({
		target: { value, name },
	}: React.ChangeEvent<HTMLInputElement>) {
		changeNewDiscount(name as keyof Discount, Number(value));
	}

	function handleClickRemoveDiscountButton(index: number) {
		return function () {
			removeSelectedDiscount(index);
		};
	}

	function handleClickAddDiscountButton() {
		addProductNewDiscount();
	}

	function handleUpdateProductButton() {
		const isSuccess = updateSelectedProduct();

		isSuccess && closeEditProductForm();
	}

	return (
		<div>
			{Object.keys(editingProduct).map((key) => {
				const _key = key as keyof Product;
				if (_key === "discounts" || _key === "id") {
					return null;
				}

				const label = () => {
					switch (_key) {
						case "name":
							return "상품명";
						case "price":
							return "가격";
						case "stock":
							return "재고";
					}
				};

				const type = _key === "name" ? "text" : "number";

				return (
					<FlexBox key={_key} className="mb-4" col>
						<Label>{label()}</Label>
						<Input
							type={type}
							name={key}
							value={editingProduct[_key]}
							onChange={handleChangeEditingProductInput}
						/>
					</FlexBox>
				);
			})}

			<div className="mb-4">
				<SubSectionTitle className="text-lg font-semibold mb-2">
					할인 정보
				</SubSectionTitle>
				{discounts.map(({ quantity, rate }, index) => (
					<FlexBox
						key={index}
						justify="between"
						align="center"
						className="mb-2"
					>
						<span>
							{quantity}개 이상 구매 시 {rate * 100}% 할인
						</span>
						<Button
							onClick={handleClickRemoveDiscountButton(index)}
							styleType="red"
						>
							삭제
						</Button>
					</FlexBox>
				))}
				<FlexBox className="space-x-2">
					{Object.keys(newDiscount).map((key) => {
						const isRate = key === "rate";
						const _key = key as keyof Discount;
						const placeholder = _key === "quantity" ? "수량" : "할인율 (%)";
						const value = newDiscount[_key];
						return (
							<Input
								key={_key}
								type="number"
								name={_key}
								className="w-1/3"
								value={isRate ? value * 100 : value}
								placeholder={placeholder}
								onChange={handleChangeNewDiscountInput}
							/>
						);
					})}
					<Button
						onClick={handleClickAddDiscountButton}
						styleType="blue"
						className="w-1/3 block"
					>
						할인 추가
					</Button>
				</FlexBox>
			</div>
			<Button onClick={handleUpdateProductButton} styleType="green">
				수정 완료
			</Button>
		</div>
	);
}
