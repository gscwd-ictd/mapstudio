import Link from "next/link";
import { ModuleHeader } from "../../(main)/components/ModuleHeader";
import nsa_logo from "../../../../public/nsa-logo.png";
import leakage_logo from "../../../../public/leakage-logo.png";
import water_meter_logo from "../../../../public/water-meter-logo.png";
import water_test_logo from "../../../../public/water-test-logo.png";
import others from "../../../../public/others.png";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <ModuleHeader />
      <div style={{ backgroundColor: "#5299FE33" }}>
        <div
          className="flex flex-col items-center"
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
          <div className="flex flex-col gap-20 mt-20">
            <div className="flex flex-col items-center">
              <h1
                className="tracking-widest"
                style={{ fontSize: "24px", color: "#144DB1", fontWeight: 600 }}
              >
                Operations Monitoring and Management System
              </h1>
              <p
                className="tracking-widest"
                style={{ fontSize: "18px", color: "#144DB1", fontWeight: 400 }}
              >
                Modules
              </p>
            </div>
            {/* Modules 1 */}
            <div className="flex flex-row gap-14">
              <Link
                className="flex flex-col items-center justify-center gap-1"
                style={{
                  backgroundColor: "#FFFFFF33",
                  width: "216px",
                  height: "113px",
                  borderRadius: "20px",
                  position: "relative",
                  boxShadow: `0px 4px 4px 0px #00000040`,
                }}
                href={"/srms/nsa-dashboard/home"}
              >
                <div
                  className="flex flex-col items-center justify-center rounded-full p-2 w-16 h-16"
                  style={{ backgroundColor: "#0162B31A" }}
                >
                  <Image src={nsa_logo} alt={""} width={80} height={80} />
                </div>
                <div
                  style={{
                    backgroundImage: "url(/module-bg-image.png)",
                    backgroundSize: "cover",
                    opacity: 0.5,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                    zIndex: -1,
                  }}
                />
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "16.94px",
                    width: "176px",
                    height: "34px",
                    fontWeight: 500,
                    letterSpacing: "0.10em",
                    textAlign: "center",
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                    color: "#144DB1",
                  }}
                >
                  New Service Application
                </p>
              </Link>
              <Link
                className="flex flex-col items-center justify-center gap-1"
                style={{
                  backgroundColor: "#FFFFFF33",
                  width: "216px",
                  height: "113px",
                  borderRadius: "20px",
                  position: "relative",
                  boxShadow: `0px 4px 4px 0px #00000040`,
                }}
                href={""}
              >
                <div
                  className="flex flex-col items-center justify-center rounded-full p-2 w-16 h-16"
                  style={{ backgroundColor: "#0162B31A" }}
                >
                  <Image src={leakage_logo} alt={""} width={80} height={80} />
                </div>
                <div
                  style={{
                    backgroundImage: "url(/module-bg-image.png)",
                    backgroundSize: "cover",
                    opacity: 0.5,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                    zIndex: -1,
                  }}
                />
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "16.94px",
                    width: "187px",
                    height: "34px",
                    fontWeight: 500,
                    letterSpacing: "0.10em",
                    textAlign: "center",
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                    color: "#144DB1",
                  }}
                >
                  Leakage
                </p>
              </Link>
              <Link
                className="flex flex-col items-center justify-center gap-1"
                style={{
                  backgroundColor: "#FFFFFF33",
                  width: "216px",
                  height: "113px",
                  borderRadius: "20px",
                  position: "relative",
                  boxShadow: `0px 4px 4px 0px #00000040`,
                }}
                href={""}
              >
                <div
                  className="flex flex-col items-center justify-center rounded-full p-2 w-16 h-16"
                  style={{ backgroundColor: "#0162B31A" }}
                >
                  <Image src={water_meter_logo} alt={""} width={80} height={80} />
                </div>
                <div
                  style={{
                    backgroundImage: "url(/module-bg-image.png)",
                    backgroundSize: "cover",
                    opacity: 0.5,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                    zIndex: -1,
                  }}
                />
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "16.94px",
                    width: "187px",
                    height: "34px",
                    fontWeight: 500,
                    letterSpacing: "0.10em",
                    textAlign: "center",
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                    color: "#144DB1",
                  }}
                >
                  Water Meter
                </p>
              </Link>
              <Link
                className="flex flex-col items-center justify-center gap-1"
                style={{
                  backgroundColor: "#FFFFFF33",
                  width: "216px",
                  height: "113px",
                  borderRadius: "20px",
                  position: "relative",
                  boxShadow: `0px 4px 4px 0px #00000040`,
                }}
                href={""}
              >
                <div
                  className="flex flex-col items-center justify-center rounded-full p-2 w-16 h-16"
                  style={{ backgroundColor: "#0162B31A" }}
                >
                  <Image src={water_test_logo} alt={""} width={80} height={80} />
                </div>
                <div
                  style={{
                    backgroundImage: "url(/module-bg-image.png)",
                    backgroundSize: "cover",
                    opacity: 0.5,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                    zIndex: -1,
                  }}
                />
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "16.94px",
                    width: "187px",
                    height: "34px",
                    fontWeight: 500,
                    letterSpacing: "0.10em",
                    textAlign: "center",
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                    color: "#144DB1",
                  }}
                >
                  Water Test
                </p>
              </Link>
              <Link
                className="flex flex-col items-center justify-center gap-1"
                style={{
                  backgroundColor: "#FFFFFF33",
                  width: "216px",
                  height: "113px",
                  borderRadius: "20px",
                  position: "relative",
                  boxShadow: `0px 4px 4px 0px #00000040`,
                }}
                href={""}
              >
                <div
                  className="flex flex-col items-center justify-center rounded-full p-2 w-16 h-16"
                  style={{ backgroundColor: "#0162B31A" }}
                >
                  <Image src={others} alt={""} width={80} height={80} />
                </div>
                <div
                  style={{
                    backgroundImage: "url(/module-bg-image.png)",
                    backgroundSize: "cover",
                    opacity: 0.5,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                    zIndex: -1,
                  }}
                />
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "16.94px",
                    width: "187px",
                    height: "34px",
                    fontWeight: 500,
                    letterSpacing: "0.10em",
                    textAlign: "center",
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                    color: "#144DB1",
                  }}
                >
                  Others
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
