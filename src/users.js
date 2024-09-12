import { useEffect } from "react";

const Getusers = ({ showusers }) => {
  const fetchdata = async () => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const gotusers = await res.json();
      console.log(gotusers);
      showusers(gotusers.name);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return <div>Users here</div>;
};
export default Getusers;
