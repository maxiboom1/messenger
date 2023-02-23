import { useEffect, useState } from "react";
import { authStore } from "../../../Redux/AuthState";
import { SocketContext, socket } from "../../../Utils/socket";
import AuthMenu from "../../AuthArea/AuthMenu/AuthMenu";
import ControlPanel from "../ControlPanel/ControlPanel";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
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


    if (isAuthorized) {
        return (
            <SocketContext.Provider value={socket}>
                <div className="Layout">
                    <header>
                        <Header />
                    </header>

                    <main>
                        <Main />
                    </main>

                    <aside>
                        <ControlPanel />
                    </aside>

                    <footer>
                        <Footer />
                    </footer>
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
