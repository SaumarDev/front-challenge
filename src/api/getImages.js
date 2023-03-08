const getImages = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await res.json()
    return data
    
  };
  
  export default getImages;
  