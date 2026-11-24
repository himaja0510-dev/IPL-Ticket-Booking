
import { useState } from "react";

function MatchCard(props) {

    const [isBooked, setIsBooked] = useState(false);

    function handleBooking() {
        setIsBooked(!isBooked);
    }

    return (
        <div className="match-card">
            <h3>{props.matchName}</h3>

            <p>Date: {props.date}</p>

            <p>Venue: {props.venue}</p>

            <p>Ticket Price: {props.price}</p>

            <button onClick={handleBooking}>
                {isBooked ? "Ticket Selected" : "Book Ticket"}
            </button>
        </div>
    );
}

export default MatchCard;
