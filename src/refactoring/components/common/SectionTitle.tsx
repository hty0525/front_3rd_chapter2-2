import { joinClassName } from "../../utils";

type Props = React.HTMLAttributes<HTMLHeadingElement>;

export function SectionTitle({ children, className, ...rest }: Props) {
	return (
		<h2
			className={joinClassName("text-2xl font-semibold", className)}
			{...rest}
		>
			{children}
		</h2>
	);
}
