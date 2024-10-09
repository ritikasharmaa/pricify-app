import NewExperiment from "../components/NewExperiment";
import PriceTableContextProvider from "../contexts/PriceTableContext";

const NewExperimentPage = () => {
  return (
    <PriceTableContextProvider>
      <NewExperiment />
    </PriceTableContextProvider>
  );
};

export default NewExperimentPage;
