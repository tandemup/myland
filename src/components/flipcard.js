//import Container from "react-bootstrap/Container";
//import Image from "react-bootstrap/Image";

function AppFlipcard() {
  return (
    <section id="flip" className="block flipcard-block">
      <div className="flipcontainer">
        <div className="flipcard">
          <div className="flipfront"></div>
          <div className="flipback">
            <h1>Back of Card</h1>
            <p>Additionald info on the back of the card</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppFlipcard;
