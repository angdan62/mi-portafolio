import NotFound from "./pages/notFound";
import Home from "./pages/Home";

const { BrowserRouter, Routes, Route } = require("react-router-dom");

function AppRoutes() {
  return (<>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
    </BrowserRouter>
  </>);
}

export default AppRoutes;
