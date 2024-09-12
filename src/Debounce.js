import { debounce } from "@mui/material";
import { useEffect, useState } from "react";

const Debounce = () => {
  const [val, setval] = useState("");
  const [data, setdata] = useState([]);
  const [timerid, settimerid] = useState(0);
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

  const debouncefn = (fn, delay) => {
    return function (...args) {
      if (timerid) {
        clearTimeout(timerid);
      }
      const newtimerid = setTimeout(() => {
        console.log(fn, delay);
        fn(...args);
      }, delay);
      console.log({ timerid, newtimerid });
      settimerid(newtimerid);
    };
  };
  const handlechange = debouncefn((e) => {
    console.log(e.target.value);
    setval(e.target.value);
  }, 1000);

  useEffect(() => {
    fetchdata();
  }, [val]);
  console.log(data);
  return (
    <div>
      <input onChange={handlechange} placeholder="search" />
      <div>
        {data.length
          ? data.map((item) => <p key={item.id}>{item.title}</p>)
          : null}
      </div>
    </div>
  );
};
export default Debounce;
