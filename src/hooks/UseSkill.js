import axios from "axios";
import { useEffect, useState } from "react";
const UseSkill = () => {
  const [skills, setSkill] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios("/Data.json")
        .then((data) => setSkill(data.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }, 500);
  }, []);
  return { skills, loading, error };
};
export default UseSkill;
