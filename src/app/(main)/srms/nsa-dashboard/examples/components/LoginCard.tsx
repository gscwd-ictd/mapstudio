import Image from "next/image";
import gscwd_logo from "@mapstudio/../public/gscwd-logo.png";
import Link from "next/link";

export default function LoginCard() {
  return (
    <>
      <div
        className="flex flex-col items-center gap-3 h-[600px] w-[420px] p-6"
        style={{
          backgroundColor: "#588BFE3B",
          border: "1px solid #588BFE1A ",
          borderRadius: "15px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#588BFE",
            opacity: 0.23,
            filter: "blur(17.4px)",
            zIndex: -1,
          }}
        />
        <Image src={gscwd_logo} alt={"GSCWD"} width={270} height={270} />
        <p
          className="text-center font-bold tracking-widest w-[90%]"
          style={{ fontSize: "20px", color: "#00000099" }}
        >
          Operations Monitoring and Management System
        </p>
        <div className="mt-4 flex flex-col gap-4 w-[90%]">
          <input
            type="text"
            className="w-full p-2 border-2 border-gray-300 rounded-sm"
            placeholder="Username"
          />
          <input
            type="password"
            className="w-full p-2 border-2 border-gray-300 rounded-sm mt-2"
            placeholder="Password"
          />
          <Link
            href="/"
            className="text-center w-full p-2 text-white rounded-lg mt-2 font-bold tracking-widest uppercase"
            style={{ backgroundColor: "#2563EB" }}
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}
