import { joinClassName } from "../../utils";

type Props = React.HTMLAttributes<HTMLLabelElement>;

export function Label({ children, className, ...rest }: Props) {
	return (
		<label className={joinClassName("block", className)} {...rest}>
			{children}
		</label>
	);
}
