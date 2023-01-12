import { BrowserRouter, Route, Routes } from "react-router-dom";

import { routing } from "./router.config";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routing.map((r, i) => (
          <Route key={i} path={r.path} element={<r.page />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
