import React, { useEffect, useState } from "react";
import { Container, Button } from "./styled";
import API from "../../Services/Api";
import { Link } from "react-router-dom";
import BarComponent from "../../components/bar";
import CircularProgress from "@material-ui/core/CircularProgress";

function Home() {
  const [personagem, setpersonagem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);

  const fetchUser = async () => {
    try {
      await API()
        .get(`character`)
        .then((res) => {
          setpersonagem(res.data.results);
        });
      setLoading(true);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  const onCHangeSearch = async (evt) => {
    const getChacters = await API().get("character", {
      params: { name: evt.target.value },
    });
    setpersonagem(getChacters.data.results);
  };

  const listarPersonagens = (index = 1) => {
    const requestPokemons = [];
    for (var i = index; i < index + 20; i++) {
      const toRequest = API().get(`/character/${i}`);
      requestPokemons.push(toRequest);
    }
    Promise.all(requestPokemons).then((data) => {
      const personaListData = data.map((data) => {
        return data.data;
      });

      console.log(personaListData);
      setpersonagem(personaListData);
    });
  };
  const proximo = () => {
    console.log(count);
    const countData = count + 5;
    setCount(countData);
    listarPersonagens(countData);
  };
  const voltar = () => {
    console.log(count);
    const countData = count - 5;
    setCount(countData);
    listarPersonagens(countData);
  };

  return (
    <div>
      <div>
        <BarComponent change={onCHangeSearch}></BarComponent>
      </div>
      {loading ? (
        <Container>
          {personagem.map((persona) => (
            <li key={persona.id}>
              <img src={persona.image} alt={persona.name} />

              <Link to={`/persona?id=${persona.id}`}>
                <h1> {persona.name}</h1>
              </Link>
            </li>
          ))}
        </Container>
      ) : (
        <CircularProgress color='secondary' />
      )}
      <Button>
        <button onClick={voltar} variant='contained'>
          Voltar
        </button>
        <button onClick={proximo} variant='contained'>
          proximo
        </button>
      </Button>
    </div>
  );
}

export default Home;
