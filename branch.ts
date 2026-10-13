export function classify(value: number): string {
	if (value < 0) {
		return 'negative';
	}
	return 'positive';
}

export class Unused {}
