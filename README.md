# README

This is a personal project that aims at reproducing Le Monde's [Forever Pollution Map](https://www.lemonde.fr/en/les-decodeurs/article/2023/02/23/forever-pollution-explore-the-map-of-europe-s-pfas-contamination_6016905_8.html).

The project is an exercise in using and extending the [svelte-leaflet API](https://github.com/ngyewch/svelte-leaflet).

## TODO
- [ ] svelte leaflet tooltip to heavy on the dom -> create 1 absolute positioned tooltip
- light/dark mode
  - [x]create header with dark mode toggle
  - [x] create alternativ color scheme in styles
  - [x] set and get from local storage
  - [x] change map tile to dark mode if dark mode in local storage
  - [x] change leaflet surface elements in dark mode
- [ ] create viz color schemes
- [ ] Info Dialogue
- [ ] rework surface colors