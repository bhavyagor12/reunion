import React from 'react'
import {AiOutlineHome} from 'react-icons/ai';
import {IoIosArrowDown} from 'react-icons/io';
const styles = {
    navbar: `h-[60px] bg-white w-full flex items-center justify-between border-b-1 border-indigo`,
    leftSide: ` h-[60px] w-1/4 flex items-center justify-between  ml-4`,
    rightSide: `h-[60px] w-1/4 flex items-center justify-end  gap-4 mr-4`,
    button:`bg-indigo text-white hover:bg-white hover:text-indigo  py-2 px-4 rounded`,
    companyName : `text-3xl font-semibold leading-normal text-black`,
    title:`flex items-center justify-between gap-2` ,
    logo : `text-indigo`,
    navLinks :`flex w-2/4 items-center justify-start gap-6 mr-4`,
    navLink :` flex items-center px-4 py-1.5 bg-transparent text-black font-medium  leading-tight uppercase rounded hover:bg-indigo hover:text-white focus:text-blue focus:bg-gray focus:outline-none focus:ring-0 active:bg-gray active:text-blue transition duration-300 ease-in-out gap-2` ,
}
const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.leftSide}>
        <div className={styles.title}>
             <div className={styles.logo}><AiOutlineHome size={30}/></div>
             <div className={styles.companyName}>Estatery</div>
        </div>
        </div>
        <div className={styles.navLinks}>
        <div className={styles.navLink}>Rent</div>
        <div className={styles.navLink}>Buy</div>
        <div className={styles.navLink}>Sell</div>
        <div className={styles.navLink}>
        Manage Property
        <div><IoIosArrowDown/></div>
        </div>
        
        <div className={styles.navLink}>Resources <IoIosArrowDown/></div>
        </div>

        <div className={styles.rightSide}>
            <button className={styles.button}>Login</button>
            <button className={styles.button}>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar