import Axios from "axios";

const RestCountry = Axios.create({ baseURL: "https://restcountries.com/v3.1" });

export const getAllCountry = async () => {
	try {
		const response = await RestCountry.get("/all");

		return response.data;
	} catch (error) {
		console.log(error);
	}
};
