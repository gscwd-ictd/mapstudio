"use client";

import Image from "next/image";
import gscwd_logo from "@mapstudio/../public/gscwd-logo.png";
import Link from "next/link";
import images from "../../../../public/images";
import { Eye, EyeOff, LockKeyhole, Mail, Search } from "lucide-react";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div>
        <div
          className="flex flex-col items-center justify-center"
          style={{ position: "relative", height: "100vh", width: "100vw" }}
        >
          <div
            style={{
              backgroundImage: "url(/modules-bg-image.png)",
              backgroundSize: "cover",
              height: "100%",
              width: "100%",
              opacity: 0.7,
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1,
              filter: "blur(6px)",
            }}
          />
          <div
            className="flex flex-col items-center gap-3 h-[650px] w-[450px] p-6"
            style={{
              background:
                "linear-gradient(180deg, rgba(82, 187, 235, 0.5) 19.5%, rgba(98, 212, 237, 0.5) 50.41%, rgba(255, 255, 255, 0.5) 100%)",
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
              {/* <input
                type="text"
                className="w-full p-2 border-2 border-gray-300 rounded-sm"
                placeholder="Username"
              /> */}
              <div className="flex flex-col gap-1">
                <p className="text-[#424856] text-sm font-bold">Email</p>
                <div className="relative flex flex-row items-center justify-center">
                  <input
                    type="text"
                    className="bg-[#F3F4F6] pl-9 rounded-xl text-left placeholder-gray-400 placeholder:text-xs w-full h-[40px]"
                    placeholder="Enter your email"
                  />
                  <span className="absolute left-2">
                    <Mail className="text-gray-800" strokeWidth={2} style={{ height: "15px" }} />
                  </span>
                </div>
              </div>
              {/* Password */}
              <div className="flex flex-col gap-1">
                <p className="text-[#424856] text-sm font-bold">Password</p>
                <div className="relative flex flex-row items-center justify-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="bg-[#F3F4F6] pl-9 pr-9 rounded-xl text-left placeholder-gray-400 placeholder:text-xs w-full h-[40px]"
                    placeholder="Enter your password"
                  />
                  <span className="absolute left-2">
                    <LockKeyhole
                      className="text-gray-800"
                      strokeWidth={2}
                      style={{ height: "15px" }}
                    />
                  </span>
                  <span
                    className="absolute right-2 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff
                        className="text-gray-800"
                        strokeWidth={2}
                        style={{ height: "15px" }}
                      />
                    ) : (
                      <Eye className="text-gray-800" strokeWidth={2} style={{ height: "15px" }} />
                    )}
                  </span>
                </div>
              </div>
              <Link
                href="/"
                className="text-center w-full p-2 text-white rounded-lg mt-2 font-bold tracking-widest uppercase"
                style={{ backgroundColor: "#2563EB" }}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
