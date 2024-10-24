import { joinClassName } from "../../utils";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, children, ...rest }: Props) {
	return (
		<button className={joinClassName(className)} {...rest}>
			{children}
		</button>
	);
}
