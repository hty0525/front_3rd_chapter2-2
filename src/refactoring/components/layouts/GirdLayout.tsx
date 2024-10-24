type Props = React.HTMLAttributes<HTMLDivElement>;

export function GirdLayout({ children, ...rest }: Props) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6" {...rest}>
			{children}
		</div>
	);
}
