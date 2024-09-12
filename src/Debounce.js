import { useEffect, useState } from "react";

const Debounce = () => {
  const [val, setval] = useState("");
  const [data, setdata] = useState([]);
  const fetchdata = async () => {
    try {
      let res = {};
      if (val) {
        res = await fetch(
          `https://content-xflix-backend.azurewebsites.net/v1/videos?title=${val}`
        );
      } else {
        res = await fetch(
          `https://content-xflix-backend.azurewebsites.net/v1/videos`
        );
      }
      const responseval = await res.json();
      setdata(responseval.videos);
    } catch (err) {
      console.error(err);
    }
  };
  const handlechange = (e) => {
    setval(e.target.value);
  };
  useEffect(() => {
    fetchdata();
  }, [val]);
  console.log(data);
  return (
    <div>
      <input value={val} onChange={handlechange} placeholder="search" />
      <div>
        {data.length
          ? data.map((item) => <p key={item.id}>{item.title}</p>)
          : null}
      </div>
    </div>
  );
};
export default Debounce;
