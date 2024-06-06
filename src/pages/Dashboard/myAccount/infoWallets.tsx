import { Icon } from "@iconify/react/dist/iconify.js";
import { SectionTitle } from "../../../components/sectionTitle";

export const InfoWallets = () => {
  return (
    <form className="mt-12">
      <div className="bg-WHITE p-8 w-full rounded-md">
        <div className="flex items-center gap-4">
          <Icon height={16} icon={"heroicons:wallet"} color="black" />
          <SectionTitle size="sm" text="Carteiras" />
        </div>

        <div className="mt-8 flex flex-col gap-6 ">
          <p className="font-body font-normal text-body16 text-GRAY_400">
            Esse cliente não possui nenhuma carteiras.
          </p>
        </div>
      </div>
    </form>
  );
};