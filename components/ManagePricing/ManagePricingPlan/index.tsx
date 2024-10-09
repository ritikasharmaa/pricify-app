import { CustomizePricingIcon } from "../../../assets/icons";
import { ButtonsVariant } from "../../UI/Buttons/RoundedButton";
import MultiButtons, {
  MultiButton,
  MultibuttonVariants,
} from "../../UI/MultiButtons";
import ManagePricingTable from "./ManagePricingTable.tsx";

const buttons: MultiButton[] = [
  {
    id: "0",
    text: "Customize Pricing Page",
    leftIcon: <CustomizePricingIcon />,
  },
  {
    id: "1",
    text: "Add Plans",
  },
  {
    id: "2",
    text: "...more▽",
  },
];

const ManagePricingPlans = () => {
  return (
    <div className="mt-6 w-full">
      <MultiButtons buttons={buttons} variant={ButtonsVariant.PRIMARY} />
      <div className="px-20">
        <ManagePricingTable />
      </div>
    </div>
  );
};

export default ManagePricingPlans;
