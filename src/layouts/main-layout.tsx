import { Outlet, useNavigate } from "react-router-dom";

import { useEffect } from "react";
import Header from "../components/header";
import useLocalStorage from "../hooks/use-local-storage";

export default function MainLayout() {
  const { getKey } = useLocalStorage("AUTH_TOKEN");
  const navigate = useNavigate();

  useEffect(() => {
    // Auth logic
    if (!getKey()) {
      navigate("/login");
    }
  }, [getKey, navigate]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Header />
      <main className="flex size-full px-6 lg:px-10 py-4">
        <Outlet />
      </main>
    </div>
  );
}
