import React, { useState } from "react";
import properties from "./data/places";
import Card from "./components/Card";
import { HiOutlineSearch } from "react-icons/hi";
import { Select } from "antd";
import "antd/dist/antd.css";
import { DatePicker } from "antd";
const { Option } = Select;

const styles = {
  main: `flex flex-col justify-center items-center`,
  cardStyle: `flex flex-wrap justify-center`,
  top: `flex justify-around items-center w-full mt-10`,
  title: "text-4xl font-semibold leading-normal text-black",
  input: `h-12 w-60 pr-8 pl-5 text-sm rounded z-0 focus:shadow focus:outline-none border-2 border-[#FAF9F6]`,
  filters: `flex justify-between items-center w-3/4 mt-10 bg-white p-4 rounded-2xl`,
  button: `bg-indigo text-white hover:bg-white hover:text-indigo  py-2 px-4 rounded ml-2 `,
  filterTitles: `flex flex-col justify-center items-center text-md text-[#808080] ml-2 w-full border-r-2 border-[#E5E4E2]`,
  selectTag: `flex justify-center items-center`,
};

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState("");
  const handleChange = (e) => {
    setPrice(e.target.value);
    console.log(price);
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const onSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const filteredData = properties.filter(
    (property) =>
      property.address.toLowerCase().includes(search.toLowerCase()) ||
      property.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <div className={styles.title}>Search properties to rent</div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search with Search Bar"
            className={styles.input}
            onChange={onSearch}
          />
          <div className="absolute top-4 right-3">
            <HiOutlineSearch />
          </div>
        </div>
      </div>
      <div className={styles.filters}>
        <div className={styles.filterTitles}>
          Locations
          <div className={styles.selectTag}>
            <Select
              defaultValue="Locations"
              style={{
                width: 200,
                alignItems: "center",
                textAlign: "center",
                fontWeight: "bold",
                margin: "10px 0px 0px 10px",
              }}
              onChange={handleChange}
            >
              <Option value="New York,USA">New York, USA</Option>
              <Option value="Mumbai,India">Mumbai, India</Option>
              <Option value="Delhi,India">Delhi, India</Option>
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
                margin: "10px 0px 0px 10px",
              }}
            />
          </div>
        </div>
        <div className={styles.filterTitles}>
          Price
          <div className={styles.selectTag}>
            <Select
              defaultValue="Select price"
              style={{
                width: 200,
                alignItems: "center",
                textAlign: "center",
                fontWeight: "bold",
                margin: "10px 0px 0px 10px",
              }}
              onChange={handleChange}
            >
              <Option value="500-2500">$500-$2500</Option>
              <Option value="$2600-$3500">$2600-$3500</Option>
              <Option value="$3600-$4500">$3600-$4500</Option>
              <Option value="$4600-$7800">$4600-$7800</Option>
            </Select>
          </div>
        </div>
        <div className={styles.filterTitles}>
          Property Type
          <div className={styles.selectTag}>
            <Select
              defaultValue="Houses"
              style={{
                width: 200,
                alignItems: "center",
                textAlign: "center",
                fontWeight: "bold",
                margin: "10px 0px 0px 10px",
              }}
              onChange={handleChange}
            >
              <Option value="Houses">Houses</Option>
              <Option value="Bungalows">Bungalows</Option>
              <Option value="AirBNB">AirBNB</Option>
            </Select>
          </div>
        </div>
        <div>
          <button className={styles.button}>Search</button>
        </div>
      </div>
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
    </div>
  );
};

export default HomePage;
