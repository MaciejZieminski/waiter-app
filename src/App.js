import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Home from './components/pages/Home/Home'
import Table from "./components/features/Table/Table";
import NotFound from "./components/pages/NotFound/NotFound";
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTables } from "./redux/tablesReducer"
import AddTableForm from "./components/pages/AddTableForm/AddTableForm";


function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tables" element={<Home />}></Route>
        <Route path="/newtable" element={<AddTableForm />}></Route>
        <Route path="/table/:id" element={<Table />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;