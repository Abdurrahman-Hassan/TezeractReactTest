import { useState } from "react";
import Sidebar from "../components/sidebar";

const UserTable = () => {
  const [entries, setEntries] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const allUsers = JSON.parse(localStorage.getItem("Data")) || [];
  const totalEntries = allUsers.length;
  const totalPages = Math.ceil(totalEntries / entries);

  const startIndex = (currentPage - 1) * entries;
  const users = allUsers.slice(startIndex, startIndex + entries);

  const handleEntriesChange = (e) => {
    const inputVal = e.target.value;
    if (inputVal === "" || isNaN(inputVal) || parseInt(inputVal) <= 0) {
      setEntries(10);
    } else {
      setEntries(parseInt(inputVal));
    }
    setCurrentPage(1);
  };

  const renderPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <span
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`cursor-pointer ${
            currentPage === i ? "font-bold" : "font-normal"
          }`}
        >
          {i}
        </span>
      );
    }
    return pages;
  };

  return (
    <div className="lg:flex lg:flex-row flex lg:justify-start items-center lg:h-[100vh] lg:gap-[17px]">
      <Sidebar />
      <div className="w-[100vw]">
        <div className="flex flex-row justify-center lg:justify-start items-center content-center lg:h-[100vh] lg:gap-[17px]">
          <div className="bg-white overflow-y-scroll lg:w-[80vw] w-[90vw] flex flex-col justify-center lg:items-start pl-[20px] lg:block lg:pl-[43px] pt-[27px] lg:h-[95vh] mt-[50px] md:lg:m-0">
            <h1 className="text-[20px] md:lg:text-[23px] mb-3 lg:mb-8">
              User Table
            </h1>
            {users.length > 0 ? (
              <div className="  ">
                <div className="">
                  <p>
                    Showing{" "}
                    <span>
                      <input
                        type="number"
                        className="border-2 border-grey w-[60px] p-[5px]"
                        value={entries}
                        onChange={handleEntriesChange}
                      />
                    </span>{" "}
                    entries
                  </p>
                </div>
                <div className="">
                  <div className="overflow-x-auto w-full lg:w-11/12 mt-8 ">
                    <table className="min-w-full bg-white rounded-lg">
                      <thead className="">
                        <tr className="bg-white text-[#566A7F]">
                          <th className="py-3 px-4 text-left">No.</th>
                          <th className="py-3 px-4 text-left">Email</th>
                          <th className="py-3 px-4 text-left">Name</th>
                          <th className="py-3 px-4 text-left">Phone No</th>
                          <th className="py-3 px-4 text-left">
                            Interview Timings
                          </th>
                          <th className="py-3 px-4 text-left">Role</th>
                          <th className="py-3 px-4 text-left">Active</th>
                        </tr>
                      </thead>
                      <tbody className="">
                        {users.map((user, index) => (
                          <tr
                            key={index}
                            className={`${
                              index % 2 === 0 ? "bg-gray-100" : "bg-white"
                            } text-[#798899]`}
                          >
                            <td className="py-3 px-4">{index + 1}</td>
                            <td className="py-3 px-4">{user.email}</td>
                            <td className="py-3 px-4 flex flex-row gap-2">
                              <img
                                src={user.profilePicture}
                                alt="profilePicture"
                                className="w-[30px] h-[30px] rounded-full"
                              />
                              {user.userName}
                            </td>
                            <td className="py-3 px-4">{user.phoneNumber}</td>
                            <td className="py-3 px-4">{user.preferredTime}</td>
                            <td className="py-3 px-4">{user?.role}</td>
                            <td className="py-3 px-4">
                              <label className="switch relative">
                                <input type="checkbox" className="hidden" />
                                <span className="slider round absolute cursor-pointer"></span>
                              </label>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-4 lg:w-[55vw] mt-8 lg:mb-8">
                    <p className="mb-2 lg:mb-0 ">
                      Showing {startIndex + 1} to {startIndex + users.length} of{" "}
                      {totalEntries} entries
                    </p>
                    <div className="page flex gap-2">{renderPages()}</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-[100%] h-[50vh] flex justify-center items-center">
                <h4>No User Found</h4>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
