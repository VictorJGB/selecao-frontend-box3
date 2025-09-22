import { Outlet } from "react-router-dom";

import Header from "../components/header";

export default function MainLayout() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <Header />
      <main className="flex size-full px-20">
        <Outlet />
      </main>
      <footer className="w-full h-40 flex items-center justify-center px-20">
        Footer
      </footer>
    </div>
  );
}
