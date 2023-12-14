import Diamond from "../assets/icon-star.svg"
import "./styles/faq.css"
import faqs from "../faqs.json"
import F from "./F"

const Faq = () => {

  return (
    <div className="box">
        <h1><img src={Diamond} id="diamond" alt="diamond" />FAQs</h1>

        {faqs.map(faq => {

          return (

            <F key={faq.id}
            question={faq.question}
            answer={faq.answer}/>
          )
        })}

    </div>
  )
}

export default Faq