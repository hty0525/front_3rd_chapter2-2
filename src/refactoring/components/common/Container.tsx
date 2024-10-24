import { joinClassName } from "../../utils";

type Props = React.HTMLAttributes<HTMLDivElement>;

export function Container({ className, children, ...props }: Props) {
	return (
		<div className={joinClassName("container mx-auto", className)} {...props}>
			{children}
		</div>
	);
}
