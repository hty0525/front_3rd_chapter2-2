import { Button, Container, PageTitle } from "../common";

type Props = {
	isAdmin: boolean;
	handleClickToggleAdminButton: () => void;
};

export function Nav({ isAdmin, handleClickToggleAdminButton }: Props) {
	return (
		<nav className="bg-blue-600 text-white p-4">
			<Container className="container mx-auto flex justify-between items-center">
				<PageTitle>쇼핑몰 관리 시스템</PageTitle>
				<Button
					onClick={handleClickToggleAdminButton}
					className="bg-white text-blue-600  hover:bg-blue-100"
				>
					{isAdmin ? "장바구니 페이지로" : "관리자 페이지로"}
				</Button>
			</Container>
		</nav>
	);
}
