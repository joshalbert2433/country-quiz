import { useQuery } from "react-query";
import AdventureIcon from "../assets/undraw_adventure.svg";
import QuizFlagCard from "./QuizFlagCard";
import { getAllCountry } from "../api/restCountry";
import { generateRandomInteger } from "../utils/generateRandomInteger";
import { generateAnswerOptions } from "../utils/generateAnswerOptions";

export default function QuizContainer() {
	const {
		data: countries,
		isError,
		isLoading,
	} = useQuery({
		queryKey: ["countries"],
		queryFn: getAllCountry,
	});

	if (isError) {
		return <div>Something went wrong</div>;
	}

	if (isLoading) {
		return (
			<div className="text-2xl text-white font-semibold">
				Loading question...
			</div>
		);
	}

	const activeCountry = countries[generateRandomInteger(0, countries.length)];

	const answerOptions = generateAnswerOptions(countries);

	return (
		<div className="w-[464px]">
			<div className="uppercase main-title text-left">Country quiz</div>
			<div className=" bg-white rounded-xl p-8 pt-14 relative">
				<img
					src={AdventureIcon}
					alt="adventure icon"
					className="absolute right-0 -top-[90px]"
				/>
				{/* <QuizCapitalCard /> */}
				<QuizFlagCard
					activeCountry={activeCountry}
					answerOptions={answerOptions}
				/>
			</div>
		</div>
	);
}
