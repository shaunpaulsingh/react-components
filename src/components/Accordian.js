import { useState } from "react";
import { faqs } from "./data";
import AccordionItem from "./AccordianItem";

const Accordion = () => {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  return (
      <div className="third left">
          <h1>Accordian Component</h1>
          <ul className="accordion">
            {faqs.map((faq, index) => (
                <AccordionItem
                onToggle={() => handleToggle(index)}
                active={clicked === index}
                key={index}
                faq={faq}
                />
            ))}
            </ul>
          
            <div className="clearall"></div>
      </div>
    
  );
};

export default Accordion;