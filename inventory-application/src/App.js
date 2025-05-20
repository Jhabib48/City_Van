import React from "react";

function ToolInventoryTable() {
  const tools = [
    {
      id: "TL-1001",
      name: "Hammer Drill",
      location: "Evans Yard",
      status: "Borrowed",
      borrower: "Mike Johnson",
      borrowDate: "2025-05-12",
      returnDate: "2025-05-20",
      notes: "Needs battery replacement",
    },
    {
      id: "TL-1002",
      name: "Circular Saw",
      location: "Sunset Yard",
      status: "Available",
      borrower: "-",
      borrowDate: "-",
      returnDate: "-",
      notes: "",
    },
    {
      id: "TL-1003",
      name: "Ladder",
      location: "Local Yard",
      status: "Borrowed",
      borrower: "Sarah Lee",
      borrowDate: "2025-05-10",
      returnDate: "2025-05-15",
      notes: "Handle slightly cracked",
    },
    {
      id: "TL-1004",
      name: "Welding Machine",
      location: "Jerrocho Yard",
      status: "Available",
      borrower: "-",
      borrowDate: "-",
      returnDate: "-",
      notes: "",
    },
  ];

  return (
    <div className="mx-auto p-2 sm:p-4 max-w-7xl">
      <div className="mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Tool Inventory Management</h2>
        <input
          type="text"
          placeholder="Search tools..."
          className="w-full sm:w-64 border border-gray-300 rounded px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Desktop Table (hidden on mobile) */}
      <div className="hidden sm:block overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300">
              <th className="p-3 sm:p-4">Tool ID</th>
              <th className="p-3 sm:p-4">Tool Name</th>
              <th className="p-3 sm:p-4">Location</th>
              <th className="p-3 sm:p-4">Status</th>
              <th className="p-3 sm:p-4">Borrower</th>
              <th className="p-3 sm:p-4">Borrow Date</th>
              <th className="p-3 sm:p-4">Return Date</th>
              <th className="p-3 sm:p-4">Notes</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool) => (
              <tr key={tool.id} className="hover:bg-gray-50 border-b border-gray-200">
                <td className="p-3 sm:p-4 font-semibold">{tool.id}</td>
                <td className="p-3 sm:p-4">{tool.name}</td>
                <td className="p-3 sm:p-4">{tool.location}</td>
                <td className={`p-3 sm:p-4 font-semibold ${tool.status === "Available" ? "text-green-600" : "text-red-600"}`}>
                  {tool.status}
                </td>
                <td className="p-3 sm:p-4">{tool.borrower}</td>
                <td className="p-3 sm:p-4">{tool.borrowDate}</td>
                <td className="p-3 sm:p-4">{tool.returnDate}</td>
                <td className="p-3 sm:p-4">{tool.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards (shown on mobile) */}
      <div className="sm:hidden space-y-4">
        {tools.map((tool) => (
          <div key={tool.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-800">{tool.name}</h3>
                <p className="text-sm text-gray-600">{tool.id}</p>
              </div>
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${tool.status === "Available" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                {tool.status}
              </span>
            </div>
            
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-gray-500">Location</p>
                <p>{tool.location}</p>
              </div>
              <div>
                <p className="text-gray-500">Borrower</p>
                <p>{tool.borrower}</p>
              </div>
              <div>
                <p className="text-gray-500">Borrow Date</p>
                <p>{tool.borrowDate}</p>
              </div>
              <div>
                <p className="text-gray-500">Return Date</p>
                <p>{tool.returnDate}</p>
              </div>
            </div>
            
            {tool.notes && (
              <div className="mt-3">
                <p className="text-sm text-gray-500">Notes</p>
                <p className="text-sm">{tool.notes}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToolInventoryTable;

{/* <div class="flex justify-between items-center px-4 py-3">
       <div class="text-sm text-slate-500">
       Showing <b>1-5</b> of 45
       </div>
       <div class="flex space-x-1">
       <button class="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
           Prev
       </button>
       <button class="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-white bg-slate-800 border border-slate-800 rounded hover:bg-slate-600 hover:border-slate-600 transition duration-200 ease">
           1
       </button>
       <button class="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
           2
       </button>
       <button class="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
           3
       </button>
       <button class="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
           Next
       </button>
       </div>
   </div> */}