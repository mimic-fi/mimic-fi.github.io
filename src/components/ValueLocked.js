import { useEffect, useState } from "react";
import axios from "axios";
import numeral from "numeral";
import { useRandomInterval } from "../hooks/useRandomInterval";

export const ValueLocked = () => {
  const [tvl, setTvl] = useState("loading");

  const url = `https://firestore.googleapis.com/v1beta1/projects/apy-mimic/databases/(default)/documents/tvl/tvl`;

  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      const ot = localStorage.getItem("t");
      const data = await axios.get(url);
      setTvl(
        numeral(ot ? ot : data?.data?.fields?.value?.stringValue).format(
          "$0,0.00"
        )
      );
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  const delay = [4000, 9000];

  useRandomInterval(() => transmute(), ...delay);

  const transmute = () => {
    if (tvl !== "loading") {
      const added = Math.random();
      const nt = numeral(tvl).add(added).format("$0,0.00");
      setTvl(nt);
      localStorage.setItem("t", nt);
    }
  };

  return (
    <>
      <div>{tvl}</div>
    </>
  );
};
