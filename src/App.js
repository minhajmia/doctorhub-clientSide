import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Routes/Routes";

function App({ children }) {
  return (
    <div className="max-w-5xl mx-auto">
      <RouterProvider router={router}>{children}</RouterProvider>
    </div>
  );
}

export default App;
