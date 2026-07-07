import { format } from "date-fns";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col gap-2">
        <img src={logo} alt="log img" />
        <p className="text-accent">Journalism Without Fear or Favour</p>
        <p className="font-semibold">
          {format(new Date(), "EEEE , MMMM MM , yyyy")}
        </p>
      </div>
    </div>
  );
};

export default Header;
