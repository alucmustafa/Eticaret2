import { Campaingitem } from "./Campaingitem";
import "./Campaings.css"


export const Campaings = () => {
  return (
    <section className="campaigns">
      <div className="container">
        <div className="campaigns-wrapper">
          <Campaingitem />
          <Campaingitem />
        </div>
        <div className="campaigns-wrapper">
          <Campaingitem />
          <Campaingitem />
        </div>
      </div>
    </section>
  );
};
