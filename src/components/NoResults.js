import React from 'react'
const styles = {
    container: `flex flex-col items-center justify-center mt-20`,
    image:  `h-[300px] w-full rounded-t-md`,    
    title: `text-2xl font-semibold leading-normal text-black mt-4`,
    text: `text-sm mt-2`,
    button: `bg-indigo text-white hover:bg-white hover:text-indigo  py-2 px-4 rounded mt-2`,
}
const NoResults = () => {
  return (
    <div className={styles.container}>
        <img className={styles.image} src="https://imgs.search.brave.com/_2EspPXGgt0z0aMU8-51isxDc4CGjXaMM43Rc1yafO0/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly93d3cu/bmhiYy5jby51ay9i/aW5hcmllcy9jb250/ZW50L2dhbGxlcnkv/bmhiY2NvbnRlbnRt/YW5hZ2VtZW50c3lz/dGVtL2hvdXNlLWJ1/aWxkZXItLS1kZXZl/bG9wZXIvY29uc3Vs/dGFuY3ktYW5kLXRl/c3RpbmcvY2FzZS1z/dHVkaWVzL25oYmMt/aW5zcGVjdGlvbi1z/aG9vdC0yMDE0X2lu/c3BlY3Rpb24tb25z/aXRlX2hpXzA0NC1s/YXJnZS5qcGc" alt="No results found" />
        <div className={styles.title}>No properties found</div>
        <div className={styles.text}>We are working on getting more properties for you!</div>
        <div className={styles.button} onClick={() => {window.location.reload(false);}}>Clear Filters</div>
    </div>
  )
}

export default NoResults