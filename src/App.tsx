import Hero from "./components/home/Hero";
import AppLayout from "./layouts/AppLayout";

export default function App() {
  return (
    <>
      <AppLayout>
        <Hero />
        <div className="h-screen"></div>
        <div className="h-screen bg-black"></div>
      </AppLayout>
    </>
  );
}
