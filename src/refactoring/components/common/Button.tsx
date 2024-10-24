import { joinClassName } from "../../utils";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, children, ...rest }: Props) {
	return (
		<button className={joinClassName("px-4 py-2 rounded", className)} {...rest}>
			{children}
		</button>
	);
}
