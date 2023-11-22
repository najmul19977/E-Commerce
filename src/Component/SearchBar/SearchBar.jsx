import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("all.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data only once when the component mounts

  const filteredData = data.filter((item) =>
    item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="md:ml-40 mb-5 mt-5">
      <div className="relative flex items-center mt-10">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaSearch className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search here"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="text-left mt-4">
        {searchTerm === "" ? (
          // If search term is empty, show a message or no data
          <div>No Search Resault</div>
        ) : (
          // If there is a search term, show filtered data
          filteredData.length > 0 ? (
            filteredData.map((d, i) => <div key={i}><Link to={`/${d.id}`}>{d.name}</Link></div>)
          ) : (
            <div>No matching results</div>
          )
        )}
      </div>
    </div>
  );
};

export default SearchBar;
