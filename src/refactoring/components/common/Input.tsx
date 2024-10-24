import { joinClassName } from "../../utils";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...rest }: Props) {
	return (
		<input
			className={joinClassName("border p-2 rounded", className)}
			{...rest}
		/>
	);
}
