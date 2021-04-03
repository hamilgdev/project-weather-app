import { useState, useEffect, useRef } from "react";
import { getWeather } from "../helpers/getWeather";

export const useFetch = (call, request, type = "weather") => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    isMounted.current = false;
  }, []);

  useEffect(() => {
    setState({
      loading: true,
      error: null,
      data: null,
    });

    getWeather(call, request, type).then((data) => {
      setState({
        loading: false,
        error: null,
        data,
      });
    });
  }, [call, request, type]);

  return state;
};
