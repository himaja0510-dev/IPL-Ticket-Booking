
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MatchCard from "./components/MatchCard";

// Array containing match details
const matches = [
    {
        id: 1,
        matchName: "RCB vs CSK",
        date: "10 May 2026",
        venue: "Bengaluru",
        price: "₹800"
    },
    {
        id: 2,
        matchName: "MI vs KKR",
        date: "11 May 2026",
        venue: "Mumbai",
        price: "₹900"
    },
    {
        id: 3,
        matchName: "SRH vs CSK",
        date: "12 May 2026",
        venue: "Hyderabad",
        price: "₹700"
    }
];

function App() {
    return (
        <>
            <Navbar />

            <Hero />

            <section id="matches">
                <h2>Upcoming IPL Matches</h2>

                <div className="match-list">
                    {matches.map((match) => (
                        <MatchCard
                            key={match.id}
                            matchName={match.matchName}
                            date={match.date}
                            venue={match.venue}
                            price={match.price}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}

export default App;
