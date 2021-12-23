import React, {useState} from "react";

function What() {
    const data = [
        {
            title: 'Section 1',
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem.`
          },
          {
            title: 'Section 2',
            content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
            reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
            quaerat iure quos dolorum accusantium ducimus in illum vero commodi
            pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
            quidem maiores doloremque est numquam praesentium eos voluptatem amet!
            Repudiandae, mollitia id reprehenderit a ab odit!`
          },
          {
            title: 'Section 3',
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
            quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
            dolor ut sequi minus iste? Quas?`
          }
    ]
    const Accordion = ({ title, content }) => {
        const [isActive, setIsActive] = useState(false);
      
        return (
          <div className="accordion-item">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <div>
                    <span></span>
                    {title}
                </div>
              {/* <div>{isActive ? '-' : '+'}</div> */}
            </div>
            {isActive && <div className="accordion-content">{content}</div>}
          </div>
        );
      };
    return(
        <div className="w-full py-16">
            <div className="w-1/2 mx-auto text-center space-y-2 text-accent">
                <h1 className="text-accent text-5xl font-bold font-primary leading-11">Was ist der Medienkodex?</h1>

                <div className="bg-primary text-left p-5 m-5">
                    {data.map(({title, content}) => (
                        <Accordion className="my-5" title={title} content={content} />
                    ))}
                </div>
                
            </div>

        </div>
    )
}

export default What;