import { useParams } from "react-router-dom";

const NewsDetails = () => {
  const { id } = useParams<{ id: string }>();

  return <div>NewsDetails placeholder - ID: {id}</div>;
};

export default NewsDetails;
