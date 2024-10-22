type Props = {
	children: React.ReactNode;
	className?: string;
};

export function SubSectionTitle({ children, className = "" }: Props) {
	return (
		<h3 className={["text-lg font-semibold", className].join(" ")}>
			{children}
		</h3>
	);
}
