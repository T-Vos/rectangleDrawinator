type PositiveInteger = number & { __type: 'PositiveInteger' };

export const asPositiveInteger = (value: number): PositiveInteger => {
	if (!Number.isInteger(value) || value <= 0) {
		// throw new Error('Value must be a positive integer');
	}
	return value as PositiveInteger;
};

export interface Rectangle {
	y: number;
	x: number;
	id: number;
	color: string;
	count: PositiveInteger;
}
