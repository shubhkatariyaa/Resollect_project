// import React, { useState } from "react";
// import {
//   FaUserCircle, FaSort, FaFilter, FaHome,
//   FaBriefcase, FaBell, FaStickyNote, FaHammer,
//   FaCloudUploadAlt, FaTools, FaUserCog, FaShieldAlt,
//   FaChevronDown
// } from "react-icons/fa";

// // const Sidebar = () => {
// //   return (
// //     <div className="w-64 h-screen bg-white shadow-md p-5">
// //       <div className="flex items-center mb-4">
// //         <img src="..\resollect_logo.jpg" alt="Company Logo" className="w-10 h-10 mr-2" />
// //         <h1 className="text-4xl font-bold text-blue-900">esollect</h1>
// //       </div>
// //       <ul className="space-y-4">
// //         {[
// //           { name: "Dashboard", icon: <FaHome /> },
// //           { name: "Portfolio", icon: <FaBriefcase /> },
// //           { name: "Notifications", icon: <FaBell /> },
// //           { name: "Notices", icon: <FaStickyNote /> },
// //           { name: "Auction", icon: <FaHammer /> },
// //           { name: "Data Upload", icon: <FaCloudUploadAlt /> },
// //           { name: "Control Panel", icon: <FaTools /> },
// //           { name: "User Management", icon: <FaUserCog /> },
// //           { name: "Permissions", icon: <FaShieldAlt /> }
// //         ].map((item) => (
// //           <li key={item.name} className="p-2 hover:bg-sky-200 rounded cursor-pointer flex items-center">
// //             <span className="mr-2">{item.icon}</span> {item.name}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
    
// //   );
// // };
// const Sidebar = () => {
//   return (
//     <div className="w-64 h-screen bg-white shadow-md p-5 flex flex-col justify-between">
//       <div>
//         <div className="flex items-center mb-4">
//           <img src="../resollect_logo.jpg" alt="Company Logo" className="w-10 h-10 mr-2" />
//           <h2 className="text-3xl font-bold text-blue-900">esollect</h2>
//         </div>
//         <ul className="space-y-4">
//           {[
//             { name: "Dashboard", icon: <FaHome /> },
//             { name: "Portfolio", icon: <FaBriefcase /> },
//             { name: "Notifications", icon: <FaBell /> },
//             { name: "Notices", icon: <FaStickyNote /> },
//             { name: "Auction", icon: <FaHammer /> },
//             { name: "Data Upload", icon: <FaCloudUploadAlt /> },
//             { name: "Control Panel", icon: <FaTools /> },
//             { name: "User Management", icon: <FaUserCog /> },
//             { name: "Permissions", icon: <FaShieldAlt /> }
//           ].map((item) => (
//             <li key={item.name} className="p-2 hover:bg-sky-200 rounded cursor-pointer flex items-center">
//               <span className="mr-2">{item.icon}</span> {item.name}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="flex items-center justify-center border-t pt-4 mt-4">
//         <span className="text-gray-500 text-sm">Powered by</span>
//         <img src="../resollect_logo.jpg" alt="Esollect Logo" className="w-6 h-6 mx-2" />
//         <span className="text-blue-900 font-bold">esollect</span>
//       </div>
//     </div>
//   );
// };
// const Header = () => {
//   return (
//     <div className="flex justify-between items-center p-4 shadow-md bg-white">
//       <div className="flex items-center"></div>
//       <div className="flex items-center space-x-2">
//         <FaUserCircle className="text-gray-700 text-xl" />
//         <div className="flex flex-col items-end">
//           <span className="text-gray-700 font-bold">Shubham</span>
//           <span className="text-gray-500 text-sm">shubkatariya3@gmail.com</span>
//         </div>
//         <FaChevronDown className="text-gray-700 text-sm" />
//       </div>
//     </div>
//   );
// };

// const FilterSection = () => {
//   return (
//     <div className="flex space-x-2 mt-4">
//       {["All", "Pre Sarfaesi", "NPA", "13(2) Responses", "Symbolic Possession", "DM Order", "Physical Possessions", "Auctions"].map((filter) => (
//         <button key={filter} className="px-4 py-2 bg-gray-200 rounded hover:bg-sky-300">
//           {filter}
//         </button>
//       ))}
//     </div>
//   );
// };

// const Table = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const entriesPerPage = 10;

//   const data =  [
//     { loanNo: "L28U3247", loanType: "Home Loan", borrower: "Vedika Sachar", borrowerAddress: "83 Yogi Ganj", coBorrower: "Divit Vora", coBorrowerAddress: "24/543 Acharya Path", currentDPD: 91, amount: "₹ 1934068", region: "West", state: "Uttar Pradesh" },
//       { loanNo: "L28U3243", loanType: "Car Loan", borrower: "Hrishita Agrawal", borrowerAddress: "86/622 Deo Path", coBorrower: "Mahika Tak", coBorrowerAddress: "58 Tela Road", currentDPD: 90, amount: "₹ 1842143", region: "North", state: "Madya Pradesh" },
//       { loanNo: "L28U3247", loanType: "Home Loan", borrower: "Vedika Sachar", borrowerAddress: "83 Yogi Ganj", coBorrower: "Divit Vora", coBorrowerAddress: "24/543 Acharya Path", currentDPD: 91, amount: "₹ 1934068", region: "West", state: "Uttar Pradesh" },
//       { loanNo: "L28U3243", loanType: "Car Loan", borrower: "Hrishita Agrawal", borrowerAddress: "86/622 Deo Path", coBorrower: "Mahika Tak", coBorrowerAddress: "58 Tela Road", currentDPD: 90, amount: "₹ 1842143", region: "North", state: "Madya Pradesh" },
//       { loanNo: "L28U3247", loanType: "Home Loan", borrower: "Vedika Sachar", borrowerAddress: "83 Yogi Ganj", coBorrower: "Divit Vora", coBorrowerAddress: "24/543 Acharya Path", currentDPD: 91, amount: "₹ 1934068", region: "West", state: "Uttar Pradesh" },
//       { loanNo: "L28U3243", loanType: "Car Loan", borrower: "Hrishita Agrawal", borrowerAddress: "86/622 Deo Path", coBorrower: "Mahika Tak", coBorrowerAddress: "58 Tela Road", currentDPD: 90, amount: "₹ 1842143", region: "North", state: "Madya Pradesh" },
//       { loanNo: "L28U3247", loanType: "Home Loan", borrower: "Vedika Sachar", borrowerAddress: "83 Yogi Ganj", coBorrower: "Divit Vora", coBorrowerAddress: "24/543 Acharya Path", currentDPD: 91, amount: "₹ 1934068", region: "West", state: "Uttar Pradesh" },
//       { loanNo: "L28U3243", loanType: "Car Loan", borrower: "Hrishita Agrawal", borrowerAddress: "86/622 Deo Path", coBorrower: "Mahika Tak", coBorrowerAddress: "58 Tela Road", currentDPD: 90, amount: "₹ 1842143", region: "North", state: "Madya Pradesh" },
//       { loanNo: "L28U3247", loanType: "Home Loan", borrower: "Vedika Sachar", borrowerAddress: "83 Yogi Ganj", coBorrower: "Divit Vora", coBorrowerAddress: "24/543 Acharya Path", currentDPD: 91, amount: "₹ 1934068", region: "West", state: "Uttar Pradesh" },
//       { loanNo: "L28U3243", loanType: "Car Loan", borrower: "Hrishita Agrawal", borrowerAddress: "86/622 Deo Path", coBorrower: "Mahika Tak", coBorrowerAddress: "58 Tela Road", currentDPD: 90, amount: "₹ 1842143", region: "North", state: "Madya Pradesh" },
//       { loanNo: "L28U3247", loanType: "Home Loan", borrower: "Somya Sachar", borrowerAddress: "83 Yogi Ganj", coBorrower: "Divit Vora", coBorrowerAddress: "24/543 Acharya Path", currentDPD: 91, amount: "₹ 1934068", region: "West", state: "Uttar Pradesh" },
//       { loanNo: "L28U3243", loanType: "Car Loan", borrower: "Srinivas Agrawal", borrowerAddress: "86/622 Deo Path", coBorrower: "Mahika Tak", coBorrowerAddress: "58 Tela Road", currentDPD: 90, amount: "₹ 1842143", region: "North", state: "Madya Pradesh" },
//   ];

//   // Pagination Logic
//   const indexOfLastEntry = currentPage * entriesPerPage;
//   const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
//   const currentEntries = data.slice(indexOfFirstEntry, indexOfLastEntry);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search Loan Number"
//         className="border p-2 rounded w-full mt-2"
//       />
//       <div className="flex justify-end space-x-2 mt-2">
//         <button className="px-4 py-2 bg-gray-200 rounded hover:bg-sky-300 flex items-center">
//           Select Columns <FaChevronDown className="ml-1" />
//         </button>
//         <button className="px-4 py-2 bg-gray-200 rounded hover:bg-sky-300 flex items-center">
//           <FaFilter className="mr-2" /> More Filters
//         </button>
//       </div>
      
//       <table className="w-full border-collapse border border-gray-200 mt-4">
//         <thead>
//           <tr className="bg-gray-100">
//             {[
//               "Loan No.", "Loan Type", "Borrower", "Borrower Address",
//               "Co Borrower 1 Name", "Co Borrower 1 Address", "Current DPD",
//               "Sanction Amount", "Region", "State"
//             ].map((col) => (
//               <th key={col} className="border px-3 py-2 cursor-pointer whitespace-nowrap">
//                 <span className="flex items-center gap-1">
//                   {col}
//                   <FaSort />
//                 </span>
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {currentEntries.map((row, index) => (
//             <tr key={index} className="text-center hover:bg-sky-50">
//               <td className="border px-3 py-2 text-blue-500 cursor-pointer">{row.loanNo}</td>
//               <td className="border px-3 py-2">{row.loanType}</td>
//               <td className="border px-3 py-2">{row.borrower}</td>
//               <td className="border px-3 py-2">{row.borrowerAddress}</td>
//               <td className="border px-3 py-2">{row.coBorrower}</td>
//               <td className="border px-3 py-2">{row.coBorrowerAddress}</td>
//               <td className="border px-3 py-2">{row.currentDPD}</td>
//               <td className="border px-3 py-2">{row.amount}</td>
//               <td className="border px-3 py-2">{row.region}</td>
//               <td className="border px-3 py-2">{row.state}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Pagination Controls */}
//       <div className="flex justify-end space-x-2 mt-4">
//         <button
//           className={`px-4 py-2 rounded ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-sky-300"}`}
//           disabled={currentPage === 1}
//           onClick={() => setCurrentPage(currentPage - 1)}
//         >
//           Previous
//         </button>
//         <button
//           className={`px-4 py-2 rounded ${currentPage * entriesPerPage >= data.length ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-sky-300"}`}
//           disabled={currentPage * entriesPerPage >= data.length}
//           onClick={() => setCurrentPage(currentPage + 1)}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// const Dashboard = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <Header />
//         <div className="p-5">
//           <h2 className="text-2xl font-bold">Portfolio</h2>
//           <FilterSection />
//           <Table />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useState } from "react";
// import { 
//   FaUserCircle, FaSort, FaFilter, FaHome, 
//   FaBriefcase, FaBell, FaStickyNote, FaHammer, 
//   FaCloudUploadAlt, FaTools, FaUserCog, FaShieldAlt, 
//   FaChevronDown 
// } from "react-icons/fa";

// const Sidebar = () => {
//   return (
//     <div className="w-64 h-screen bg-white shadow-md p-5">
//       <div className="flex items-center mb-4">
//         <img src="/logo.png" alt="Company Logo" className="w-10 h-10 mr-2" />
//         <h2 className="text-xl font-bold">Resollect</h2>
//       </div>
//       <ul className="space-y-4">
//         {[
//           { name: "Dashboard", icon: <FaHome /> },
//           { name: "Portfolio", icon: <FaBriefcase /> },
//           { name: "Notifications", icon: <FaBell /> },
//           { name: "Notices", icon: <FaStickyNote /> },
//           { name: "Auction", icon: <FaHammer /> },
//           { name: "Data Upload", icon: <FaCloudUploadAlt /> },
//           { name: "Control Panel", icon: <FaTools /> },
//           { name: "User Management", icon: <FaUserCog /> },
//           { name: "Permissions", icon: <FaShieldAlt /> }
//         ].map((item) => (
//           <li key={item.name} className="p-2 hover:bg-sky-200 rounded cursor-pointer flex items-center">
//             <span className="mr-2">{item.icon}</span> {item.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const Header = () => {
//   return (
//     <div className="flex justify-between items-center p-4 shadow-md bg-white">
//       <div className="flex items-center"></div>
//       <div className="flex items-center space-x-2">
//         <FaUserCircle className="text-gray-700 text-xl" />
//         <div className="flex flex-col items-end">
//           <span className="text-gray-700 font-bold">Shubham</span>
//           <span className="text-gray-500 text-sm">shubkatariya3@gmail.com</span>
//         </div>
//         <FaChevronDown className="text-gray-700 text-sm" />
//       </div>
//     </div>
//   );
// };

// const FilterSection = () => {
//   return (
//     <div className="flex space-x-2 mt-4">
//       {["All", "Pre Sarfaesi", "NPA", "13(2) Responses", "Symbolic Possession", "DM Order", "Physical Possessions", "Auctions"].map((filter) => (
//         <button key={filter} className="px-4 py-2 bg-gray-200 rounded hover:bg-sky-300">
//           {filter}
//         </button>
//       ))}
//     </div>
//   );
// };

// const Table = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const entriesPerPage = 10;

//   const data =  [
//     { loanNo: "L28U3247", loanType: "Home Loan", borrower: "Vedika Sachar", borrowerAddress: "83 Yogi Ganj", coBorrower: "Divit Vora", coBorrowerAddress: "24/543 Acharya Path", currentDPD: 91, amount: "₹ 1934068", region: "West", state: "Uttar Pradesh" },
//       { loanNo: "L28U3243", loanType: "Car Loan", borrower: "Hrishita Agrawal", borrowerAddress: "86/622 Deo Path", coBorrower: "Mahika Tak", coBorrowerAddress: "58 Tela Road", currentDPD: 90, amount: "₹ 1842143", region: "North", state: "Madya Pradesh" },
//       { loanNo: "L28U3247", loanType: "Home Loan", borrower: "Vedika Sachar", borrowerAddress: "83 Yogi Ganj", coBorrower: "Divit Vora", coBorrowerAddress: "24/543 Acharya Path", currentDPD: 91, amount: "₹ 1934068", region: "West", state: "Uttar Pradesh" },
//       { loanNo: "L28U3243", loanType: "Car Loan", borrower: "Hrishita Agrawal", borrowerAddress: "86/622 Deo Path", coBorrower: "Mahika Tak", coBorrowerAddress: "58 Tela Road", currentDPD: 90, amount: "₹ 1842143", region: "North", state: "Madya Pradesh" },
//       { loanNo: "L28U3247", loanType: "Home Loan", borrower: "Vedika Sachar", borrowerAddress: "83 Yogi Ganj", coBorrower: "Divit Vora", coBorrowerAddress: "24/543 Acharya Path", currentDPD: 91, amount: "₹ 1934068", region: "West", state: "Uttar Pradesh" },
//       { loanNo: "L28U3243", loanType: "Car Loan", borrower: "Hrishita Agrawal", borrowerAddress: "86/622 Deo Path", coBorrower: "Mahika Tak", coBorrowerAddress: "58 Tela Road", currentDPD: 90, amount: "₹ 1842143", region: "North", state: "Madya Pradesh" },
//       { loanNo: "L28U3247", loanType: "Home Loan", borrower: "Vedika Sachar", borrowerAddress: "83 Yogi Ganj", coBorrower: "Divit Vora", coBorrowerAddress: "24/543 Acharya Path", currentDPD: 91, amount: "₹ 1934068", region: "West", state: "Uttar Pradesh" },
//       { loanNo: "L28U3243", loanType: "Car Loan", borrower: "Hrishita Agrawal", borrowerAddress: "86/622 Deo Path", coBorrower: "Mahika Tak", coBorrowerAddress: "58 Tela Road", currentDPD: 90, amount: "₹ 1842143", region: "North", state: "Madya Pradesh" },
//       { loanNo: "L28U3247", loanType: "Home Loan", borrower: "Vedika Sachar", borrowerAddress: "83 Yogi Ganj", coBorrower: "Divit Vora", coBorrowerAddress: "24/543 Acharya Path", currentDPD: 91, amount: "₹ 1934068", region: "West", state: "Uttar Pradesh" },
//       { loanNo: "L28U3243", loanType: "Car Loan", borrower: "Hrishita Agrawal", borrowerAddress: "86/622 Deo Path", coBorrower: "Mahika Tak", coBorrowerAddress: "58 Tela Road", currentDPD: 90, amount: "₹ 1842143", region: "North", state: "Madya Pradesh" },
//       { loanNo: "L28U3247", loanType: "Home Loan", borrower: "Somya Sachar", borrowerAddress: "83 Yogi Ganj", coBorrower: "Divit Vora", coBorrowerAddress: "24/543 Acharya Path", currentDPD: 91, amount: "₹ 1934068", region: "West", state: "Uttar Pradesh" },
//       { loanNo: "L28U3243", loanType: "Car Loan", borrower: "Srinivas Agrawal", borrowerAddress: "86/622 Deo Path", coBorrower: "Mahika Tak", coBorrowerAddress: "58 Tela Road", currentDPD: 90, amount: "₹ 1842143", region: "North", state: "Madya Pradesh" },
//   ];

//   // Pagination Logic
//   const indexOfLastEntry = currentPage * entriesPerPage;
//   const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
//   const currentEntries = data.slice(indexOfFirstEntry, indexOfLastEntry);

//   return (
//     <div>
//       <input 
//         type="text" 
//         placeholder="Search Loan Number" 
//         className="border p-2 rounded w-full mt-2" 
//       />
//       <div className="flex justify-end space-x-2 mt-2">
//         <button className="px-4 py-2 bg-gray-200 rounded hover:bg-sky-300 flex items-center">
//           Select Columns <FaChevronDown className="ml-1" />
//         </button>
//         <button className="px-4 py-2 bg-gray-200 rounded hover:bg-sky-300 flex items-center">
//           <FaFilter className="mr-2" /> More Filters
//         </button>
//       </div>
      
//       <table className="w-full border-collapse border border-gray-200 mt-4">
//         <thead>
//           <tr className="bg-gray-100">
//             {[
//               "Loan No.", "Loan Type", "Borrower", "Borrower Address",
//               "Co Borrower 1 Name", "Co Borrower 1 Address", "Current DPD",
//               "Sanction Amount", "Region", "State"
//             ].map((col) => (
//               <th key={col} className="border px-3 py-2 cursor-pointer whitespace-nowrap">
//                 <span className="flex items-center gap-1">
//                   {col}
//                   <FaSort />
//                 </span>
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {currentEntries.map((row, index) => (
//             <tr key={index} className="text-center hover:bg-sky-50">
//               <td className="border px-3 py-2 text-blue-500 cursor-pointer">{row.loanNo}</td>
//               <td className="border px-3 py-2">{row.loanType}</td>
//               <td className="border px-3 py-2">{row.borrower}</td>
//               <td className="border px-3 py-2">{row.borrowerAddress}</td>
//               <td className="border px-3 py-2">{row.coBorrower}</td>
//               <td className="border px-3 py-2">{row.coBorrowerAddress}</td>
//               <td className="border px-3 py-2">{row.currentDPD}</td>
//               <td className="border px-3 py-2">{row.amount}</td>
//               <td className="border px-3 py-2">{row.region}</td>
//               <td className="border px-3 py-2">{row.state}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Pagination Controls */}
//       <div className="flex justify-end space-x-2 mt-4">
//         <button 
//           className={`px-4 py-2 rounded ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-sky-300"}`}
//           disabled={currentPage === 1}
//           onClick={() => setCurrentPage(currentPage - 1)}
//         >
//           Previous
//         </button>
//         <button 
//           className={`px-4 py-2 rounded ${currentPage * entriesPerPage >= data.length ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-sky-300"}`}
//           disabled={currentPage * entriesPerPage >= data.length}
//           onClick={() => setCurrentPage(currentPage + 1)}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// const Dashboard = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <Header />
//         <div className="p-5">
//           <h2 className="text-2xl font-bold">Portfolio</h2>
//           <FilterSection />
//           <Table />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


"use client"

import { useState, useRef, useEffect } from "react"
import {
  FaUserCircle,
  FaSort,
  FaFilter,
  FaHome,
  FaBriefcase,
  FaBell,
  FaStickyNote,
  FaHammer,
  FaCloudUploadAlt,
  FaTools,
  FaUserCog,
  FaShieldAlt,
  FaChevronDown,
  FaSearch,
  FaUpload,
  FaTimes,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa"

const Sidebar = ({ setActiveSection }) => {
  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, key: "dashboard" },
    { name: "Portfolio", icon: <FaBriefcase />, key: "portfolio" },
    { name: "Notifications", icon: <FaBell />, key: "notifications" },
    { name: "Notices", icon: <FaStickyNote />, key: "notices" },
    { name: "Auction", icon: <FaHammer />, key: "auction" },
    { name: "Data Upload", icon: <FaCloudUploadAlt />, key: "dataUpload" },
    { name: "Control Panel", icon: <FaTools />, key: "controlPanel" },
    { name: "User Management", icon: <FaUserCog />, key: "userManagement" },
    { name: "Permissions", icon: <FaShieldAlt />, key: "permissions" },
  ]

  return (
    
    <div className="w-64 h-screen bg-white shadow-md p-5">
      <div className="flex items-center mb-4">
        <img src="..\resollect_logo.jpg" alt="Company Logo" className="w-10 h-10 mr-2" />
        <h1 className="text-4xl font-bold text-blue-900">esollect</h1>
      </div>
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className="p-2 hover:bg-sky-200 rounded cursor-pointer flex items-center"
            onClick={() => setActiveSection(item.key)}
          >
            <span className="mr-2">{item.icon}</span> {item.name}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center border-t  pt-8 mt-14">
    <span className="text-gray-500 text-sm">Powered by</span>
    <img src="../resollect_logo.jpg" alt="Esollect Logo" className="w-6 h-6 mx-2" />
    <span className="text-blue-900 font-bold">esollect</span>
      </div>
       
    </div>
    
      
  )
}

const Header = ({ toggleProfileBox, showProfileBox }) => {
  return (
    <div className="flex justify-between items-center p-4 shadow-md bg-white relative">
      <div className="flex items-center"></div>
      <div className="flex items-center space-x-2 cursor-pointer" onClick={toggleProfileBox}>
        <FaUserCircle className="text-gray-700 text-xl" />
        <div className="flex flex-col items-end">
          <span className="text-gray-700 font-bold">Shubham </span>
          <span className="text-gray-500 text-sm">shubkatariya3@gmail.com</span>
        </div>
        <FaChevronDown className="text-gray-700 text-sm" />
      </div>

      {showProfileBox && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-md p-4 w-64 z-10">
          <div className="flex items-center space-x-3 mb-4">
            <FaUserCircle className="text-gray-700 text-4xl" />
            <div>
              <h3 className="font-bold">Shubham</h3>
              <p className="text-sm text-gray-500">shubkatariya3@gmail.com</p>
            </div>
          </div>
          <hr className="my-2" />
          <ul className="space-y-2">
            <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Profile Settings</li>
            <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Account</li>
            <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Preferences</li>
            <li className="hover:bg-gray-100 p-2 rounded cursor-pointer text-red-500">Logout</li>
          </ul>
        </div>
      )}
    </div>
  )
}

const FilterSection = ({ activeFilter, setActiveFilter }) => {
  const filters = [
    "All",
    "Pre Sarfaesi",
    "NPA",
    "13(2) Responses",
    "Symbolic Possession",
    "DM Order",
    "Physical Possessions",
    "Auctions",
  ]

  return (
    <div className="flex space-x-2 mt-4 flex-wrap">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`px-4 py-2 rounded mb-2 ${activeFilter === filter ? "bg-sky-300" : "bg-gray-200 hover:bg-sky-300"}`}
          onClick={() => setActiveFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}

const UploadDocumentModal = ({ isOpen, onClose, onUpload }) => {
  const [docName, setDocName] = useState("")
  const [docType, setDocType] = useState("")
  const [remarks, setRemarks] = useState("")
  const [file, setFile] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    onUpload({ docName, docType, remarks, file })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Upload Document</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Document Name</label>
            <select
              className="w-full p-2 border rounded"
              value={docName}
              onChange={(e) => setDocName(e.target.value)}
              required
            >
              <option value="">Select Document Name</option>
              <option value="13(2) Notice">13(2) Notice</option>
              <option value="13(4) Notice">13(4) Notice</option>
              <option value="DM Application">DM Application</option>
              <option value="Possession Notice">Possession Notice</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Document Type</label>
            <select
              className="w-full p-2 border rounded"
              value={docType}
              onChange={(e) => setDocType(e.target.value)}
              required
            >
              <option value="">Select Document Type</option>
              <option value="Notice">Notice</option>
              <option value="Application">Application</option>
              <option value="Order">Order</option>
              <option value="Certificate">Certificate</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Remarks</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              placeholder="Enter remarks"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Select File</label>
            <input
              type="file"
              className="w-full p-2 border rounded"
              onChange={(e) => setFile(e.target.files[0])}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-600 text-white py-2 rounded flex items-center justify-center"
          >
            <FaUpload className="mr-2" /> Upload Document
          </button>
        </form>
      </div>
    </div>
  )
}

const ColumnSelector = ({ columns, visibleColumns, toggleColumn, isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="absolute right-0 top-10 bg-white shadow-lg rounded-md p-4 z-10 w-64">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold">Select Columns</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <FaTimes />
        </button>
      </div>
      <div className="max-h-60 overflow-y-auto">
        {columns.map((column) => (
          <div key={column.key} className="flex items-center p-2 hover:bg-gray-100">
            <input
              type="checkbox"
              id={`col-${column.key}`}
              checked={visibleColumns.includes(column.key)}
              onChange={() => toggleColumn(column.key)}
              className="mr-2"
            />
            <label htmlFor={`col-${column.key}`} className="cursor-pointer flex-1">
              {column.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

const MoreFilters = ({ filters, activeFilters, updateFilter, isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="absolute right-0 top-10 bg-white shadow-lg rounded-md p-4 z-10 w-72">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold">More Filters</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <FaTimes />
        </button>
      </div>

      <div className="space-y-4 max-h-80 overflow-y-auto">
        {filters.map((filter) => (
          <div key={filter.key} className="mb-2">
            <label className="block text-gray-700 mb-1">{filter.label}</label>
            <select
              className="w-full p-2 border rounded"
              value={activeFilters[filter.key] || ""}
              onChange={(e) => updateFilter(filter.key, e.target.value)}
            >
              <option value="">All {filter.label}s</option>
              {filter.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}

        {/* The following line was causing an error because filter was not defined in this scope.
           It has been removed as it was causing the application to crash. */}
        {/* {filter.key === 'sanctionAmount' && ( */}
        <div className="flex space-x-2">
          <div>
            <label className="block text-gray-700 mb-1">Min</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              placeholder="Min Amount"
              value={activeFilters.minAmount || ""}
              onChange={(e) => updateFilter("minAmount", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Max</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              placeholder="Max Amount"
              value={activeFilters.maxAmount || ""}
              onChange={(e) => updateFilter("maxAmount", e.target.value)}
            />
          </div>
        </div>
        {/* )} */}
      </div>

      <div className="mt-4 flex justify-end space-x-2">
        <button
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => {
            const resetFilters = {}
            filters.forEach((f) => (resetFilters[f.key] = ""))
            resetFilters.minAmount = ""
            resetFilters.maxAmount = ""
            Object.keys(resetFilters).forEach((key) => updateFilter(key, resetFilters[key]))
          }}
        >
          Reset
        </button>
        <button className="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600" onClick={onClose}>
          Apply
        </button>
      </div>
    </div>
  )
}

const Table = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRows, setSelectedRows] = useState([])
  const [showColumnSelector, setShowColumnSelector] = useState(false)
  const [showMoreFilters, setShowMoreFilters] = useState(false)
  const [activeFilters, setActiveFilters] = useState({})
  const entriesPerPage = 10

  const columnSelectorRef = useRef(null)
  const moreFiltersRef = useRef(null)

  const columns = [
    { key: "loanNo", label: "Loan No." },
    { key: "loanType", label: "Loan Type" },
    { key: "borrower", label: "Borrower" },
    { key: "borrowerAddress", label: "Borrower Address" },
    { key: "coBorrower", label: "Co Borrower 1 Name" },
    { key: "coBorrowerAddress", label: "Co Borrower 1 Address" },
    { key: "currentDPD", label: "Current DPD" },
    { key: "amount", label: "Sanction Amount" },
    { key: "region", label: "Region" },
    { key: "state", label: "State" },
  ]

  const [visibleColumns, setVisibleColumns] = useState(columns.map((col) => col.key))

  const filterOptions = [
    {
      key: "state",
      label: "State",
      options: ["Uttar Pradesh", "Madya Pradesh", "Maharashtra", "Gujarat", "Karnataka"],
    },
    {
      key: "region",
      label: "Region",
      options: ["North", "South", "East", "West", "Central"],
    },
    {
      key: "loanType",
      label: "Loan Type",
      options: ["Home Loan", "Car Loan", "Personal Loan", "Business Loan"],
    },
    {
      key: "sanctionAmount",
      label: "Sanction Amount",
      options: [],
    },
  ]

  const data = [
    {
      loanNo: "L28U3247",
      loanType: "Home Loan",
      borrower: "Vedika Sachar",
      borrowerAddress: "83 Yogi Ganj",
      coBorrower: "Divit Vora",
      coBorrowerAddress: "24/543 Acharya Path",
      currentDPD: 91,
      amount: "₹ 1934068",
      region: "West",
      state: "Uttar Pradesh",
    },
    {
      loanNo: "L28U3243",
      loanType: "Car Loan",
      borrower: "Hrishita Agrawal",
      borrowerAddress: "86/622 Deo Path",
      coBorrower: "Mahika Tak",
      coBorrowerAddress: "58 Tela Road",
      currentDPD: 90,
      amount: "₹ 1842143",
      region: "North",
      state: "Madya Pradesh",
    },
    {
      loanNo: "L28U3247",
      loanType: "Home Loan",
      borrower: "Vedika Sachar",
      borrowerAddress: "83 Yogi Ganj",
      coBorrower: "Divit Vora",
      coBorrowerAddress: "24/543 Acharya Path",
      currentDPD: 91,
      amount: "₹ 1934068",
      region: "West",
      state: "Uttar Pradesh",
    },
    {
      loanNo: "L28U3243",
      loanType: "Car Loan",
      borrower: "Hrishita Agrawal",
      borrowerAddress: "86/622 Deo Path",
      coBorrower: "Mahika Tak",
      coBorrowerAddress: "58 Tela Road",
      currentDPD: 90,
      amount: "₹ 1842143",
      region: "North",
      state: "Madya Pradesh",
    },
    {
      loanNo: "L28U3247",
      loanType: "Home Loan",
      borrower: "Vedika Sachar",
      borrowerAddress: "83 Yogi Ganj",
      coBorrower: "Divit Vora",
      coBorrowerAddress: "24/543 Acharya Path",
      currentDPD: 91,
      amount: "₹ 1934068",
      region: "West",
      state: "Uttar Pradesh",
    },
    {
      loanNo: "L28U3243",
      loanType: "Car Loan",
      borrower: "Hrishita Agrawal",
      borrowerAddress: "86/622 Deo Path",
      coBorrower: "Mahika Tak",
      coBorrowerAddress: "58 Tela Road",
      currentDPD: 90,
      amount: "₹ 1842143",
      region: "North",
      state: "Madya Pradesh",
    },
    {
      loanNo: "L28U3247",
      loanType: "Home Loan",
      borrower: "Vedika Sachar",
      borrowerAddress: "83 Yogi Ganj",
      coBorrower: "Divit Vora",
      coBorrowerAddress: "24/543 Acharya Path",
      currentDPD: 91,
      amount: "₹ 1934068",
      region: "West",
      state: "Uttar Pradesh",
    },
    {
      loanNo: "L28U3243",
      loanType: "Car Loan",
      borrower: "Hrishita Agrawal",
      borrowerAddress: "86/622 Deo Path",
      coBorrower: "Mahika Tak",
      coBorrowerAddress: "58 Tela Road",
      currentDPD: 90,
      amount: "₹ 1842143",
      region: "North",
      state: "Madya Pradesh",
    },
    {
      loanNo: "L28U3247",
      loanType: "Home Loan",
      borrower: "Vedika Sachar",
      borrowerAddress: "83 Yogi Ganj",
      coBorrower: "Divit Vora",
      coBorrowerAddress: "24/543 Acharya Path",
      currentDPD: 91,
      amount: "₹ 1934068",
      region: "West",
      state: "Uttar Pradesh",
    },
    {
      loanNo: "L28U3243",
      loanType: "Car Loan",
      borrower: "Hrishita Agrawal",
      borrowerAddress: "86/622 Deo Path",
      coBorrower: "Mahika Tak",
      coBorrowerAddress: "58 Tela Road",
      currentDPD: 90,
      amount: "₹ 1842143",
      region: "North",
      state: "Madya Pradesh",
    },
    {
      loanNo: "L28U3247",
      loanType: "Home Loan",
      borrower: "Somya Sachar",
      borrowerAddress: "83 Yogi Ganj",
      coBorrower: "Divit Vora",
      coBorrowerAddress: "24/543 Acharya Path",
      currentDPD: 91,
      amount: "₹ 1934068",
      region: "West",
      state: "Uttar Pradesh",
    },
    {
      loanNo: "L28U3243",
      loanType: "Car Loan",
      borrower: "Srinivas Agrawal",
      borrowerAddress: "86/622 Deo Path",
      coBorrower: "Mahika Tak",
      coBorrowerAddress: "58 Tela Road",
      currentDPD: 90,
      amount: "₹ 1842143",
      region: "North",
      state: "Madya Pradesh",
    },
  ]

  // Handle clicks outside of dropdown menus
  useEffect(() => {
    function handleClickOutside(event) {
      if (columnSelectorRef.current && !columnSelectorRef.current.contains(event.target)) {
        setShowColumnSelector(false)
      }
      if (moreFiltersRef.current && !moreFiltersRef.current.contains(event.target)) {
        setShowMoreFilters(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Filter data based on search term and active filters
  const filteredData = data.filter((row) => {
    // Search filter
    if (searchTerm && !row.loanNo.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false
    }

    // Apply more filters
    for (const key in activeFilters) {
      if (activeFilters[key]) {
        if (key === "minAmount" && activeFilters[key]) {
          const amount = Number.parseFloat(row.amount.replace("₹", "").replace(/,/g, "").trim())
          if (amount < Number.parseFloat(activeFilters[key])) return false
        } else if (key === "maxAmount" && activeFilters[key]) {
          const amount = Number.parseFloat(row.amount.replace("₹", "").replace(/,/g, "").trim())
          if (amount > Number.parseFloat(activeFilters[key])) return false
        } else if (row[key] !== activeFilters[key]) {
          return false
        }
      }
    }

    return true
  })

  // Pagination Logic
  const indexOfLastEntry = currentPage * entriesPerPage
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage
  const currentEntries = filteredData.slice(indexOfFirstEntry, indexOfLastEntry)

  const toggleColumn = (columnKey) => {
    setVisibleColumns((prev) =>
      prev.includes(columnKey) ? prev.filter((key) => key !== columnKey) : [...prev, columnKey],
    )
  }

  const updateFilter = (key, value) => {
    setActiveFilters((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleRowSelect = (index, event) => {
    event.preventDefault() // Prevent default context menu

    const rowIndex = indexOfFirstEntry + index
    setSelectedRows((prev) => {
      if (prev.includes(rowIndex)) {
        return prev.filter((i) => i !== rowIndex)
      } else {
        return [...prev, rowIndex]
      }
    })
  }

  return (
    <div>
      <div className="flex items-center mt-2">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search Loan Number"
            className="border p-2 pl-10 rounded w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {selectedRows.length > 0 && (
          <div className="ml-4 bg-sky-100 px-4 py-2 rounded flex items-center">
            <span className="mr-2">{selectedRows.length} selected</span>
            <button className="text-red-500 hover:text-red-700" onClick={() => setSelectedRows([])}>
              <FaTimes />
            </button>
          </div>
        )}
      </div>

      <div className="flex justify-end space-x-2 mt-2 relative">
        <div ref={columnSelectorRef} className="relative">
          <button
            className="px-4 py-2 bg-gray-200 rounded hover:bg-sky-300 flex items-center"
            onClick={() => setShowColumnSelector(!showColumnSelector)}
          >
            {showColumnSelector ? <FaEyeSlash className="mr-2" /> : <FaEye className="mr-2" />}
            Select Columns
          </button>

          <ColumnSelector
            columns={columns}
            visibleColumns={visibleColumns}
            toggleColumn={toggleColumn}
            isOpen={showColumnSelector}
            onClose={() => setShowColumnSelector(false)}
          />
        </div>

        <div ref={moreFiltersRef} className="relative">
          <button
            className="px-4 py-2 bg-gray-200 rounded hover:bg-sky-300 flex items-center"
            onClick={() => setShowMoreFilters(!showMoreFilters)}
          >
            <FaFilter className="mr-2" /> More Filters
          </button>

          <MoreFilters
            filters={filterOptions}
            activeFilters={activeFilters}
            updateFilter={updateFilter}
            isOpen={showMoreFilters}
            onClose={() => setShowMoreFilters(false)}
          />
        </div>
      </div>

      <div className="overflow-x-auto mt-4">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 w-10">
                <div className="flex justify-center">
                  <input
                    type="checkbox"
                    checked={selectedRows.length === currentEntries.length && currentEntries.length > 0}
                    onChange={() => {
                      if (selectedRows.length === currentEntries.length) {
                        setSelectedRows([])
                      } else {
                        const allIndices = currentEntries.map((_, idx) => indexOfFirstEntry + idx)
                        setSelectedRows(allIndices)
                      }
                    }}
                  />
                </div>
              </th>
              {columns.map(
                (col) =>
                  visibleColumns.includes(col.key) && (
                    <th key={col.key} className="border px-3 py-2 cursor-pointer whitespace-nowrap">
                      <span className="flex items-center gap-1">
                        {col.label}
                        <FaSort />
                      </span>
                    </th>
                  ),
              )}
            </tr>
          </thead>
          <tbody>
            {currentEntries.map((row, index) => (
              <tr
                key={index}
                className={`text-center hover:bg-sky-50 ${selectedRows.includes(indexOfFirstEntry + index) ? "bg-sky-100" : ""}`}
                onContextMenu={(e) => handleRowSelect(index, e)}
              >
                <td className="border px-3 py-2">
                  <div className="flex justify-center">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(indexOfFirstEntry + index)}
                      onChange={() => handleRowSelect(index, { preventDefault: () => {} })}
                    />
                  </div>
                </td>
                {columns.map(
                  (col) =>
                    visibleColumns.includes(col.key) && (
                      <td
                        key={col.key}
                        className={`border px-3 py-2 ${col.key === "loanNo" ? "text-blue-500 cursor-pointer" : ""}`}
                      >
                        {row[col.key]}
                      </td>
                    ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-gray-500">
          Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, filteredData.length)} of {filteredData.length}{" "}
          entries
        </div>
        <div className="flex space-x-2">
          <button
            className={`px-4 py-2 rounded ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-sky-300"}`}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
          <button
            className={`px-4 py-2 rounded ${indexOfLastEntry >= filteredData.length ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-sky-300"}`}
            disabled={indexOfLastEntry >= filteredData.length}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All")

  return (
    <div>
      <h2 className="text-2xl font-bold">Portfolio</h2>
      <FilterSection activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <Table />
    </div>
  )
}

const DataUpload = () => {
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [uploadedDocs, setUploadedDocs] = useState([])

  const handleUpload = (docData) => {
    setUploadedDocs([
      ...uploadedDocs,
      {
        ...docData,
        id: Date.now(),
        date: new Date().toLocaleDateString(),
      },
    ])
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Data Upload</h2>

      <button
        className="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 flex items-center"
        onClick={() => setShowUploadModal(true)}
      >
        <FaCloudUploadAlt className="mr-2" /> Upload Document
      </button>

      {uploadedDocs.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Uploaded Documents</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-3 py-2">Document Name</th>
                  <th className="border px-3 py-2">Document Type</th>
                  <th className="border px-3 py-2">Remarks</th>
                  <th className="border px-3 py-2">File Name</th>
                  <th className="border px-3 py-2">Upload Date</th>
                </tr>
              </thead>
              <tbody>
                {uploadedDocs.map((doc) => (
                  <tr key={doc.id} className="text-center hover:bg-sky-50">
                    <td className="border px-3 py-2">{doc.docName}</td>
                    <td className="border px-3 py-2">{doc.docType}</td>
                    <td className="border px-3 py-2">{doc.remarks}</td>
                    <td className="border px-3 py-2">{doc.file.name}</td>
                    <td className="border px-3 py-2">{doc.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <UploadDocumentModal isOpen={showUploadModal} onClose={() => setShowUploadModal(false)} onUpload={handleUpload} />
    </div>
  )
}

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard")
  const [showProfileBox, setShowProfileBox] = useState(false)

  const toggleProfileBox = () => {
    setShowProfileBox(!showProfileBox)
  }

  // Render the appropriate section based on activeSection
  const renderSection = () => {
    switch (activeSection) {
      case "portfolio":
        return <Portfolio />
      case "dataUpload":
        return <DataUpload />
      case "dashboard":
        return (
          <div>
            <h2 className="text-2xl font-bold">Dashboard</h2>
            <p className="mt-4 text-gray-600">
              Welcome to your dashboard. Select a section from the sidebar to get started.
            </p>
          </div>
        )
      default:
        return (
          <div>
            <h2 className="text-2xl font-bold">{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h2>
            <p className="mt-4 text-gray-600">This section is currently under development.</p>
          </div>
        )
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar setActiveSection={setActiveSection} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleProfileBox={toggleProfileBox} showProfileBox={showProfileBox} />
        <div className="p-5 overflow-auto">{renderSection()}</div>
      </div>
    </div>
  )
}

export default Dashboard
