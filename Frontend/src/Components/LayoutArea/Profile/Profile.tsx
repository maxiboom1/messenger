import "./Profile.css";
import { useEffect, useState } from "react";
import usersService from "../../../Services/UsersService";
import { authStore } from "../../../Redux/AuthState";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MessageModel from "../../../Models/MessageModel";
import { ChatStore } from "../../../Redux/ChatMessagesState";

function Profile(): JSX.Element {

    const user = authStore.getState().user;
    console.log(user);

    const [chat, setChat] = useState<MessageModel[]>();

    useEffect(() => {
        (async () => {
            const users = await usersService.getAllUsers();
        })();

        setChat(ChatStore.getState().messages);

        const unsubscribe = ChatStore.subscribe(() => {
            setChat(ChatStore.getState().messages);
        })
        return () => unsubscribe();
    }, [])

    console.log("this is chat" + JSON.stringify(chat))

    function formatDate(date: any) {
        let d = new Date(date),
            hours = '' + (d.getHours()),
            minutes = '' + (d.getMinutes()),
            seconds = '' + (d.getSeconds()),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-') + ' ' + [hours, minutes, seconds].join(':')
    };

    return (
        <div className="Profile">
            <h3>Here will be personal page</h3>
            <h4>Chat (will migrate to its own instance - this is test):</h4>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 100 }} size="medium">
                    <TableBody>

                        {chat?.map((msg) => (
                            <TableRow hover key={msg.messageId}>
                                <TableCell component="th" scope="row">
                                    Sender {msg.senderUserId}: {msg.messageBody} Date: {formatDate(msg.messageDate)}
                                </TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>
        </div>


    );
}

export default Profile;
