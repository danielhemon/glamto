import React from "react";
import VideoGalleryClientWrapper from "../../../components/VideoGalleryClientWrapper";

export default function Gimnasios() {
  return (
    <main className="flex no-select flex-col flex-nowrap overflow-y-auto md:overflow-x-auto">
      <div
        id="inicio"
        style={{ backgroundImage: 'url("/layout2.svg")' }}
        className="bg-cover h-full md:w-screen flex items-center justify-center bg-[-650px_center] sm:bg-[-150px_center] "
      >
        <VideoGalleryClientWrapper />
      </div>
    </main>
  );
}
