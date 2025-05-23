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
            src="https://cloud.appwrite.io/v1/storage/buckets/669ab7a30037bce22e5e/files/67cdf5e00012ef184eec/view?project=66998c41001a110db1b6&mode=admin"
            alt="Large"
            className="object-contain w-full h-[400px] rounded-xl"
          />
          <img src="" alt="" />
        </div>
      </div>

      <div className="justify-between hidden md:grid grid-cols-5 gap-4">
        <img
          src="https://cloud.appwrite.io/v1/storage/buckets/669ab7a30037bce22e5e/files/6714129800332e09163f/view?project=66998c41001a110db1b6&project=66998c41001a110db1b6&mode=admin"
          alt="1"
          className="h-48 w-full object-cover rounded-tl-full col-span-1"
        />
        <img
          src="https://cloud.appwrite.io/v1/storage/buckets/66d7412a00285bc117f7/files/6713fdbb001a2a3e8f05/view?project=66998c41001a110db1b6&project=66998c41001a110db1b6&mode=admin"
          alt="2"
          className="h-48 w-full object-cover col-span-1"
        />

        <img
          src="https://fra.cloud.appwrite.io/v1/storage/buckets/66d7412a00285bc117f7/files/6713fde100259a13c009/view?project=66998c41001a110db1b6&mode=admin"
          alt="3"
          className="h-48 w-full object-cover col-span-1"
        />

        <img
          src="https://fra.cloud.appwrite.io/v1/storage/buckets/66d7412a00285bc117f7/files/6713f439001202a08b1b/view?project=66998c41001a110db1b6&mode=admin"
          alt="4"
          className="h-48 w-full object-cover col-span-1"
        />
        
        <img
          src="https://fra.cloud.appwrite.io/v1/storage/buckets/66d7412a00285bc117f7/files/6713fe140010b5906fba/view?project=66998c41001a110db1b6&mode=admin"
          alt="5"
          className="h-48 w-full object-cover rounded-br-full col-span-1"
        />
      </div>
    </div>
  );
};

export default Cover;
