import type { NextPage } from "next";
import { useRouter } from "next/router";
import Login from "./auth/Login";

const Home: NextPage = () => {
  const router = useRouter();
  return <>{router.pathname == "/" && <Login />}</>;
};

export default Home;
