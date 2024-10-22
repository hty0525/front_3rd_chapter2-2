import { joinClassName } from "../../utils";

type Props = {
	name: string;
	value: string;
	children: React.ReactNode;
	className?: string;
	onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

export function Select({
	name,
	value,
	children,
	className = "",
	onChange,
}: Props) {
	return (
		<select
			value={value}
			name={name}
			className={joinClassName("p-2 border rounded", className)}
			onChange={onChange}
		>
			{children}
		</select>
	);
}

type OptionProps = {
	value: string;
	children: React.ReactNode;
	disabled?: boolean;
};

function Option({ children, value, disabled = false }: OptionProps) {
	return (
		<option value={value} disabled={disabled}>
			{children}
		</option>
	);
}

Select.Option = Option;
