"use client";

import { useRouter } from "next/navigation";
const Back = () => {
  const router = useRouter();
  return (
    <div
      className="flex gap-0.5 cursor-pointer mb-2"
      onClick={() => router.back()}
    >
      <svg
        viewBox="0 0 1024 1024"
        fill="#0de34d"
        className="icon"
        width="20px"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#0de34d"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
            fill=""
          ></path>
        </g>
      </svg>
      <p>Back</p>
    </div>
  );
};

export default Back;
