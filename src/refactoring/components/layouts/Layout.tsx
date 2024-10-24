type Props = {
	children: React.ReactNode;
};

export function Layout({ children }: Props) {
	return <main className="container mx-auto mt-6">{children}</main>;
}
