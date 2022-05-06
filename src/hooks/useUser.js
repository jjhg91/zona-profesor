import { useCallback } from "react";
import { useState } from "react";

export default function useUser() {
  const [jwt, setJWT] = useState(sessionStorage.getItem("jwt"));
  const [isLogged, setIsLogged] = useState(
    Boolean(sessionStorage.getItem("jwt"))
  );
  const login = useCallback(
    (e) => {
      sessionStorage.setItem("jwt", e);
      setJWT(e);
      setIsLogged(true);
    },
    [setJWT, setIsLogged]
  );
  const logout = useCallback(
    (e) => {
      sessionStorage.removeItem("jwt");
      setJWT(null);
      setIsLogged(false);
    },
    [setJWT, setIsLogged]
  );
  return { isLogged, jwt, login, logout };
}
