import { useEffect, useState } from "react";
import { authStore } from "../../../Redux/AuthState";
import { SocketContext, socket } from "../../../Utils/socket";
import AuthMenu from "../../AuthArea/AuthMenu/AuthMenu";
import ControlPanel from "../ControlPanel/ControlPanel";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Routing from "../Routing/Routing";
import "./Layout.css";

function Layout(): JSX.Element {
    const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

    useEffect(() => {
        console.log("doing something");

        const token = authStore.getState().token;
        if (token) {
            setIsAuthorized(true);
        }
    }, []);

    // had to use if-else and not conditional rendering with && because the latter ruins CSS of AuthMenu

    if (isAuthorized) {
        return (
            <SocketContext.Provider value={socket}>
                <div className="Layout">
                    <header>
                        <Header />
                    </header>

                    <main>
                        <Routing />
                    </main>

                    {/* <main>
                        <Main />
                    </main> */}

                    <aside>
                        <ControlPanel />
                    </aside>

                    {/* <footer>
                        <Footer />
                    </footer> */}
                </div>
            </SocketContext.Provider>
        );
    } else {
        return (
            <AuthMenu />
        )
    }

}

export default Layout;
