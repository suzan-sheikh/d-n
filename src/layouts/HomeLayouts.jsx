import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homeLayouts/LeftAside";
import RightAside from "../components/homeLayouts/RightAside";

const HomeLayouts = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto my-5 bg-base-200 p-2 rounded-sm">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto my-5">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-11/12 my-5 mx-auto *:border grid grid-cols-12">
        <section className="col-span-3">
          <LeftAside></LeftAside>
        </section>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <section className="col-span-3">
          <RightAside></RightAside>
        </section>
      </main>
    </div>
  );
};

export default HomeLayouts;
