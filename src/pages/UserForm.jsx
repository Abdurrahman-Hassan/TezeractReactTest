import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import Sidebar from "../components/sidebar";

const UserForm = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [role, setRole] = useState("");
  const [roleEnabled, setRoleEnabled] = useState(false);

  const handleRoleCheckboxChange = (e) => {
    setRoleEnabled(e.target.checked);
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "gwkkdcbb");
    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dghninzud/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        setProfilePicture(data.url);
      } else {
        console.error("Upload failed. Server returned:", response);
      }
    } catch (error) {
      console.error("Error during upload:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const formData = {
        profilePicture,
        userName,
        phoneNumber,
        email,
        preferredTime,
        role,
      };

      const existingFormData = JSON.parse(localStorage.getItem("Data")) || [];

      existingFormData.push(formData);

      localStorage.setItem("Data", JSON.stringify(existingFormData));

      alert("Form has been submited successfully.");
    } catch (error) {
      alert("There's some error while submiting the form!");
    }
  };

  return (
    <div className="lg:flex lg:flex-row flex lg:justify-start items-center lg:h-[100vh] lg:gap-[17px]">
      <Sidebar />
      <div className="w-[100vw]">
        <div className="flex  flex-row justify-center lg:justify-start items-center content-center lg:h-[100vh] lg:gap-[17px]">
          <div className="bg-white lg:w-[80vw] w-[90vw] flex flex-col justify-center lg:items-start pl-[20px] lg:block lg:pl-[43px] pt-[27px] lg:h-[95vh] mt-[50px] md:lg:m-0">
            <h1 className="text-[20px] md:lg:text-[23px] mb-3 lg:mb-0">
              User form
            </h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="profilepicture" className="mb-[14px]">
                  Upload profile picture
                </label>
                <div className="border-2 border-dashed border-gray-400 w-40 h-20 flex items-center justify-center cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    id="fileInput"
                    name="profilepicture"
                    className="opacity-0 absolute"
                    onChange={handleFileChange}
                  />
                  <span className=" cursor-pointer w-[81px] h-[31px] text-[11px] bg-grey flex flex-row justify-center items-center text-center gap-2">
                    <IoIosAdd /> Browse
                  </span>
                </div>
                <div className="text-[#666] text-[12px]">
                  <p>PNG, JPEG, JPG</p>
                </div>
              </div>
              <div className="flex lg:flex-row lg:gap-20 flex-col">
                <div>
                  {" "}
                  <div className="flex flex-col lg:w-[30vw] w-[300px] mt-[33px] gap-[8px]">
                    <label htmlFor="uname" className="text-[12px] font-[#666]">
                      User name
                    </label>
                    <input
                      maxLength={18}
                      required
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      id="userName"
                      name="userName"
                      placeholder="Enter Username"
                      className="border-grey border-2 rounded-md h-[24px] p-[16px]"
                    />
                  </div>{" "}
                  <div className="flex flex-col lg:w-[30vw] w-[300px] mt-[33px] gap-[8px]">
                    <label htmlFor="uname" className="text-[12px] font-[#666]">
                      Enter your phone number
                    </label>
                    <input
                      maxLength={13}
                      minLength={11}
                      type="tel"
                      id="phoneNumber"
                      required
                      name="phoneNumber"
                      placeholder="Enter phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="border-grey border-2 rounded-md h-[24px] p-[16px]"
                    />
                  </div>
                </div>
                <div>
                  {" "}
                  <div className="flex flex-col lg:w-[30vw] w-[300px] mt-[33px] gap-[8px]">
                    <label htmlFor="uname" className="text-[12px] font-[#666]">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="email"
                      name="email"
                      placeholder="Enter Email"
                      className="border-grey border-2 rounded-md h-[24px] p-[16px]"
                    />
                  </div>{" "}
                  <div className="flex flex-col lg:w-[30vw] w-[300px] mt-[33px] gap-[8px]">
                    <label htmlFor="uname" className="text-[12px] font-[#666]">
                      Interview preferred time
                    </label>
                    <select
                      className="border-grey border-2 rounded-md h-[36px] pl-2"
                      value={preferredTime}
                      required
                      name="preferredTime"
                      onChange={(e) => setPreferredTime(e.target.value)}
                    >
                      {" "}
                      <option value="" className="text-[#666] italic">
                        Select preferred time
                      </option>
                      <option
                        value="morning"
                        className="bg-purple hover:bg-purple text-white accent-purple"
                      >
                        Morning
                      </option>
                      <option
                        value="afternoon"
                        className="bg-purple hover:bg-purple text-white accent-purple"
                      >
                        Afternoon
                      </option>
                      <option
                        value="evening"
                        className="bg-purple hover:bg-purple text-white accent-purple"
                      >
                        Evening
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-[16px] items-center content-center mt-[30px]">
                <label className="switch">
                  <input
                    type="checkbox"
                    onChange={handleRoleCheckboxChange}
                    checked={roleEnabled}
                  />
                  <span className="slider round"></span>
                </label>
                <p>Select Your Role (optional)</p>
              </div>
              <div className="flex lg:flex-row gap-4 lg:gap-[20px] mt-[30px] flex-wrap">
                <div className="flex flex-row gap-1 lg:gap-[16px] ">
                  <input
                    type="radio"
                    id="student"
                    name="role"
                    onChange={(e) => setRole(e.target.value)}
                    value="student"
                    className="accent-purple"
                    disabled={!roleEnabled}
                  />
                  <label htmlFor="student">Student</label>
                </div>{" "}
                <div className="flex flex-row gap-[16px]">
                  <input
                    type="radio"
                    id="teacher"
                    onChange={(e) => setRole(e.target.value)}
                    name="role"
                    disabled={!roleEnabled}
                    value="teacher"
                    className="accent-purple"
                  />
                  <label htmlFor="teacher">Teacher</label>
                </div>{" "}
                <div className="flex flex-row gap-[16px]">
                  <input
                    type="radio"
                    id="other"
                    disabled={!roleEnabled}
                    name="role"
                    onChange={(e) => setRole(e.target.value)}
                    value="other"
                    className="accent-purple"
                  />
                  <label htmlFor="other">Other</label>
                </div>
              </div>
              <div className="flex flex-row justify-end items-center h-[100px] ">
                <button
                  type="submit"
                  className="bg-purple text-white w-[140px] p-[10px] mr-[150px]"
                >
                  ADD USER
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
