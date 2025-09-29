import "./App.css";
import Container from "./components/container/Container";
import { navigationData } from "./components/header/navigationData";
// import Header from "./components/header/Header";
import CustomHeader from "./components/header/CustomHeader";
import PricingOpt from "./components/pricing/PricingOpt";
import { Suspense } from "react";
import ResultChart from "./components/resultChart/ResultChart";
import axios from "axios";
import MarksChart from "./components/marksChart/MarksChart";

const pricingPromise = fetch("PricingData.json").then((response) =>
  response.json()
);

const marksPromise = axios.get("PricingData.json");

function App() {
  return (
    <>
      <Container>
        {/* Header */}
        <header>
          {/* <Header></Header> */}
          <CustomHeader navigationData={navigationData}></CustomHeader>
        </header>

        {/* Main */}
        <main>
          {/* Pricing */}
          <Suspense
            fallback={
              <span className="loading loading-spinner loading-lg"></span>
            }
          >
            <PricingOpt pricingPromise={pricingPromise}></PricingOpt>
          </Suspense>

          {/* Result Chart */}
          <ResultChart></ResultChart>

          {/* Marks Chart */}
          <Suspense
            fallback={
              <span className="loading loading-spinner loading-lg"></span>
            }
          >
            <MarksChart marksPromise={marksPromise}></MarksChart>
          </Suspense>
        </main>
      </Container>
    </>
  );
}

export default App;
