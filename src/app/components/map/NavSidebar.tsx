"use client";

import { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

import { Button } from "@mapstudio/lib/components/ui";

const NavSidebar: FunctionComponent = () => {
  return (
    <div className="sidebar bg-white py-8 px-4 h-screen">
      <div className="grid grid-cols-1 gap-10 px-2">
        <button className="">
          <FontAwesomeIcon
            icon={faLocationArrow}
            className="text-slate-500 active:text-blue-600 hover:text-blue-600 fa-xl"
          />
        </button>

        <button>
          <FontAwesomeIcon
            icon={faHouse}
            className="text-slate-500 active:text-blue-600 hover:text-blue-600 fa-xl"
          />
        </button>

        <button>
          <FontAwesomeIcon
            icon={faLayerGroup}
            className="text-slate-500 active:text-blue-600 hover:text-blue-600 fa-xl"
          />
        </button>

        <button>
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-slate-500 active:text-blue-600 hover:text-blue-600 fa-xl"
          />
        </button>

        <button>
          <FontAwesomeIcon
            icon={faCompass}
            className="text-slate-500 active:text-blue-600 hover:text-blue-600 fa-xl"
          />
        </button>

        <button>
          <FontAwesomeIcon
            icon={faGear}
            className="text-slate-500 active:text-blue-600 hover:text-blue-600 fa-xl"
          />
        </button>
      </div>
    </div>
  );
};

export default NavSidebar;
