import { generateRandomInteger } from "./generateRandomInteger";

export const generateAnswerOptions = (countries) => {
	const flags = [];

	while (flags.length < 3) {
		let randomNumber = generateRandomInteger(0, countries.length);

		let countryName = countries[randomNumber].name.common;

		if (!flags.includes(countryName)) {
			flags.push(countryName);
		}
	}

	return flags;
};
