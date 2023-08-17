import "./App.css";
import QuizCapitalCard from "./components/QuizCapitalCard";
import AdventureIcon from "./assets/undraw_adventure.svg";
import QuizFlagCard from "./components/QuizFlagCard";
import ResultCard from "./components/ResultCard";

function App() {
	return (
		// TODO: create a router
		// TODO: Create flag quiz card
		// TODO: create a correct/wrong effect in question cards
		<>
			<div className="min-h-screen main-bg flex items-center justify-center flex-col">
				{/* <div className="w-[464px]">
					<div className="uppercase main-title text-left">
						Country quiz
					</div>
					<div className=" bg-white rounded-xl p-8 pt-14 relative">
						<img
							src={AdventureIcon}
							alt="adventure icon"
							className="absolute right-0 -top-[90px]"
						/>
					</div>
				</div> */}
				<ResultCard />
			</div>
		</>
	);
}

export default App;
