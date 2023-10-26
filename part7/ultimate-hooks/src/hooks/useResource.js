import axios from "axios";
import { useEffect, useState } from "react";

const useResource = (baseUrl) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    axios.get(baseUrl).then((response) => setResources(response.data));
  }, [baseUrl]);

  const create = (resource) => {
    axios
      .post(baseUrl, resource)
      .then((response) => setResources(resources.concat(response.data)));
  };

  const service = {
    create,
  };

  return [resources, service];
};

export default useResource;
