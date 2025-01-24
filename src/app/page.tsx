import Link from "next/link";
import { ModuleHeader } from "./(main)/components/ModuleHeader";

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
              opacity: 0.5,
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
                className="flex flex-col items-center"
                style={{
                  backgroundColor: "#FFFFFF33",
                  width: "216px",
                  height: "113px",
                  borderRadius: "20px",
                  position: "relative",
                  paddingTop: "70px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingBottom: "15px",
                  boxShadow: `0px 4px 4px 0px #00000040`,
                }}
                href={"/srms"}
              >
                <div
                  style={{
                    // backgroundImage: "url(/module-bg-image.png)",
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
                  Service Request Management System
                </p>
              </Link>
              <Link
                className="flex flex-col items-center"
                style={{
                  backgroundColor: "#FFFFFF33",
                  width: "216px",
                  height: "113px",
                  borderRadius: "20px",
                  position: "relative",
                  paddingTop: "70px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingBottom: "15px",
                  boxShadow: `0px 4px 4px 0px #00000040`,
                }}
                href={""}
              >
                <div
                  style={{
                    // backgroundImage: "url(/module-bg-image.png)",
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
                  Pressure Management
                </p>
              </Link>
              <Link
                className="flex flex-col items-center"
                style={{
                  backgroundColor: "#FFFFFF33",
                  width: "216px",
                  height: "113px",
                  borderRadius: "20px",
                  position: "relative",
                  paddingTop: "70px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingBottom: "15px",
                  boxShadow: `0px 4px 4px 0px #00000040`,
                }}
                href={""}
              >
                <div
                  style={{
                    // backgroundImage: "url(/module-bg-image.png)",
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
                  Valve Management
                </p>
              </Link>
              <Link
                className="flex flex-col items-center"
                style={{
                  backgroundColor: "#FFFFFF33",
                  width: "216px",
                  height: "113px",
                  borderRadius: "20px",
                  position: "relative",
                  paddingTop: "70px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingBottom: "15px",
                  boxShadow: `0px 4px 4px 0px #00000040`,
                }}
                href={""}
              >
                <div
                  style={{
                    // backgroundImage: "url(/module-bg-image.png)",
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
                  District Metering Area Management
                </p>
              </Link>
              <Link
                className="flex flex-col items-center"
                style={{
                  backgroundColor: "#FFFFFF33",
                  width: "216px",
                  height: "113px",
                  borderRadius: "20px",
                  position: "relative",
                  paddingTop: "70px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingBottom: "15px",
                  boxShadow: `0px 4px 4px 0px #00000040`,
                }}
                href={""}
              >
                <div
                  style={{
                    // backgroundImage: "url(/module-bg-image.png)",
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
                  Leak Detection Monitoring
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
