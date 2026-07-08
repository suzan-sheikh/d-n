import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const newsData = useLoaderData();
  const { id } = useParams();

  const categoryNews =
    id == "0"
      ? newsData
      : id == "1"
        ? newsData.filter((news) => news.others.is_today_pick == true)
        : newsData.filter((news) => news.category_id == id);

  console.log(categoryNews);

  return (
    <div className="p-5">
      <h2 className="font-bold mb-5">
        Total News -{" "}
        <span className="text-secondary">{categoryNews.length}</span> Found
      </h2>
      <div className="grid grid-cols-1 gap-5">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
