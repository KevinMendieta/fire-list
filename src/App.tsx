import React, { Suspense } from "react";
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";

import AppRouter from "./routes";
import Header from "./components/Header";
import { BigSpinner } from "./components/Spinner";

function App() {
  return (
    <ChakraProvider>
      <Grid
        h="100%"
        w="100%"
        templateRows="100px 1fr "
        templateColumns="1fr"
        backgroundColor="#F7F7F7"
      >
        <GridItem colSpan={2}>
          <Header />
        </GridItem>
        <GridItem colSpan={2}>
          <Suspense fallback={<BigSpinner />}>
            <AppRouter />
          </Suspense>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
