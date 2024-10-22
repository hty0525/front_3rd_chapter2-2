import { joinClassName } from "../../utils";

type Props = {
	children: React.ReactNode;
	className?: string;
};

export function SubSectionTitle({ children, className = "" }: Props) {
	return (
		<h3 className={joinClassName("text-lg font-semibold", className)}>
			{children}
		</h3>
	);
}
