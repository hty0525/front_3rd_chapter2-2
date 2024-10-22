import { MouseEventHandler } from "react";
import { joinClassName } from "../../utils";

type Props = {
	children: React.ReactNode;
	className?: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
	disabled?: boolean;
};

export function Button({
	children,
	className = "",
	disabled = false,
	onClick,
}: Props) {
	return (
		<button
			className={joinClassName("px-3 py-1 rounded", className)}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
}
