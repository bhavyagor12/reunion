import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { TbBed, TbBath, TbRotateRectangle } from "react-icons/tb";
import { WiStars } from "react-icons/wi";
import { useRecoilState } from "recoil";

const styles = {
  card: `flex flex-col  w-[300px] bg-white mt-4 ml-4 rounded-2xl border-1 border-gray-300 shadow-xl relative cursor-pointer`,
  details: `flex justify-between items-center mt-2 ml-4 `,
  price: `text-indigo text-xl `,
  popularTag: `text-sm font-semibold flex items-center  absolute  rounded-l-md rounded-r-2xl p-0.5  mr-1 bg-indigo text-white rounded-r-lg w-[110px] bg-clip-border opacity-75`,
  text: `text-[#B2BEB5] text-sm`,
  image: `flex flex-col justify-end`,
  title: `text-2xl font-semibold leading-normal text-black`,
  address: `mt-1 ml-4 pb-2 text-sm text-[#B2BEB5] border-b-2 border-[#FAF9F6]`,
  information: `mt-2 flex gap-2 items-center justify-around mb-2`,
  heartIcon: `mr-2 p-2 border-2 border-[#e2e8f0] shadow-lg  rounded-2xl`,
  infoIcons: `flex items-center justify-center ml-2 `,
};
const Card = ({
  imgUrl,
  price,
  title,
  address,
  beds,
  bathrooms,
  area,
  isPopular,
  isLiked,
}) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={imgUrl} alt="" className="h-[180px] w-full rounded-t-md" />
        {isPopular ? (
          <div className={styles.popularTag} id="tag">
            <WiStars size={30} />
            POPULAR
          </div>
        ) : null}
      </div>

      <div className={styles.details}>
        <div className="flex flex-col">
          <div className={styles.price}>
            ${price}/<span className={styles.text}>month</span>
          </div>
          <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.heartIcon}>
          {!liked ? (
            <FaRegHeart
              size={20}
              color="#4f46e5"
              onClick={() => {
                setLiked(!liked);
              }}
            />
          ) : (
            <FcLike
              size={20}
              color="#4f46e5"
              onClick={() => {
                setLiked(!liked);
              }}
            />
          )}{" "}
        </div>
      </div>
      <div className={styles.address}>{address}</div>
      <div className={styles.information}>
        <div className={styles.infoIcons} style={{ gap: 2 }}>
          <TbBed color="#4f46e5" />
          {beds} Beds
        </div>
        <div className={styles.infoIcons} style={{ gap: 2 }}>
          <TbBath color="#4f46e5" />
          {bathrooms} Bathrooms
        </div>
        <div className={styles.infoIcons} style={{ margin: "1px" }}>
          <TbRotateRectangle color="#4f46e5" />
          {area}
          <sup>2</sup>
        </div>
      </div>
    </div>
  );
};

export default Card;
