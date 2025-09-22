import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <header className="w-full h-40 flex items-center justify-between px-20">
        <h1>Guard Maria</h1>

        <nav>links</nav>
      </header>
      <main className="flex size-full px-20">
        <Outlet />
      </main>
      <footer className="w-full h-40 flex items-center justify-center px-20">
        Footer
      </footer>
    </div>
  );
}
