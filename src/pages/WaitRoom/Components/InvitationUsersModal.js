import React from 'react';
import { Button, Dialog, DialogContent, DialogTitle, Stack, Typography } from '@mui/material';
import SocketContext from '~/Context/SocketContext';

const InvitationUsersModal = ({ open, handleClose, users, mode }) => {
    const socketService = React.useContext(SocketContext);

    const handleInviteUser = React.useCallback((email) => () => {
        console.log('Invite: ', email);
        socketService.invite(email, mode);
    }, []);

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
                style: { borderRadius: 15 },
            }}
            maxWidth="sm"
            fullWidth
        >
            <DialogContent sx={{ textAlign: 'center' }}>
                <DialogTitle>
                    <Typography variant="body1" fontWeight="bold" fontSize={20}>
                        Users
                    </Typography>
                </DialogTitle>
                <Stack justifyContent="center" alignItems="center" spacing={1}>
                    {users?.map((user) => {
                        return (
                            <Stack direction="row" justifyContent="space-between" width={1}>
                                <Typography>{user.email}</Typography>
                                <Button
                                    size="small"
                                    variant="contained"
                                    disableElevation
                                    onClick={handleInviteUser(user.email)}
                                >
                                    Invite
                                </Button>
                            </Stack>
                        );
                    })}
                </Stack>
            </DialogContent>
        </Dialog>
    );
};

export default InvitationUsersModal;
