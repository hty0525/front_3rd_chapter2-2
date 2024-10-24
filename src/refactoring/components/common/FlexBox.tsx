import { joinClassName } from "../../utils";

type Props = React.HTMLAttributes<HTMLDivElement> & {
	align?: "stretch" | "center" | "start" | "baseline" | "end";
	justify?: "center" | "around" | "between" | "end";
	col?: boolean;
	center?: boolean;
	gap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
};

export function FlexBox({
	children,
	className,
	col,
	align,
	justify,
	center = false,
	gap,
	...rest
}: Props) {
	const flexGap = [
		"gap-1",
		"gap-2",
		"gap-3",
		"gap-4",
		"gap-5",
		"gap-6",
		"gap-7",
		"gap-8",
		"gap-9",
		"gap-10",
	];

	const alignItems = {
		stretch: "items-stretch",
		center: "items-center",
		start: "items-start",
		baseline: "items-baseline",
		end: "items-end",
	};

	const justifyContent = {
		center: "justify-center",
		around: "justify-around",
		between: "justify-between",
		end: "justify-end",
	};

	const flexCenter = center && "items-center justify-center";
	const flexCol = col && "flex-col";
	return (
		<div
			className={joinClassName(
				"flex",
				className,
				flexCenter,
				align && alignItems[align],
				justify && justifyContent[justify],
				gap && flexGap[gap],
				flexCol
			)}
			{...rest}
		>
			{children}
		</div>
	);
}
