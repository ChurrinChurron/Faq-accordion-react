
import "./styles/faq.css"
import Plus from "../assets/icon-plus.svg"
import Minus from "../assets/icon-minus.svg"
import { useState } from "react"

const F = ({question, answer}) => {

    const[show, setShow] = useState(false);

  return (
    <div className="box__faqs">
        <h2 className="box__question">{question} <img onClick={() => setShow(!show)} src={show ? Minus :Plus}/></h2>
        { show && <h3 className="box__answer">{answer}</h3>}
    </div>
  )
}

export default F;