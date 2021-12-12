import React, {useState} from "react";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Routes from "./containers/Routes";

const App = () => {
    const [searchText, setSearchText] = useState("");
    return (
        <>
            <section className={styles.nav}>
                <NavBar searchText={searchText} setSearchText={setSearchText} />
            </section>
            <section className={styles.content}>
                <Routes searchText={searchText} />
            </section>
        </>
    );
};

export default App;
