import React, { useEffect } from "react";
import { useRouter } from "next/router";
const InfoTest = () => {
  let router = useRouter();
  console.log(router?.query);
  function handleNavigate(name) {
    // router.query.tab = "love";
    router.push("/infotest?tab=" + name);
  }

  return (
    <div>
      InfoTest
      <ul>
        <li onClick={() => handleNavigate("love")}>love film</li>
        <li onClick={() => handleNavigate("bm")}>book mark film</li>
      </ul>
      {router && router.query && router.query?.tab == "love" && (
        <p>component love film</p>
      )}
      {router && router.query && router.query?.tab == "bm" && (
        <p>component bookmark film</p>
      )}
    </div>
  );
};

export default InfoTest;
