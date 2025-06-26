import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <AppLayout>
        <Home />
        {/* <div className="h-[600px] bg-gradient-to-t from-neutral-600 to-white from-55%"></div> */}
      </AppLayout>
    </>
  );
}
