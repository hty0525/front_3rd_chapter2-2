import { joinClassName } from "../../utils";

type Props = React.SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ className, children, ...rest }: Props) {
	return (
		<select
			className={joinClassName("p-2 border rounded", className)}
			{...rest}
		>
			{children}
		</select>
	);
}

type OptionProps = React.OptionHTMLAttributes<HTMLOptionElement>;

function Option({ children, ...rest }: OptionProps) {
	return <option {...rest}>{children}</option>;
}

Select.Option = Option;
