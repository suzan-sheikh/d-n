import MarqueeModule from "react-fast-marquee";

const Marquee = MarqueeModule.default;

const LatestNews = () => {
  return (
    <div className="flex items-center gap-2">
      <p className="bg-secondary text-white font-semibold p-2 rounded-sm">
        Latest:{" "}
      </p>
      <Marquee pauseOnHover={true} speed="100" >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, eos.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, eos.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
