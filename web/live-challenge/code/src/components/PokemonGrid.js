import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { Spinner } from "react-bootstrap";
import { InputGroup, FormControl } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import Pagination from "react-bootstrap-4-pagination";

import { InputContainer, PokemonContainer } from "../styles/pokemonGrid_style";

const POKEMONS_PER_PAGE = 18;

const PokemonGrid = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  /* Start incomplete search functionallity */
  const [currentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleChangeSearch = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  let filtered = pokemons.filter((item) => {
    return item.name.indexOf(input) !== -1;
  });
  /* End incomplete search functionallity */

  const getPokemons = async (url) => {
    try {
      let res = await fetch(url);
      let pokemonsData = await res.json();

      setPokemons(pokemonsData.results);
      setTotalPages(Math.ceil(pokemonsData.count / POKEMONS_PER_PAGE));
    } catch (error) {
      console.error("ERROR:", error);
    }
  };

  useEffect(() => {
    setLoading(true);
    getPokemons(
      `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${POKEMONS_PER_PAGE}`
    );
    setLoading(false);
  }, []);

  const handleKeyDown = (e) => {
    setInput("");
  };

  /* Start pagination incomplete functionallity */
  const handleChangePage = (page) => {
    console.log(`I'm the new page! ${page}`);
  };
  /* End pagination incomplete functionallity */

  return (
    <div>
      <InputContainer>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text
              id="basic-addon1"
              style={{ backgroundColor: "white" }}
            >
              <AiOutlineSearch />
            </InputGroup.Text>
          </InputGroup.Prepend>

          <FormControl
            placeholder="Search by keywords..."
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={handleChangeSearch}
            onKeyDown={handleKeyDown}
          />
        </InputGroup>
      </InputContainer>

      {loading ? (
        <Spinner animation="border" variant="warning" />
      ) : (
        <PokemonContainer>
          {pokemons.length !== 0 &&
            filtered.map((item, index) => (
              <PokemonCard key={index} name={item.name} url={item.url} />
            ))}
        </PokemonContainer>
      )}

      {/* Start pagination UI */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onClick={handleChangePage}
      />
      {/* End pagination UI */}
    </div>
  );
};

export default PokemonGrid;
