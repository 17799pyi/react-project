import React, { useState, useEffect } from "react";
import { getRecruiterList } from "../../api/api";

function Apidemo() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    getRecruiterList().then((res) => {
      setApiData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
        {
                apiData.length ?
                apiData.map((user) => {
                    return <p> user={user.title} </p>
                }) :
                null
            }
      api test
    </div>
  );
}

export default Apidemo;
