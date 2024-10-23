export const joinClassName = (
	...rest: Array<string | undefined | null | boolean>
) => {
	return rest.filter(Boolean).join(" ");
};
