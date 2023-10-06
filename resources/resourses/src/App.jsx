import { useState } from "react";
import "./App.css";
import data from "../../countryData.json"; // Update this line to use import

function App() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log("escape");
  };

  return (
    <>
      <div className="App">
        <div className="box">
          <h1>Search</h1>
          <div className="search">
            <div className="inner">
              <input
                type="text"
                placeholder="search.."
                value={value}
                onChange={onChange}
              />
              <button className="searchBtn" onClick={() => onSearch(value)}>
                Search
              </button>
            </div>
            <div className="dropdown">
              {data.filter(item => {
                const searchTerm =value.toLowerCase();
                const name = item.name.toLowerCase();

                return searchTerm && name.startsWith(searchTerm) && name !== searchTerm
              })
              .map((item, index) => (
                <div onClick={()=> onSearch(item.name)} className="dropdown-row" key={index}>
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
  