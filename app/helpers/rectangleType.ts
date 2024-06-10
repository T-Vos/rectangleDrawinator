export interface RectangleInput {
	y: number;
	x: number;
	id: number;
	count: number;
}

export interface RectangleDysplay {
	y: number;
	x: number;
	id: number;
	color: string;
	count: number;
}

export type SurfaceField = {
	id: number;
	surface: number | string;
	count: number | string;
};

export type SurfaceDisplay = {
	id: number;
	surface: number | string;
	surfaceColor?: string;
	surfaceName?: string;
};
