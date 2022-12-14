import React, { useEffect, useState } from "react";
import properties from "./data/places";
import Card from "./components/Card";
import { HiOutlineSearch } from "react-icons/hi";
import { Select } from "antd";
import "antd/dist/antd.css";
import { DatePicker } from "antd";
import NoResults from "./components/NoResults";
const { Option } = Select;

const styles = {
  main: `flex flex-col justify-center items-center`,
  cardStyle: `flex flex-wrap justify-center`,
  top: `flex justify-around items-center w-full mt-10`,
  title: "text-4xl font-semibold leading-normal text-black",
  input: `h-12 w-60 pr-8 pl-5 text-sm rounded z-0 focus:shadow focus:outline-none border-2 border-[#FAF9F6]`,
  filters: `flex justify-between items-center w-3/4 mt-10 bg-white p-4 rounded-2xl`,
  button: `bg-indigo text-white hover:bg-white hover:text-indigo  py-2 px-4 rounded ml-4 `,
  filterTitles: `flex flex-col justify-center items-center text-md text-[#808080] ml-2 w-full border-r-2 border-[#E5E4E2]`,
  selectTag: `flex justify-center items-center`,
};

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState([0,9000]);
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");                                               
  const [filteredData,setFilteredData] = useState(properties);
  var [startDate, setStartDate] = useState(new Date(2100, 0, 1));  

  const handlePriceChange = (value) => {
    toString(value);
    value = value.split("-");
    console.log(value);
    setPrice(value);
  };
  const handleLocationChange = (value) => {
    setLocation(value);
  };
  const handleTypeChange = (value) => {
    setType(value);
  };
  const onChange = (date, dateString) => {
    console.log(date);
    console.log(new Date(dateString));
    date == null
      ? setStartDate(new Date(2100, 0, 1))
      : setStartDate(new Date(dateString));
  };
  
  const isDateValid =(date) =>{
    return date.getTime() <= startDate.getTime();
  }

  const searchClicked = (e) =>{
    setSearch(e.target.value); 
    setFilteredData(properties.filter(
      (property) =>
      isDateValid(property.startDate) &&
    property.address.includes(location) &&  property.price <= price[1] && property.price >= price[0] && property.propType.includes(type)  &&
      (property.address.toLowerCase().includes(search.toLowerCase()) ||
      property.price.toString().includes(search.toLowerCase()) ||
      property.title.toLowerCase().includes(search.toLowerCase()))
      
 
      
  
   
    
    
    ));
  }
  console.log(filteredData);
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <div className={styles.title}>Search properties to rent</div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search with Search Bar"
            className={styles.input}
            onChange={searchClicked}
            
          />
          <div className="absolute top-4 right-3">
            <HiOutlineSearch  />
          </div>
        </div>
      </div>
      <div className={styles.filters}>
        <div className={styles.filterTitles}>
          Locations
          <div className={styles.selectTag}>
            <Select
              defaultValue="None"
              style={{
                width: 200,
                alignItems: "center",
                textAlign: "center",
                fontWeight: 900,
                fontSize: "16px",
                margin: "10px 0px 0px 10px",
              }}
              onChange={handleLocationChange}
            >
              <Option value="">None</Option>
              <Option value="FL">FL</Option>
              <Option value="TX">TX</Option>
              <Option value="IN">IN</Option>
            </Select>
          </div>
        </div>
        <div className={styles.filterTitles}>
          When
          <div className={styles.selectTag}>
            <DatePicker
              placeholder="Select Date to Move In "
              onChange={onChange}
              style={{
                width: 200,
                alignItems: "center",
                textAlign: "center",
                fontSize: "16px",
                margin: "10px 0px 0px 10px",
              }}
            />
          </div>
        </div>
        <div className={styles.filterTitles}>
          Price
          <div className={styles.selectTag}>
            <Select
              defaultValue="None"
              style={{
                width: 200,
                alignItems: "center",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "16px",
                 
                margin: "10px 0px 0px 10px",
              }}
              onChange={handlePriceChange}
            >
              <Option value="0-9000">None</Option>
              <Option value="2000-2500">2000-2500</Option>
              <Option value="2600-3000">2600-3000</Option>
              <Option value="4000-5500">4000-5500</Option>
              <Option value="7000-9000">7000-9000</Option>
            </Select>
          </div>
        </div>
        <div className={styles.filterTitles}>
          Property Type
          <div className={styles.selectTag}>
            <Select
              defaultValue="None"
              style={{
                width: 200,
                alignItems: "center",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "16px",   
                margin: "10px 0px 0px 10px",
              }}
              onChange={handleTypeChange}
            >
               <Option value="">None</Option>
              <Option value="Houses">Houses</Option>
              <Option value="Bungalows">Bungalows</Option>
              <Option value="AirBNB">AirBNB</Option>
            </Select>
          </div>
        </div>
        <div>
          <button className={styles.button} onClick={searchClicked}>Search</button>
        </div>
      </div>
      {filteredData.length > 0 ? (
        <div className={styles.cardStyle}>
          {filteredData.map((property) => (
            <div className="m-10">
              <Card
                key={property.id}
                imgUrl={property.imgUrl}
                price={property.price}
                title={property.title}
                address={property.address}
                beds={property.beds}
                bathrooms={property.bathrooms}
                area={property.area}
                isPopular={property.isPopular}
                isLiked={property.isLiked}
              />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <NoResults/>
        </div>
      )}
    </div>
  );
};

export default HomePage;
