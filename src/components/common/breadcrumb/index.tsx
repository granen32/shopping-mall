import { pages } from "@/routes";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  const breadcrumbItems = pathSegments
    .map((segment, index, arr) => {
      const path = "/" + arr.slice(0, index + 1).join("/");
      const page = pages.find(
        (p) =>
          p.route === path ||
          (p.route.includes(":id") && path.includes("/products/"))
      );
      if (!page) return null;
      const isLast = index === arr.length - 1;
      const isNumeric = /^\d+$/.test(segment);
      let pageName = segment;
      if (isNumeric && index > 0) {
        pageName = arr[index - 1] + segment;
      }
      pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);
      return {
        text: isLast ? pageName : pageName,
        path: isLast ? undefined : path,
      };
    })
    .filter(Boolean);
  return (
    <nav aria-label="breadcrumb" className="text-left">
      <ol className="inline-flex text-sm leading-7 text-[#141414] uppercase font-bold">
        {breadcrumbItems.map((item, index) => (
          <li
            key={index}
            className={`font-medium ${
              index !== breadcrumbItems.length - 1 ? "mr-2" : ""
            }`}>
            {item && item.path ? (
              <Link to={item.path} className="text-[#9b9b9b]">
                {item.text}
              </Link>
            ) : (
              <span className="text-[#141414]">{item && item.text}</span>
            )}
            {index !== breadcrumbItems.length - 1 && (
              <span className="mx-2">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
