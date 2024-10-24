type Props = {
	children: React.ReactNode;
};

export function RootLayout({ children }: Props) {
	return <div className="min-h-screen bg-gray-100">{children}</div>;
}
