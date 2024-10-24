import { ProductManagement } from "./ProductManagement";
import { CouponManagement } from "./CouponManagement";
import { Container, PageTitle } from "../common";
import { GirdLayout } from "../layouts";

export const AdminPage = () => {
	return (
		<Container className="p-4">
			<PageTitle className="text-3xl font-bold mb-6">관리자 페이지</PageTitle>
			<GirdLayout>
				<ProductManagement />
				<CouponManagement />
			</GirdLayout>
		</Container>
	);
};
