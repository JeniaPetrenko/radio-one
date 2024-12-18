//start pagge "Radio App" with link to proggamms
import Link from "next/link";
export default function HomePage() {
  return (
    <div className="startpage-container">
      <h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#DB2777"
          viewBox="0 0 24 24"
          //strokeWidth={1}
          stroke="#FBCFE8"
          className="size-6"
          width={50}
          height={50}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
          />
        </svg>
        Radio App
      </h1>
      <Link href="/channel">
        <button className="btn-start">Get Started</button>
      </Link>
    </div>
  );
}
