import { joinClassName } from "../../utils";

type Props = React.HTMLAttributes<HTMLDivElement>;

export function ContentBox({ children, className, ...rest }: Props) {
	return (
		<div
			className={joinClassName("bg-white p-4 rounded shadow", className)}
			{...rest}
		>
			{children}
		</div>
	);
}
