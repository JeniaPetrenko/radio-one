//start pagge "Radio App" with link to proggamms
import Link from "next/link";
export default function HomePage() {
  return (
    <div className="startpage-container">
      <h1 className="title">
        <svg
          width="36"
          height="36"
          viewBox="0 0 81 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginRight: "10px" }}
        >
          <g clipPath="url(#clip0_212_77)">
            <rect width="81" height="81" fill="#0F172A" />
            <path
              d="M40.5 81C62.8675 81 81 62.8675 81 40.5C81 18.1325 62.8675 0 40.5 0C18.1325 0 0 18.1325 0 40.5C0 62.8675 18.1325 81 40.5 81Z"
              fill="#DB2777"
            />
            <path
              d="M40.5 58C50.165 58 58 50.165 58 40.5C58 30.835 50.165 23 40.5 23C30.835 23 23 30.835 23 40.5C23 50.165 30.835 58 40.5 58Z"
              fill="#FBCFE8"
            />
            <path
              d="M47.2404 38.7426C48.4969 39.5001 48.5373 41.3077 47.3159 42.1205L38.9979 47.6559C37.6855 48.5293 35.9256 47.6116 35.8904 46.0355L35.6514 35.3419C35.6162 33.7658 37.3333 32.7705 38.6835 33.5844L47.2404 38.7426Z"
              fill="#DB2777"
            />
          </g>
          <defs>
            <clipPath id="clip0_212_77">
              <rect width="81" height="81" fill="white" />
            </clipPath>
          </defs>
        </svg>
        Radio app
      </h1>
      <Link href="/channel">
        <button className="btn-start">Get Started</button>
      </Link>
    </div>
  );
}
