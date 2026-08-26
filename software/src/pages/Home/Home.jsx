import Room from "./components/Room/Room.jsx";
import "./Home.css";

const Home = () => {
  return (
    <main className="home">

      <div className="home-content-area">
        <Room roomNo={101} status="ready" />
        <Room roomNo={701} status="empty" />
        <Room roomNo={155} status="cleaning" />
        <Room roomNo={211} status="inspection" />
        <Room roomNo={432} status="maintainance" />
        <Room roomNo={1005} status="booked" />
      </div>
    </main>
  )
}

export default Home
