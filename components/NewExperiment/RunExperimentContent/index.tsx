import React from "react";
import RoundedButton, { ButtonsVariant } from "../../UI/Buttons/RoundedButton";
import Heading from "../../UI/Heading";
import InputField from "../../UI/Input/InputField";
import RangeSlider from "../../UI/Input/RangeInput";
import Select from "../../UI/Input/Select";
import Tabs, { Tab } from "../../UI/Tabs";

enum PercentageDistribution {
  EQUAL = "equal",
  CUSTOM = "custom",
}

const percentageDistributionTabs: Tab[] = [
  { label: "Split equally", value: PercentageDistribution.EQUAL },
  { label: "Custom", value: PercentageDistribution.CUSTOM },
];

const RunExperimentContent = () => {
  const [percentageDistribution, setPercentageDistribution] =
    React.useState<Tab>(percentageDistributionTabs[1]);

  const [ranges, setRanges] = React.useState({
    allocation: 0,
    control: 0,
    treatment: 0,
  });

  const handleTabChange = (tab: Tab) => {
    setPercentageDistribution(tab);
    if (tab.value === PercentageDistribution.EQUAL) {
      setRanges((prev) => ({ ...prev, control: 50, treatment: 50 }));
    }
  };

  return (
    <div className="p-11">
      <div className="flex flex-col items-center">
        <Heading className="mb-2" variant="h5">
          Name this experiment
        </Heading>
        <InputField
          placeholder="Elasticify Summer V1"
          className="w-[280px]"
          onChange={(e) => console.log(e.target.value)}
        />
        <RoundedButton
          variant={ButtonsVariant.UNSTYLED}
          text="Add a description"
          className="text-blue-600 hover:underline text-sm mt-2"
        />
      </div>
      <div className="flex flex-col items-center mt-8">
        <Heading className="mb-2" variant="h5">
          Segmentation
        </Heading>
        <Select
          options={[{ label: "All regions", value: "all-regions" }]}
          value={{ label: "All regions", value: "all-regions" }}
        />
      </div>
      <div className="flex flex-col items-center mt-8">
        <Heading className="mb-2" variant="h5">
          Allocation
        </Heading>
        <div className="flex gap-2.5 items-center">
          <RangeSlider
            className="w-[232px]"
            value={ranges.allocation}
            onChange={(value) =>
              setRanges((prev) => ({ ...prev, allocation: value }))
            }
          />
          <p className="w-10">{ranges.allocation}%</p>
        </div>
        <p className="text-sm font-medium w-[300px] text-center mt-3 text-gray-750">
          Percentage of customers that you want to allocate to this experiment
        </p>
      </div>
      <div className="flex flex-col items-center mt-8">
        <Heading className="mb-2" variant="h5">
          Split % between control & treatments
        </Heading>
        {/* <div className="mt-2 w-36 h-10 bg-red-300" /> */}
        <Tabs
          variant="capsule"
          tabs={percentageDistributionTabs}
          selectedTab={percentageDistribution}
          onChange={handleTabChange}
        />
        <div className="flex justify-between items-center w-96 mt-7">
          <div>
            <span className="text-purple-600">◆ &nbsp; </span>
            <span>Control</span>
          </div>
          <div className="flex items-center gap-2.5">
            <RangeSlider
              className="w-40"
              value={ranges.control}
              key={percentageDistribution?.value}
              onChange={(value) =>
                setRanges((prev) => ({ ...prev, control: value }))
              }
              disabled={
                percentageDistribution?.value === PercentageDistribution.EQUAL
              }
            />
            <p className="w-10">{ranges.control}%</p>
          </div>
        </div>
        <div className="flex justify-between items-center w-96 mt-7">
          <div>
            <span className="text-sky-600">■ &nbsp; </span>
            <span>Treatment A</span>
          </div>
          <div className="flex items-center gap-2.5">
            <RangeSlider
              className="w-40"
              key={percentageDistribution?.value}
              disabled={
                percentageDistribution?.value === PercentageDistribution.EQUAL
              }
              value={ranges.treatment}
              onChange={(value) =>
                setRanges((prev) => ({ ...prev, treatment: value }))
              }
            />
            <p className="w-10">{ranges.treatment}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RunExperimentContent;
