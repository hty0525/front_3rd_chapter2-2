import { MouseEventHandler } from "react";

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
			className={[className, "px-3 py-1 rounded"].join(" ")}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
}
