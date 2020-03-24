import React from "react";
import HomeHeader from "../components/home-boxes/home-header";
import HomeCollection from "../components/home-boxes/home-collection";
import HomeSale from "../components/home-boxes/home-sale";
import FallCollection from "../components/home-boxes/home-fallcollection";
import { Grid, Box } from "grommet";

const Home = () => {
  return (
    <Grid
      fill
      responsive={true}
      rows={["30%", "auto"]}
      columns={["25%", "45%", "auto"]}
      gap="medium"
      areas={[
        { name: "header", start: [1, 0], end: [2, 1] },
        { name: "collection", start: [0, 0], end: [0, 1] },
        { name: "sale", start: [1, 1], end: [1, 1] },
        { name: "fallCollection", start: [2, 1], end: [2, 1] }
      ]}
    >
      <HomeHeader />
      <HomeCollection />
      <HomeSale />
      <FallCollection />
    </Grid>
  );
};

export default Home;