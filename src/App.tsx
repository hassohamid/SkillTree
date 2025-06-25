import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <AppLayout>
        <Home />
        <div className="h-screen"></div>
      </AppLayout>
    </>
  );
}
