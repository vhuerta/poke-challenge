# Practical exercise

- Locate in this repository's root and execute `make setup-web-challenge`
- Open a new vscode window with the new folder copied to your desktop `code ./web-challenge`
- Start a live share session and provide its link to the candidate
- Ask candidate to start the session using its web browser (Using vscode might have issues but you could try. Live share plugin might be required.)

<img src=./assets/liveshare.jpg width="300" />

## Implement pagination (10 minutes)

Candidate has to implement a simple pagination funtionality.

Component to start with:
[`/src/components/PokemonGrid.js`](./code/src/components/PokemonGrid.js)

They shouldn't care about installing any additional dependency since `react-bootstrap-4-pagination` is ready to be used and a dummy instance has been placed at the component's bottom.

API docs for response reference can be found here: https://pokeapi.co/docs/v2#resource-listspagination-section

Pagination component docs can be found here: https://github.com/shuplenkov/react-bootstrap-pagination, but it shouldn't be necessary.

## Adjust modal header styles (10 minutes)

Candidate has to improve styles in the details modal component's header.

Provide candidate with the corresponding spec and let them play with it.

<img src=./assets/visual-reference.png width="400" />

Component path:
[`/src/components/PokemonCard.js`](./code/src/components/PokemonCard.js)

This project is using styled components, so candidate will have to modify the following file:
[`/src/styles/pokemonCard_style.js`](./code/src/styles/pokemonCard_style.js)

No previous experience with styles components is necessary.

## Complement functionality (20 minutes)

Here we have two options:

### Add support for Radar chart (The easy one)

Radar chart component is not showing any data because of bad data format. Candidate has to properly format data, so the chart can show it.

Component to modify:
[`/src/components/RadarChart.js`](./code/src/components/RadarChart.js)

### Finish search bar functionality

Currently the search bar only filters pokemons already on memory. Candidate should add support for:

- Search pokemons by number
- Search pokemon remote coincidences (For instance, pikachu is not present in the first fetched page, so we could start with this example.)
- Improve partial matches

Component to modify:
[`/src/components/PokemonGrid.js`](./code/src/components/PokemonGrid.js)
