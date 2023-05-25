import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import NotFound from "./components/pages/NotFound/NotFound";
import Table from "./components/features/Table/Table";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/table/table:id" element={<Table />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
