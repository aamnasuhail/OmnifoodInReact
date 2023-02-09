import { BrowserRouter, Route, Routes } from "react-router-dom";

function Page404() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element="{<p>Page not found</p>}">
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Page404;
