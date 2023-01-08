import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Dropdown, Input } from "../../Components/Forms/Inputs";
import {
  SmallSubHeading,
  SubHeading,
  Text,
} from "../../Components/Typography/Typography";
import "./Consultation.scss";
import "../../Styling/Config.scss";
import ToastAlert from "../../Components/Toast-Alert/ToastAlert";
import bunny from "../../Assets/love-bunny.gif";

const Home = () => {
  const [toast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const [details, setDetails] = useState({
    firstname: "",
    initials: "",
    email: "",
    fullname: "",
    address: "",
    day: "",
    hear: "",
    styleHave: "",
    outfitType: "",
    fabricHave: "",
  });

  // set active class on the current step:
  const [active, setActive] = useState(1);
  const navigate = useNavigate();

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wwzbenj",
        "template_9aplkq8",
        form.current,
        "0P4eaz4oj8jr9VUqY"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            setToast(true);
            setToastMessage("Your message has been sent successfully");
            setTimeout(() => {
              setToast();
            }, 3000);
            // navigate to the payment page
            navigate("/payment");
          } else {
            setToast(true);
            setToastMessage(
              "There was an error sending your message, please try again"
            );
            setTimeout(() => {
              setToast();
            }, 3000);
          }
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          if (
            error.text ===
            "Variables size limit. The maximum allowed variables size is 50Kb"
          ) {
            setToast(true);
            setToastMessage("Please choose a smaller image");
            setTimeout(() => {
              setToast();
            }, 3000);
          }
        }
      );
  };

  const handleNext = (e) => {
    // validate data
    if (active === 1) {
      if (details.firstname === "") {
        setToast(true);
        setToastMessage("Please enter your name");
        setTimeout(() => {
          setToast();
        }, 3000);
        return;
      } else {
        setToast(false);
      }
      if (!details.initials) {
        setToast(true);
        setToastMessage("Please enter your initials");
        setTimeout(() => {
          setToast();
        }, 3000);
        return;
      }
    }
    if (active === 2) {
      if (details.day === "") {
        setToast(true);
        setToastMessage("Please tell me how your day is going 😥");
        setTimeout(() => {
          setToast();
        }, 3000);
        return;
      }
    }

    setActive(active + 1);
    setDetails({ ...details, [e.target.name]: e.target.value });
    localStorage.setItem("details", JSON.stringify(details));
    // console.log(details);
  };

  const handlePrev = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
    localStorage.setItem("details", JSON.stringify(details));
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

  const handleHear = (e) => {
    setDetails({
      ...details,
      hear: e.target.value,
    });
  };
  const handleOutfitType = (e) => {
    setDetails({
      ...details,
      outfitType: e.target.value,
    });
  };
  const handleFabricHave = (e) => {
    setDetails({
      ...details,
      fabricHave: e.target.value,
    });
  };
  const handleStyleHave = (e) => {
    setDetails({
      ...details,
      styleHave: e.target.value,
    });
  };
  // use toastAlert to display error messages
  // const toastAlert = (message) => {

  return (
    <div className="consultation">
      {toast && <ToastAlert message={toastMessage} />}
      <div className="consultation__container">
        {active === 1 && (
          <div className="consultation__container__step">
            <SubHeading title="Heyyy hot stuff, what's your name and preferred title?" />
            <div className="d-f">
              <Dropdown onChange={handleInitials}>
                <option value="0">Initials</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Ms</option>
                <option valie="Auntie">Auntie</option>
                <option value="Sweet Babe">Sweet Babe</option>
              </Dropdown>
              <Input
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
              <option value="0">Pick an Option</option>
              <option value="Terrific">Terrific</option>
              <option value="Basic">Basic</option>
              <option value="shege">Currently seeing shege</option>
            </Dropdown>
          </div>
        )}
        {active === 3 && (
          <div className="consultation__container__step">
            <SubHeading title="Here's something to make your day better" />
            <div className="bunny">
              <img className="gif" src={bunny} alt="bunny" />
            </div>
          </div>
        )}
        {active === 4 && (
          <div className="consultation__container__step">
            <SmallSubHeading title="Here are some important things to know before you get started on your consultation process." />{" "}
            <br /> <br />
            <SmallSubHeading title="Production Time:" />
            <Text title="- Production Lead Time for occasion outfits is a minimum of 10 business days." />
            <Text title="- Production Lead Time for bridal outfits is at least 1 month." />
            <b>
              {" "}
              <Text title="Production time is subject to the details on and the design of your outfit." />
            </b>
            <Text title="Any orders that need to be delivered in lesser time are considered express orders and so come at additional cost." />
            <b>
              {" "}
              <Text title="Brides are advised to book their outfits at least 3 months to their wedding date." />{" "}
            </b>
            <br />
            <SmallSubHeading title="Fabric:" />
            <Text title="I accept ONLY lace fabrics for aso-ebi and other occasion outfits. I DO NOT accept fabrics for plain custom outfits and wedding outfits." />{" "}
            <br />
            <SmallSubHeading title="Pricing Guide:" />
            <Text title="- Starting price for wedding reception outfits, occasion outfits and aso-ebi outfits is N40,000/$89 (Exclusive of fabrics and any embellishments)." />
            <Text title="- Starting price for civil wedding outfits is N50,000/$111 (Exclusive of any embellishments)." />
            <Text title="- Starting price for traditional wedding outfits is N60,000/$134 (Exclusive of fabrics and any embellishments)." />
            <Text title="- Starting price for custom wedding dress is N100,000/$223 (Exclusive of any embellishments)." />{" "}
            <br />
            <SmallSubHeading title="Consultations:" />
            <Text title="You'll be required to make a non-refundable consultation appointment deposit of N30,000/$67 for a wedding  outfit and N15,000/$34 for all other outfits." />
            <b>
              <i>
                <Text title="Please note that this fee is deductible from your final bill. Kindly note that the final price of your outfit depends on the details and design of your outfit." />
              </i>
            </b>{" "}
            <br />
            <SmallSubHeading title="Consultation Policy:" />
            <Text title="- Consultations may be virtual or physical." />
            <Text title="- Consultations are held at my studio in Lagos, Nigeria." />
            <Text title="- Consultations are held at a time that is convenient for both parties." />
            <Text title="- Consultations are held to ensure that all important details are gotten from you and to help guide you towards choosing a design and color suited just for you." />
            <Text title="- In the case where you don't have style/ideas for your outfit and a custom design has to be created, consultation helps me come up with a design that reflects your style, preferences, and desires. You will have 2 design choices to pick from." />
            <b>
              <i>
                <Text title="This comes at an additional cost which is not deductible from your final bill." />
              </i>
            </b>
            <Text title="- Consultations are typically between myself and clients. Please do not come with more than 1 person as company for physical consultations." />
            <br />
            <SmallSubHeading title="Time management:" />
            <Text title="Kindly note that time management is very crucial and as such, please make sure to come in time for your appointment. If you arrive later that 15 minutes into scheduled time, your consultation is not guaranteed to hold the same day." />{" "}
            <br />
            <SmallSubHeading title="Rescheduling:" />
            <Text title="Should you wish to reschedule your appointment to a later date, please send a notice at least 24hours to scheduled date and time of consultation." />{" "}
            <br />
            <SmallSubHeading title="Thank You for choosing Tona. I look forward to a long, beautiful and prosperous relationship with you." />{" "}
            <br />
            <br />
            <SmallSubHeading title="If you wish to continue with your consultation process, please fill out the form in the next page. You will be contacted within 24-48hours to continue the process." />
          </div>
        )}
        {/* consultation form here  */}
        {active === 5 && (
          <form
            enctype="multipart/form-data"
            ref={form}
            onSubmit={sendEmail}
            className="consultation__container__form"
          >
            <SubHeading title="Let's get started" />
            <div>
              <Input
                required="required"
                name="user_name"
                type="name"
                placeholder="Full Name"
              />
            </div>
            <div className="d-f">
              <Input
                required="required"
                name="user_email"
                type="email"
                placeholder="Email"
              />
              <Input
                required="required"
                type="tel"
                name="user_phone"
                placeholder="+2348012345678"
              />
            </div>
            <Input
              required="required"
              name="user_address"
              type="text"
              placeholder="Address"
            />
            <div className="d-f">
              <Input
                type="text"
                name="user_handle"
                placeholder="Instagram Handle"
              />
              <Dropdown required="required" name="ref" onChange={handleHear}>
                <option value="0">How did you hear about TONA?</option>
                <option value="instagram">Instagram</option>
                <option value="facebook">Facebook</option>
                <option value="search">Online Search</option>
                <option value="twitter">Twitter</option>
                <option value="referral">Referral</option>
                <option value="other">Other</option>
              </Dropdown>
            </div>
            <Dropdown
              required="required"
              name="outfit_type"
              onChange={handleOutfitType}
            >
              <option value="0">
                What type of outfit are you looking to create?
              </option>
              <option value="white-wedding">White Wedding Dress</option>
              <option value="traditional-wedding">
                Traditional Wedding Outfit
              </option>
              <option value="reception-wedding">
                Wedding Reception Outfit
              </option>
              <option value="civil-wedding">Civil Wedding Outfit</option>
              <option value="occassion">Occasion/Aso-ebi Outfit</option>
              <option value="other">Other</option>
            </Dropdown>
            <Dropdown
              required="required"
              name="fabric_have"
              onChange={handleFabricHave}
            >
              <option value="0">Do you have your fabric?</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Dropdown>{" "}
            {details.fabricHave === "yes" ? (
              <div className="align-left">
                <SmallSubHeading title="Please upload a clear piture of your fabric" />
                <Input name="cid:fabric_img" required="required" type="file" />
              </div>
            ) : details.fabricHave === "no" ? (
              <Input
                required="required"
                type="text"
                name="fabric_budget"
                placeholder="What is your budget for fabric per yard? in Naira"
              />
            ) : (
              ""
            )}
            <Dropdown
              required="required"
              name="style_have"
              onChange={handleStyleHave}
            >
              <option value="0">
                Do you have styles/ideas for your outfit?
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Dropdown>
            {details.styleHave === "yes" ? (
              <div className="align-left">
                {" "}
                <SmallSubHeading title="Kindly upload clear image(s) of your style/ideas below." />{" "}
                <br />
                <SmallSubHeading title="Please add precise description and instructions to each image" />
                <div className="images">
                  <div className="images__upload">
                    <Input required="required" name="cid:img1" type="file" />
                    <Input
                      type="text-area"
                      required="required"
                      name="img1_desc"
                      placeholder="E.g I like the neckline"
                    />
                  </div>
                  <div className="images__upload">
                    <Input name="cid:img2" type="file" />
                    <Input
                      type="text-area"
                      name="img2_desc"
                      placeholder="E.g I like the skirt"
                    />
                  </div>
                  <div className="images__upload">
                    <Input type="file" name="cid:img3" />
                    <Input
                      type="text-area"
                      required="required"
                      name="cid:img3_desc"
                      placeholder="E.g I like the bodice"
                    />
                  </div>
                </div>
                <br />
                <Input
                  type="text-area"
                  required="required"
                  name="style_desc"
                  placeholder="Please state your fabric type, color choices, dress length and other important considerations."
                />
              </div>
            ) : details.styleHave === "no" ? (
              <div className="align-left">
                <SmallSubHeading title="Kindly state your style preferences, dos and don'ts, considerations and instructions for the following features" />{" "}
                <br />
                <div className="preferences">
                  <div className="preferences__item">
                    <SmallSubHeading title="Neckline:" />{" "}
                    <Input
                      type="text"
                      name="neckline"
                      required="required"
                      placeholder="E.g I like V-neckline"
                    />
                  </div>
                  <div className="preferences__item">
                    <SmallSubHeading title="Bustier:" />{" "}
                    <Input
                      type="text"
                      required="required"
                      name="bustier"
                      placeholder="E.g I want a corset bustier"
                    />
                  </div>
                  <div className="preferences__item">
                    <SmallSubHeading title="Sleeves:" />{" "}
                    <Input
                      type="text"
                      required="required"
                      name="sleeves"
                      placeholder="E.g I want long sleeves"
                    />
                  </div>
                  <div className="preferences__item">
                    <SmallSubHeading title="Dress silhouette:" />{" "}
                    <Input
                      type="text"
                      required="required"
                      name="silhouette"
                      placeholder="E.g I want a mermaid dress"
                    />
                  </div>
                  <div className="preferences__item">
                    <SmallSubHeading title="Fabric options:" />{" "}
                    <Input
                      type="text"
                      required="required"
                      name="fabric_options"
                      placeholder="E.g I want luxury beaded lace"
                    />
                  </div>
                  <div className="preferences__item col">
                    <SmallSubHeading title="Embellishments:" />{" "}
                    <Input
                      type="text"
                      required="required"
                      name="embellishments"
                      placeholder="E.g I want the bodice fully embellished"
                    />
                  </div>
                  <div className="preferences__item">
                    <SmallSubHeading title="Others:" />{" "}
                    <Input
                      type="text"
                      required="required"
                      name="others"
                      placeholder="Additional information/instruction to guide in creating design options that best suit you"
                    />
                  </div>
                </div>
                <Input
                  type="text-area"
                  required="required"
                  name="outfit_budget"
                  placeholder="Budget (Exclusive of fabric cost)"
                />
                <SmallSubHeading title="Two design options will be created for you based on the information given." />{" "}
                <br />
                <SmallSubHeading title="Payment of N25,000/$56 will be required before these designs options are created and before consultations are scheduled." />{" "}
              </div>
            ) : (
              ""
            )}
            <p className="align-left">Pick up date</p>
            <Input type="date" name="event_date" required="required" />
            <Input
              type="text"
              name="enq"
              required="required"
              placeholder="Questions or Enquiries. Type NONE if none"
            />
            <Input
              type="text"
              name="exp"
              placeholder="Please take a moment to leave a comment on your experience so far."
            />
            <button className="submit p-1" type="submit">
              Submit Form
            </button>
          </form>
        )}

        <div className="consultation__container-btns">
          <button disabled={active === 1} onClick={handlePrev}>
            Prev
          </button>
          <button disabled={active === 5} id="next" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
