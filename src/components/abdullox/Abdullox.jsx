import "./Abdullox.css";

const Abdullox = () => {
  return (
    <div className="plan">
      <div className="container">
        <div className="pln-wr">
          <h2>Ready to get started?</h2>
          <p>Choose a plan fits to your needs.</p>
          <div className="cards-wr">
            <div className="card-left-wr">
              <h3>Personal</h3>
              <p>Best for brands that need designs on an ongoing basis.</p>
              <div className="divcha">
                <span className="price">$2.99</span>
                <span style={{ color: "gray" }}>/mo</span>
              </div>
              <button className="card-btn">Try For Free</button>
              <p>Request unlimited designs</p>
              <p>Deliverables as-you-need</p>
              <p>No limit on revisions</p>
            </div>
            <div className="card-right-wr">
              <h3>Business</h3>
              <p>Best for brands that need designs on an ongoing basis.</p>
              <div className="divcha">
                <span className="price">$8.99</span>
                <span style={{ color: "gray" }}>/mo</span>
              </div>
              <button className="card-btn2">Try For Free</button>
              <p>Request unlimited designs</p>
              <p>Deliverables as-you-need</p>
              <p>No limit on revisions</p>
              <p>No code needed</p>
              <p>Individual help center</p>
              <p>Your personal mentor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abdullox;
