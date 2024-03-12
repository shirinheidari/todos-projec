import UseOnlineStatus from "../hooks/UseOnlineStatus";


export default function StatusUserOnline() {
    const isOnline = UseOnlineStatus();

    return (
        <div>
            {
                isOnline ? 'online' : 'Disconnected'
            }
            
        </div>
    )
}