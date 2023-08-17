import WinnerImage from "../assets/undraw_winners.svg";

export default function ResultCard() {
	return (
		<div className=" w-[464px]">
			<div className="uppercase main-title text-left">Country quiz</div>

			<div className="flex flex-col items-center bg-white rounded-2xl py-8 space-y-16  justify-center h-[542px]">
				<img src={WinnerImage} alt="winner image" />

				<div className="text-center text-[#1D355D]">
					<div className=" text-[48px] font-[700]">Results</div>

					<div className="text-[18px]">
						You got{" "}
						<span className="text-[#6FCF97] text-[36px] font-bold">
							4
						</span>{" "}
						correct answers
					</div>
				</div>

				<button className="py-3 px-12 border-2 text-[18px] text-[#1D355D] font-semibold border-[#1D355D] rounded-lg">
					Try again
				</button>
			</div>
		</div>
	);
}
