export const Status = ({ isHoldingScreen }: { isHoldingScreen: boolean }) => {
    return (
        <div className="status">
            <div className="status-container">
                <div className={`pulsing-circle ${isHoldingScreen && "on"}`}></div>
                <div className="label">
                    {isHoldingScreen ? "Connected" : "Disconnected"}
                </div>
            </div>
        </div>
    );
};
