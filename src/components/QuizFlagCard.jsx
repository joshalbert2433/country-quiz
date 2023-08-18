import { shuffleArray } from "../utils/shuffleArray";

export default function QuizFlagCard({ activeCountry, answerOptions }) {
	const answerLetters = ["A", "B", "C", "D"];

	const { flags, name } = activeCountry;

	const activeCountryName = name.common;

	answerOptions.push(activeCountryName);

	const availableAnswers = shuffleArray(answerOptions);

	return (
		<div className="space-y-6">
			<img
				src={flags.png}
				alt="flag"
				className="w-[84px] h-[54px] border"
			/>
			<p className="main-question">
				Which country does this flag belongs to?
			</p>
			<ul className="space-y-6">
				{availableAnswers?.map((answer, index) => {
					return (
						<>
							<li className="flex gap-8  items-center hover:bg-[#F9A826] cursor-pointer py-2 px-4 rounded-lg hover:text-white hover:outline-0 outline outline-1 outline-[#9094DF] text-[#9094DF]">
								<div
									className="text-[24px] font-semibold"
									key={index}
								>
									{answerLetters[index]}
								</div>
								<div className="font-[18px] ">{answer}</div>
							</li>
						</>
					);
				})}
			</ul>
		</div>
	);
}
