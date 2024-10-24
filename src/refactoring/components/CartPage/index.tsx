import { Container, PageTitle } from "../common";
import { GirdLayout } from "../layouts";
import { Cart } from "./Cart";
import { Products } from "./Products";

export const CartPage = () => {
	return (
		<Container className="p-4">
			<PageTitle className="text-3xl font-bold mb-6">장바구니</PageTitle>
			<GirdLayout>
				<Products />
				<Cart />
			</GirdLayout>
		</Container>
	);
};
