import React from "react";

const Header = () => {
  return (
    <div className="flex flex-wrap container justify-center items-center gap-10 mt-10 m-auto ">
      <div className="   cursor-pointer">
        <div className="content flex flex-col font-bold justify-center w-[15rem] min-h-[20rem] mt-5 p-5 items-center bg-black rounded-xl ">
          <img
            className={`mb-5 w-auto h-[8rem] object-cover`}
            src="https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqNEFqtyO35PobzIExXrItvsTQKkojUfGoo7GE11KFm9eW39Q6FjcBXwOuXGEZnVJ0lFoNOB29WjbApDtVI5uV5IQC3qCpkzNRU9m7jxymhKV1Yt%25vqwJjyLRZQDYaxFkErH19nin8wDo3oiZWeZM4FlIJTg92g26PDpcNSeWuyjtsd4stcUfgLyXGEPimJ0leIVOB2sQ5bApUtwI5uLoxQC3aM3kzNHzxm7j8ejhKViYh%25vq4rjyLRgYDYax%250qrH1yM%25n8wYV4oiZr%25NM4FnTrTg95vp6PDCroSeWzQStsd8hQcUfiLfXGE4nYJ0lg6ZOB2f8FbApEPCI5ul6xQC32ErkzNplum7juhShKVHXt%25vq8cXyr%25kWfDFQJ0lCrnOIJRdAbQOX0bI5ug1J0nuHwOBX9BZbAJDuFI5gul9QCPGmDkzeL%25Wm7hjudhK%25h4f%25vycDEyLYXrlYarZa2rHnFwpn8oKUuoiMvl3Mk5bHlqGeAN5ksQD4T4FNgiaSSszq7Pfg7jdKzAyAFiFX8QmcaJ86US72g7&imgt=P27&bkgnd=9&pov=BE040&uni=c&im=Crop,rect=(0,-25,1370,770),gravity=Center;Resize,width=350"
            alt="img"
          />
          <div className="flex flex-col text-center p-2 font-bold  bg-slate-50 rounded-xl text-sm ">
            <h2 className=" text-sm text-black">A-Serisi</h2>
          </div>
          <div>
            <a
              href="https://www.mercedes-benz.com.tr/passengercars/mercedes-benz-cars/models/a-class/hatchback/explore.html"
              target="_blank"
            >
              <button className="flex items-center bg-gray-200 py-2 px-5 mt-10 hover:bg-red-500 hover:text-white hover:scale-125 duration-300 rounded-md">
                Keşfedin
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
