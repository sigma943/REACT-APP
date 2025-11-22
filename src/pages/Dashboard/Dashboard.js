
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function Dashboard() {
    const {theme, toggleTheme} = useContext(ThemeContext);

    useEffect(() => {
        console.log(theme);
    }, [theme]);

    const handleClick = () => {
        toggleTheme();
    };

    return (
        <main className={theme}>
        <h1>Dashboard</h1>
        <span>Obecny motyw: {theme}</span><br />
        </main>
    );
}


export default Dashboard;