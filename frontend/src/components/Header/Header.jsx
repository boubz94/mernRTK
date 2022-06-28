import React from "react";

function Header() {
  return (
    <>
      <header>
        <div className="flex items-center bg-red-400 p-1 flex-grow py-2">
          <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 ">
            <img
              src="https://previews.123rf.com/images/lumut/lumut1511/lumut151100241/47787394-falcon-logo-template.jpg"
              alt=""
              width={100}
              height={100}
              objectFit="contain"
              className="cursor-pointer content-center  "
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
