import { useState } from "react";
import { useNavigate } from "react-router-dom";

//
export default function SearchOrder() {
  const navigate = useNavigate();
  const [serachText, setSerachText] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!serachText) return;
    navigate(`/order/${serachText}`);
    setSerachText("");
  };

  return (
    <form onSubmit={handelSubmit}>
      <input
        // type="search"
        value={serachText}
        onChange={(e) => setSerachText(e.target.value)}
      />
    </form>
  );
}
