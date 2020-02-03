import React, { useState, useEffect } from "react";
import CardComponent from "../../components/card.component";
import BarComponent from "../../components/bar.component";
import API from "../../services/api";

export default () => {
  const [chacters, setChacters] = useState([]);
  const [first] = useState(0);

  const fetchUser = async () => {
    const user = await API().get("character");
    console.log("aui");
    setChacters(user.data.results);
  };
  useEffect(() => {
    fetchUser();
  }, [first]);

  const onCHangeSearch = async evt => {
    try {
      const getChacters = await API().get("character", {
        params: { name: evt.target.value }
      });
      setChacters(getChacters.data.results);
    } catch (_err) {
      setChacters([]);
    }
  };

  return (
    <div>
      <BarComponent change={onCHangeSearch}></BarComponent>
      {chacters.map(data => (
        <CardComponent
          key={data.id}
          image={data.image}
          name={data.name}
          id={data.id}
        ></CardComponent>
      ))}
    </div>
  );
};
