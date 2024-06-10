// ClientInitializer.js
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setInitialState } from "../redux/action";

const ClientInitializer = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

      dispatch(setInitialState({ user}));
    }
  }, [dispatch]);

  return <>{children}</>;
};

export default ClientInitializer;
