export const fillRange = (start, end) =>
	Array(end - start + 1)
		.fill()
		.map((item, index) => `Item ${start + index}`)
