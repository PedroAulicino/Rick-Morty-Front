import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Character from "../../components/charactercomponent";
import API from "../../services/api";

export default () => {
  const [chacter, setChacter] = useState({ image: "http:/", name: "", id: "" });
  const [first] = useState(0);
  const search = useLocation().search;

  const fetchUser = async () => {
    // console.log(useLocation())
    const params = new URLSearchParams(search);
    const user = await API().get(`character/${params.get("id")}`);
    console.log(user.data);
    setChacter(user.data);
  };
  useEffect(() => {
    fetchUser();
  }, [first]);

  return (
    <div>
      <Character
        key={chacter.id}
        image={chacter.image}
        name={chacter.name}
        status={chacter.status}
        especie={chacter.species}
        gender={chacter.gender}
      ></Character>
    </div>
  );
};
