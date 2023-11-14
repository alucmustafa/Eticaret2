import { Braditem } from "./Braditem"
import "./Brads.css"

export const Brads = () => {
  return (
    <section className="brands">
    <div className="container">
      <ul className="brand-list">
        <Braditem/>
        <Braditem/>
        <Braditem/>
        <Braditem/>
        <Braditem/>
        <Braditem/>
      </ul>
    </div>
  </section>
  )
}
