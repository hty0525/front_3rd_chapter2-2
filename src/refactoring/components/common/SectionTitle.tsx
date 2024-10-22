import { joinClassName } from "../../utils/joinClassName";

type Props = {
	children: React.ReactNode;
	className?: string;
};

export function SectionTitle({ children, className }: Props) {
	return (
		<h2 className={joinClassName("text-2xl font-semibold", className)}>
			{children}
		</h2>
	);
}
