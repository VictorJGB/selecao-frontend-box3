import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

export default function App() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate("/chamados")
  }, [navigate])

  return (
    <div className="size-full items-center justify-center">
      <h1>Guardia Maria</h1>
    </div>
  );
}
