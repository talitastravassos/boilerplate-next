import { Dumb } from "components/Dumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dumb Page - Next Boilerplate",
};

const DumbPage = () => {
  return <Dumb title="Dumb Page" />;
};

export default DumbPage;
