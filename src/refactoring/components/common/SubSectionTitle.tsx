import { joinClassName } from "../../utils";

type Props = React.HTMLAttributes<HTMLHeadingElement>;

export function SubSectionTitle({ children, className, ...rest }: Props) {
	return (
		<h3 className={joinClassName("text-lg font-semibold", className)} {...rest}>
			{children}
		</h3>
	);
}
