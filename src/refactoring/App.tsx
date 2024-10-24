import { useState } from "react";

import { Nav, AdminPage, CartPage } from "./components";
import { CombinedContextProvider } from "./context/combinedContext";
import { RootLayout, Layout } from "./components/layouts";

const App = () => {
	const [isAdmin, setIsAdmin] = useState(!false);

	const handleClickToggleAdminButton = () => {
		setIsAdmin((prev) => !prev);
	};

	return (
		<CombinedContextProvider>
			<RootLayout>
				<Nav
					isAdmin={isAdmin}
					handleClickToggleAdminButton={handleClickToggleAdminButton}
				/>
				<Layout>{isAdmin ? <AdminPage /> : <CartPage />}</Layout>
			</RootLayout>
		</CombinedContextProvider>
	);
};

export default App;
