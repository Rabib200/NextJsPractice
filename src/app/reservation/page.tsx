import ReserveForm from "./components/ReserveForm";
import ReserveHead from "./components/ReserveHead";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        {/* <ReserveNav/> */}
        {/* NAVBAR END */}
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            {/* HEADER */}
            <ReserveHead />
            {/* HEADER */} {/* FORM */}
            <ReserveForm />
          </div>
        </div>
      </main>
    </main>
  );
}
