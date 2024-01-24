import { Restaurant } from "@prisma/client";
import ResDec from "../components/ResDec";
import ResImage from "../components/ResImage";
import ResInnerNav from "../components/ResInnerNav";
import ResRate from "../components/ResRate";
import ResReservation from "../components/ResReservation";
import ResRevCar from "../components/ResRevCar";
import ResTitle from "../components/ResTitle";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        {/* <ResNav /> */}
        {/* NAVBAR */}
        {/* HEADER */}
        {/* <ResHead /> */}
        {/* HEADER */}
        {/* DESCRIPTION PORTION */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            {/* RESAURANT NAVBAR */}
            <ResInnerNav />
            {/* RESAURANT NAVBAR */} {/* TITLE */}
            <ResTitle />
            {/* TITLE */}
            {/* RATING */}
            <ResRate />
            {/* RATING */}
            {/* DESCRIPTION */}
            <ResDec />
            {/* DESCRIPTION */}
            {/* IMAGES */}
            <ResImage />
            {/* IMAGES */}
            {/* REVIEWS */}
            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
                What 100 people are saying
              </h1>
              <div>
                {/* REVIEW CARD */}
                <ResRevCar />
                {/* REVIEW CARD */}
              </div>
            </div>
            {/* REVIEWS */}
          </div>
          <ResReservation />
        </div>
        {/* DESCRIPTION PORTION */} {/* RESERVATION CARD PORTION */}{" "}
        {/* RESERVATION
    CARD PORTION */}
      </main>
    </main>
  );
}
