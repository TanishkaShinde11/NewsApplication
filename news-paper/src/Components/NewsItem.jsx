import image from '../assets/news.jpg';

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card text-dark mb-4 d-inline-block mx-3 shadow-sm border-0"
      style={{
        maxWidth: "345px",
        backgroundColor: "#f9f9f9",
        borderRadius: "15px",
        padding: "10px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.05)";
      }}
    >
      <img
        src={src || image} // use your own image if src is null
        onError={(e) => (e.target.src = image)} // replace broken image
        className="card-img-top rounded-3"
        alt="news"
        style={{
          objectFit: "cover",
          height: "200px",
          borderRadius: "10px",
          width: "100%",
        }}
      />

      <div className="card-body" style={{ padding: "10px" }}>
        <h5 className="card-title fw-bold text-primary">
          {title ? title.slice(0, 60) : "No Title"}
        </h5>
        <p className="card-text text-secondary" style={{ minHeight: "70px" }}>
          {description ? description.slice(0, 90) : "No Description Available"}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary"
          style={{ borderRadius: "25px", padding: "6px 16px" }}
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
