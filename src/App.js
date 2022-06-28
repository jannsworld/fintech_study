import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import ListComponents from "./components/ListComponent";
import AxiosTest from "./pages/AxiosTest"
import NewsApiPage from "./pages/NewsApiPage";
import example from "./pages/example";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Welcome></Welcome>}></Route>
        <Route path="/list" element={<ListComponents></ListComponents>}></Route>
        <Route path="/axiosTest" element={<AxiosTest></AxiosTest>}></Route>
        <Route path="/newsPage" element={<NewsApiPage></NewsApiPage>}></Route>
        <Route path="/example" element={<Example></Example>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;