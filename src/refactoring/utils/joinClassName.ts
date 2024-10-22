export const joinClassName = (...rest: Array<string | undefined>) => {
	return rest.filter(Boolean).join(" ");
};
