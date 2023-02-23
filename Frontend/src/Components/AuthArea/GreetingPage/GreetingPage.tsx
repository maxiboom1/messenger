import "./GreetingPage.css";
import ChatIcon from '@mui/icons-material/Chat';
import EmailIcon from '@mui/icons-material/Email';
import Diversity1Icon from '@mui/icons-material/Diversity1';

function GreetingPage(): JSX.Element {
    return (
        <div className="GreetingPage">
            <h1>Hello!</h1>
            <h2>This is our Messenger.</h2>
            <div className="greeting-body"><p>Here you can keep in touch with your friends and family and meet new people.</p>
                <div className="icons">
                    <> <ChatIcon fontSize="large" /> </>
                    <> <EmailIcon fontSize="large" /> </>
                    <> <Diversity1Icon fontSize="large" /> </></div>
            </div>
        </div>
    );
}

export default GreetingPage;
