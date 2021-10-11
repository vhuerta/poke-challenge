import { useState, useEffect } from "react";
import { Card, Modal } from "react-bootstrap";

import StatsChart from "../components/StatsChart";
import RadarStats from "../components/RadarChart";
import {
  PokeCard,
  TitleContainer,
  TypePill,
  TextContainer,
  Subtitle,
  ButtonContainer,
  ToogleSwitch,
} from "../styles/pokemonCard_style";

const PokemonCard = ({ name, url }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [show, setShow] = useState(false);
  const [showRadar, setShowRadar] = useState(false);

  useEffect(() => {
    const getPokemonInfo = async () => {
      let res = await fetch(url);
      const pokemonDetails = await res.json();
      let type = pokemonDetails.types.map((type) => type.type);
      let statName = pokemonDetails.stats.map((stat) => stat.stat.name);
      let statValue = pokemonDetails.stats.map((stat) => stat.base_stat);

      setPokemonInfo({
        id: pokemonDetails.id,
        img: pokemonDetails.sprites.front_default,
        height: pokemonDetails.height,
        weight: pokemonDetails.weight,
        types: type,
        stats: {
          name: statName,
          stats: statValue,
        },
      });
    };

    getPokemonInfo();
  }, [url]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChart = () => {
    setShowRadar(!showRadar);
  };

  if (!pokemonInfo) return null;

  return (
    <>
      <PokeCard onClick={handleShow}>
        <Card.Img variant="top" src={pokemonInfo.img} />
        <Card.Body>
          <Card.Title className="text-capitalize font-weight-bold">
            {name}
          </Card.Title>
          <Card.Text>{`#${pokemonInfo.id}`}</Card.Text>
        </Card.Body>
      </PokeCard>

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
      >
        {/* Start fixing header styles */}
        <Modal.Header>
          <TitleContainer>
            <img src={pokemonInfo.img} alt="" />
            <h6>#{pokemonInfo.id}</h6>
            <h5>
              <strong>{name.charAt(0).toUpperCase() + name.slice(1)}</strong>
            </h5>

            <div>
              {pokemonInfo.types.map((type, index) => (
                <TypePill key={index} type={type.name}>
                  {type.name}
                </TypePill>
              ))}
            </div>

            <h6>
              Height:
              {pokemonInfo.height}
            </h6>
            <h6>
              Weight:
              {pokemonInfo.weight}
            </h6>
            {/* End fixing header styles */}
          </TitleContainer>
        </Modal.Header>

        <Modal.Body>
          <TextContainer>
            <Subtitle>STATISTICS</Subtitle>
          </TextContainer>

          {showRadar ? (
            <RadarStats stats={pokemonInfo.stats} />
          ) : (
            <StatsChart stats={pokemonInfo.stats} />
          )}

          <ButtonContainer>
            <ToogleSwitch>
              Chart view
              <label className="switch">
                <input type="checkbox" />
                <span className="slider" onClick={handleChart}></span>
              </label>
            </ToogleSwitch>
          </ButtonContainer>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PokemonCard;
