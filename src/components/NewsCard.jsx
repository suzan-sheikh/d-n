import { FaStar, FaRegBookmark, FaShareAlt, FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, author, image_url, details, rating, total_view } = news;

  return (
    <div className="card bg-base-100 shadow-md border">
      {/* Header */}
      <div className="flex justify-between items-center bg-base-200 px-5 py-4 rounded-t-xl">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        <div className="flex gap-4 text-gray-500 text-xl">
          <FaRegBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Body */}
      <div className="card-body">
        <h2 className="card-title text-2xl leading-snug">{title}</h2>

        <img
          src={image_url}
          alt={title}
          className="rounded-xl h-72 object-cover w-full"
        />

        <p className="text-gray-600">
          {details.length > 220 ? details.slice(0, 220) + "..." : details}

          <span className="text-orange-500 font-semibold cursor-pointer ml-2">
            Read More
          </span>
        </p>

        <div className="divider my-2"></div>

        {/* Footer */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={
                  index < rating.number ? "text-orange-400" : "text-gray-300"
                }
              />
            ))}

            <span className="ml-2 font-semibold">{rating.number}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-500">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
