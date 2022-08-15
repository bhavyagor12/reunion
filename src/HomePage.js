import React from "react";
import properties from "./data/places";
import Card from "./components/Card";
import { HiOutlineSearch } from "react-icons/hi";
import { Select } from "antd";
import "antd/dist/antd.css";
const { Option } = Select;
const styles = {
  main: `flex flex-col justify-center items-center`,
  cardStyle: `flex flex-wrap justify-center`,
  top: `flex justify-around items-center w-full mt-10`,
  title: "text-4xl font-semibold leading-normal text-black",
  input: `h-12 w-60 pr-8 pl-5 text-sm rounded z-0 focus:shadow focus:outline-none border-2 border-[#FAF9F6]`,
  filters: `flex justify-between items-center w-3/4 mt-10 bg-white`,
  button: `bg-indigo text-white hover:bg-white hover:text-indigo  py-2 px-4 rounded`,
  filterTitles: `flex flex-col justify-center items-center text-md text-[#808080] ml-2 w-full`,
  selectTag: `flex justify-center items-center`,
};
const HomePage = () => {
  console.log(properties);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <div className={styles.title}>Search properties to rent</div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search with Search Bar"
            className={styles.input}
          />
          <div className="absolute top-4 right-3">
            <HiOutlineSearch />
          </div>
        </div>
      </div>
      <div className={styles.filters}>
        <div className={styles.filterTitles}>Locations</div>
        <div className={styles.filterTitles}>When</div>
        <div className={styles.filterTitles}>Price</div>
        <div className={styles.filterTitles}>
          Property Type
          <div className={styles.selectTag}>
            <Select
              defaultValue="Houses"
              style={{
                width: 120,
                alignItems: "center",
                margin: "0px 0px 0px 10px",
              }}
              onChange={handleChange}
            >
              <Option value="jack">Houses</Option>
              <Option value="lucy">Bungalows</Option>
              <Option value="Yiminghe">AirBNB</Option>
            </Select>
          </div>
        </div>
        <div>
          <button className={styles.button}>Search</button>
        </div>
      </div>
      <div className={styles.cardStyle}>
        {properties.map((property) => (
          <div className="m-10">
            <Card
              id={property.id}
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
