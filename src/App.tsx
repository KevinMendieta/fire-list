import React, { Suspense } from "react";
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";

import AppRouter from "./routes";
import Header from "./components/Header";

function App() {
  return (
    <ChakraProvider>
      <Grid
        h="100%"
        w="100%"
        templateRows="100px 1fr "
        templateColumns="1fr"
        backgroundColor="#F6F7F9"
      >
        <GridItem colSpan={2}>
          <Header />
        </GridItem>
        {/* <GridItem rowSpan={2}></GridItem> */}
        <GridItem colSpan={2}>
          <Suspense fallback={<div>Loading...</div>}>
            <AppRouter />
          </Suspense>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
