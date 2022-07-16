import { Navigate, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/start" element={<p>Página inicial</p>} />
      <Route path="*" element={<Navigate to="/start" />} />
    </Routes>
  );
};
