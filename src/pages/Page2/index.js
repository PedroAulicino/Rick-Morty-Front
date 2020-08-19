import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import API from "../../services/Api";
import { Container } from "../Home/styled";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";

export default () => {
  const [personagem, setChacter] = useState();
  const [loading, setLoading] = useState(false);
  const search = useLocation().search;

  const fetchUser = async () => {
    const params = new URLSearchParams(search);
    const user = await API().get(`character/${params.get("id")}`);
    setChacter([user.data]);
    setLoading(true);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <Container>
        <div>
          <Link to={`/`}>
            <button>Voltar</button>
          </Link>
        </div>
        {loading ? (
          <>
            {personagem.map((persona) => (
              <li key={persona.id}>
                <img src={persona.image} alt={persona.name} />
                <h1> Name: {persona.name} </h1>
                <h1> Sex: {persona.gender} </h1>
                <h1> Status: {persona.status} </h1>
                <h1> Specie: {persona.species} </h1>
              </li>
            ))}
          </>
        ) : (
          <CircularProgress color='secondary' />
        )}
      </Container>
    </div>
  );
};
