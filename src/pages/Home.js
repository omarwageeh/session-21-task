import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Main from "../components/Main";
import { useEffect, useRef, useState } from "react";

function Layout() {
  const [search, setSearch] = useState("developer");
  const [theme, setTheme] = useState(false);
  const [location, setLocation] = useState(null);
  const [fullTime, setFulltime] = useState(false);
  const me = useRef(null);

  useEffect(() => {
    if (theme) {
      me.current.classList.add("theme-dark");
      me.current.classList.remove("theme-light");
    } else {
      me.current.classList.add("theme-light");
      me.current.classList.remove("theme-dark");
    }
  }, [theme]);
  return (
    <div className="App" ref={me}>
      <Header setTheme={setTheme} />
      <SearchBar
        setSearch={setSearch}
        setLocation={setLocation}
        location={location}
        fullTime={fullTime}
        setFulltime={setFulltime}
      />
      <Main search={search} fullTime={fullTime} location={location} />
    </div>
  );
}

export default Layout;
