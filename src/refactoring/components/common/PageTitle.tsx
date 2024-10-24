import { joinClassName } from "../../utils";

type Props = React.HTMLAttributes<HTMLHeadingElement>;

export function PageTitle({ children, className, ...rest }: Props) {
	return (
		<h1
			className={joinClassName("text-3xl font-bold mb-6", className)}
			{...rest}
		>
			{children}
		</h1>
	);
}
