import React from "react";
import secondary from "../images/secondary.jpg";

const Cover = () => {
  return (
    <div className="gap-4 p-4 md:flex md:flex-col">
      <div className="flex items-stretch justify-between w-full" id="main">
        <div
          className="flex flex-col flex-1 gap-2 text-5xl font-bold tracking-widest uppercase md:text-8xl"
          id="srf"
        >
          <div>
            <span className="text-orange-500">S</span>tudent
          </div>
          <div>
            <span className="text-orange-500">R</span>esearch
          </div>
          <div>
            <span className="text-orange-500">F</span>orum
          </div>
          <div className="mx-100">SMU</div>
        </div>

        <div className=" flex-1 hidden md:flex items-end">
          <img
            src="https://cloud.appwrite.io/v1/storage/buckets/669ab7a30037bce22e5e/files/67169590000a61cff086/view?project=66998c41001a110db1b6&project=66998c41001a110db1b6&mode=admin"
            alt="Large"
            className="object-contain w-full h-[400px] rounded-xl"
          />
          <img src="" alt="" />
        </div>
      </div>

      <div className="justify-between hidden md:grid grid-cols-5 gap-4">
        <img
          src="https://smu.edu.in/content/dam/manipal/smu/Research/Banner-SRF-001.png"
          alt="1"
          className="h-48 w-full object-cover rounded-tl-full col-span-1"
        />
        <img
          src={secondary}
          alt="2"
          className="h-48 w-full object-cover col-span-1"
        />

        <img
          src="https://cloud.appwrite.io/v1/storage/buckets/66d7412a00285bc117f7/files/6713ffb800088c2d9d8e/preview?project=66998c41001a110db1b6"
          alt="3"
          className="h-48 w-full object-cover col-span-1"
        />

        <img
          src="https://smu.edu.in/content/dam/manipal/smu/Research/Banner-SRF-001.png"
          alt="5"
          className="h-48 w-full object-cover rounded-br-full col-span-2"
        />
      </div>
    </div>
  );
};

export default Cover;
