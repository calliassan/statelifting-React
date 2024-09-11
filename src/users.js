import { useEffect } from "react";

const Getusers = async ({ showusers }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const gotusers = await res.json();
  showusers(gotusers);
  useEffect(() => {
    Getusers();
  }, []);

  return <div></div>;
};
export default Getusers;
