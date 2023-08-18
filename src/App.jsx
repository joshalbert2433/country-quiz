import "./App.css";
import QuizCapitalCard from "./components/QuizCapitalCard";
import QuizContainer from "./components/QuizContainer";
import QuizFlagCard from "./components/QuizFlagCard";
import ResultCard from "./components/ResultCard";

function App() {
	return (
		// TODO: create answer validation on correct and wrong
		// TODO: create QuizCountry question
		<>
			<div className="min-h-screen main-bg flex items-center justify-center flex-col">
				{/* <ResultCard /> */}
				<QuizContainer />
			</div>
		</>
	);
}

export default App;
