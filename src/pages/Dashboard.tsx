import { GetServerSideProps } from "next";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { parseCookies } from "nookies";
import { getApiClient } from "../services/axios";
export default function Dashboard() {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    // api.get("/users");
  }, []);
  return (
    <>
      <div>{user?.name}</div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getApiClient(ctx);
  const { "simple-login-token": token } = parseCookies(ctx);
  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  apiClient.get("/users");
  return {
    props: {},
  };
};
