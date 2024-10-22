import { joinClassName } from "../../utils";

type Props = {
	children: React.ReactNode;
	className?: string;
};
export function PageTitle({ children, className }: Props) {
	return (
		<h1 className={joinClassName("text-3xl font-bold mb-6", className)}>
			{children}
		</h1>
	);
}
