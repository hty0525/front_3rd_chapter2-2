import { joinClassName } from "../../utils";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	styleType?: "blue" | "red" | "green" | "gray";
};

export function Button({ className, children, styleType, ...rest }: Props) {
	const styleTypeClassName = {
		none: undefined,
		blue: "bg-blue-500 text-white hover:bg-blue-600",
		red: "bg-red-500 text-white hover:bg-red-600",
		green: "bg-green-500 text-white hover:bg-green-600",
		gray: "bg-gray-300 text-gray-500 cursor-not-allowed",
	};
	return (
		<button
			className={joinClassName(
				"px-4 py-2 rounded",
				className,
				styleTypeClassName[styleType ?? "none"]
			)}
			{...rest}
		>
			{children}
		</button>
	);
}
