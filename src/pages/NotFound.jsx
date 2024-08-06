import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-bg dark:bg-bg_dark">
      <Link to={"/"} className="mt-5 animate-bounce font-bold text-primary">
        go to home?{" "}
      </Link>
    </div>
  );
};

export default NotFound;
