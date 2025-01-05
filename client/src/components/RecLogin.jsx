import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

function RecLogin() {
  const { isShowLogin, setIsShowLogin } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [passVisible, setPassVisible] = useState(false);
  const [state, setState] = useState("login"); // Default mode is 'login'
  const [secondStep, setSecondStep] = useState(false);
  const [image, setImage] = useState(null);

  return (
    <>
      {isShowLogin && (
        <div className="absolute z-30 w-full h-full top-0 left-0 right-0 bottom-0 backdrop-blur-sm bg-black/30 flex justify-center items-center px-4 md:px-10">
          <form className="md:p-10 p-6 border min-w-[300px] bg-white rounded-xl relative">
            <img
              className="absolute top-4 right-4 cursor-pointer"
              src={assets.cross_icon}
              alt="logo"
              onClick={() => setIsShowLogin(false)}
            />
            <h2 className="text-center text-lg ">
              {state === "login" ? "Recruiter Login" : "Recruiter Sign up"}
            </h2>
            <h4 className="text-center text-sm mt-1 text-gray-400">
              {state === "login"
                ? "Sign in to continue"
                : "Please create an account to continue"}
            </h4>

            {/* First Step */}
            {!secondStep && (
              <>
                {state === "signup" && (
                  <div className="flex items-center border rounded-full p-2 mt-6">
                    <img src={assets.email_icon} alt="icon" />
                    <input
                      type="text"
                      required
                      name="companyName"
                      id="companyName"
                      className="bg-transparent outline-none ml-2 focus:no-underline text-sm"
                      placeholder="Enter Company name"
                      onChange={(e) => setCompany(e.target.value)}
                      value={company}
                    />
                  </div>
                )}
                <div className="flex items-center border rounded-full p-2 mt-6">
                  <img src={assets.email_icon} alt="icon" />
                  <input
                    type="email"
                    required
                    name="email"
                    id="email"
                    className="bg-transparent outline-none ml-2 focus:no-underline text-sm"
                    placeholder="Enter Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="relative flex items-center border rounded-full p-2 mt-4">
                  <img src={assets.lock_icon} alt="icon" />
                  <input
                    type={passVisible ? "text" : "password"}
                    required
                    name="password"
                    id="password"
                    className="bg-transparent outline-none ml-2 focus:no-underline text-sm"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    onClick={() => setPassVisible((prev) => !prev)}
                    className="absolute top-[5px] right-2 cursor-pointer"
                  >
                    {passVisible ? <>👁</> : <>😑</>}
                  </span>
                </div>

                <button
                  className="w-full py-[7px] bg-blue-500 mt-4 rounded-full text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    setSecondStep(true);
                  }}
                >
                  {state === "signup" ? "Continue" : "Login"}
                </button>
              </>
            )}

            {/* Second Step */}
            {secondStep && state === "signup" && (
              <div className="">
                <div className="my-6 flex flex-col items-center gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={image ? image : assets.person_icon}
                      alt="icon"
                      className="w-10 h-10"
                    />
                    <h3>Company Logo</h3>
                  </div>

                  <label htmlFor="image" className="cursor-pointer">
                    <span className="text-white mt-10 bg-black px-3 py-[4px] rounded-md text-sm">
                      Select Image
                    </span>
                    <input
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      className="hidden" // Hide the input
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = () => {
                            setImage(reader.result); // Set the base64 string as the image
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </label>
                </div>

                <button
                  className="w-full py-[7px] bg-blue-500 mt-4 rounded-full text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Sign up completed!");
                  }}
                >
                  Sign up
                </button>
              </div>
            )}

            {/* Switch between login and signup */}
            <p className="mt-4 text-center text-sm">
              {state === "login" ? (
                <>
                  Don't have an account?{" "}
                  <a
                    href="#"
                    className="text-blue-500 underline underline-offset-1"
                    onClick={() => {
                      setState("signup");
                      setSecondStep(false);
                    }}
                  >
                    Sign up
                  </a>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <a
                    href="#"
                    className="text-blue-500 underline underline-offset-1"
                    onClick={() => {
                      setState("login");
                      setSecondStep(false);
                    }}
                  >
                    Sign in
                  </a>
                </>
              )}
            </p>
          </form>
        </div>
      )}
    </>
  );
}

export default RecLogin;
