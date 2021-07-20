import { useEffect } from "react";
import { callback } from "../lib/auth";
import Playlist from "../components/playlist";
import data from "../data/playlist";
import Main from "../layout/main";

const Index = () => {
  useEffect(() => {
    callback();
  }, []);
  return (
    <Main>
      <h1 style={{ fontSize: "56px" }}>Create playlist</h1>
      <Playlist data={data} />
    </Main>
  );
};

export default Index;