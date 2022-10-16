import React, { useState } from "react";
import { Dropdown, InputText } from "../../Components/Forms/Inputs";
import {
  SmallSubHeading,
  SubHeading,
  Text,
} from "../../Components/Typography/Typography";
import "./Consultation.scss";
import "../../Styling/Config.scss";

const Home = () => {
  const [details, setDetails] = useState({
    firstname: "",
    initials: "",
    email: "",
    fullname: "",
    address: "",
    day: "",
  });

  // set active class on the current step:
  const [active, setActive] = useState(1);

  // save data to local storage

  // remove prev button and next button aty both ends
  //validate on next button
  const handleNext = () => {
    setActive(active + 1);
  };

  const handlePrev = () => {
    setActive(active - 1);
  };
  const handlefirstname = (e) => {
    setDetails({
      ...details,
      firstname: e.target.value,
    });
  };

  const handleInitials = (e) => {
    setDetails({
      ...details,
      initials: e.target.value,
    });
  };
  const handleDay = (e) => {
    setDetails({
      ...details,
      day: e.target.value,
    });
  };

  return (
    <div className="consultation">
      <div className="consultation__container">
        {active === 1 && (
          <div className="consultation__container__step">
            <SubHeading title="Heyyy hot stuff, what's your name and preferred title?" />
            <div className="d-f">
              <Dropdown onChange={handleInitials}>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Ms</option>
                <option valie="Auntie">Auntie</option>
                <option value="Sweet-babe">Sweet Babe</option>
              </Dropdown>
              <InputText
                required="required"
                type="name"
                placeholder="First name is fine"
                onChange={handlefirstname}
              />
            </div>
          </div>
        )}
        {active === 2 && (
          <div className="consultation__container__step">
            <span className="subHeading">
              Hi {details.initials} {details.firstname}, my name is Tona and I
              am absolutely delighted to welcome you to the clan.
              <br /> How is your day going?
            </span>
            <Dropdown onChange={handleDay}>
              <option value="Terrific">Terrific</option>
              <option value="Basic">Basic</option>
              <option value="shege">Currently seeing shege</option>
            </Dropdown>
          </div>
        )}
        {active === 3 && (
          <div className="consultation__container__step">
            <SubHeading title="Here'something to make your day better" />
            <img src="../../Assets/white_wedding.JPG" alt="" />
          </div>
        )}
        {active === 4 && (
          <div className="consultation__container__step">
            <SmallSubHeading title="Here are some important things to know before you get started on your consultation process." /> <br /> <br />
            <SmallSubHeading title="Production Time:" />
            <Text title="- Production Lead Time for occasion dresses is a minimum of 10 business days." />
            <Text title="- Production Lead Time for bridal dresses is at least 1 month." />
            <b>     <Text title="Production time is subject to the details on and the design of your garment." /></b>
            <Text title="Any orders that need to be delivered in lesser time are considered express orders and so come at additional cost." />
            <b> <Text title="Brides are advised to book their dresses at least 3 months to their wedding date." /> </b><br />
            <SmallSubHeading title="Fabric:" />
            <Text
              title="I accept ONLY lace fabrics for aso-ebi and other occasion dresses. I DO NOT accept fabrics for plain custom dresses and wedding dresses."
            /> <br />
            <SmallSubHeading title="Pricing Guide:" />
            <Text title="- Starting price for wedding reception dresses, occasion dresses and aso-ebi dresses is N30,000/$67 (Exclusive of fabrics and any embellishments)." />
            <Text title="- Starting price for civil wedding look is N40,000/$89 (Exclusive of any embellishments). (Exclusive of  any embellishments)." />
            <Text title="- Starting price for traditional wedding look is N50,000/$111 (Exclusive of fabrics and any embellishments)." />
            <Text title="- Starting price for custom wedding dress is N100,000/$223 (Exclusive of any embellishments)." /> <br />
            <SmallSubHeading title="Consultations:" />
            <Text title="You'll be required to make a non-refundable consultation appointment deposit of N20,000/$45 for a wedding dress and N10,000/$23 for all other garments." />
            <b>
              <i>
                <Text title="Please note that this fee is deductible from your final bill. Kindly note that the final price of your garment depends on the details and design of your garment." />
              </i>
            </b> <br />
            <SmallSubHeading title="Consultation Policy:" />
            <Text title="- Consultations may be virtual or physical." />
            <Text title="- Consultations are held at my studio in Lagos, Nigeria." />
            <Text title="- Consultations are held at a time that is convenient for both parties." />
            <Text title="- Consultations are held to ensure that all important details are gotten from you and to help guide you towards choosing a design and color suited just for you." />
            <Text title="- In the case where you don't have style/ideas for your garment and a custom design has to be created, consultation helps me come up with a design that reflects your style, preferences, and desires. You will have 2 design choices to pick from." />
            <b>
              <i>
                <Text title="This comes at an additional cost which is not deductible from your final bill" />
              </i>
            </b>
            <Text title="- Consultations are typically between myself and clients. Please do not come with more 1 person as company for physical consultations." />
            <br />
            <SmallSubHeading title="Time management:" />
            <Text title="Kindly note that time management is very crucial and as such, please make sure to come in time for your appointment. If you arrive later that 15mins into scheduled time, your consultation is not guaranteed to hold the same day." /> <br />
            <SmallSubHeading title="Rescheduling:" />
            <Text title="Should you wish to reschedule your appointment to a later date, please send a notice at least 24hours to scheduled date and time of consultation." /> <br />
            <SmallSubHeading title="Thank You for choosing Tona. I look forward to a long, beautiful and prosperous relationship with you." /> <br /><br />
            <SmallSubHeading title="If you wish to continue with your consultation process, please fill out the form in the next page. You will be contacted within 24-48hours to continue the process." />
          </div>
        )}

        {/* consultation form here  */}

        <div className="consultation__container-btns">
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
