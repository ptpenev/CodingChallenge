import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CodingChallengeLanding from "./pages/CodingChallengeLanding";
import PersonalDetails from "./pages/PersonalDetails";
import CodingChallengeTask from "./pages/CodingChallengeTask";

export default function App() {
  return (
    <Router basename="/CodingChallenge">
      <Routes>
          <Route path="/" element={<CodingChallengeLanding />} />
          <Route path="/form" element={<PersonalDetails />} />
          <Route path="/task" element={<CodingChallengeTask />} />
          <Route path="*" element={<CodingChallengeLanding />} />
      </Routes>
    </Router>
  );
}
