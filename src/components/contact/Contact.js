import "./contact.css";
const Contact = () => {
  return (
    <div className="contactMain">
      <div className="contactMain-header">
        <h1>O mnie</h1>
        <hr />
      </div>
      <div className="contactMain-context">
        <div style={{ clear: "both" }}></div>
        <div className="contactMain-img">
          <img src="./images/Image_20250320133631.jpg"></img>
        </div>
        <div className="contactMain-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
            leo eget turpis molestie viverra. Pellentesque id mattis massa. Duis
            ac molestie sapien. In tempus, lacus vitae mollis lacinia, ex lorem
            scelerisque erat, ac faucibus massa libero eu mauris. In vehicula
            purus a velit ultrices pretium. Donec risus velit, rutrum molestie
            dapibus sed, sodales non justo. Suspendisse luctus dignissim orci,
            non blandit dolor pretium a. Ut condimentum facilisis iaculis.
            Phasellus interdum lorem sed purus vulputate tempor. Donec posuere
            vulputate sem, in facilisis justo interdum et. Aliquam nec dui et
            mauris ornare tempus. Nullam tristique fringilla aliquam.
          </p>
          <p>
            {" "}
            Quisque et efficitur tellus. Aenean eget finibus felis. Vivamus vel
            aliquet eros. Cras molestie tellus mauris, et commodo ligula
            facilisis non. Cras ut libero at leo condimentum tempor at et neque.
            Curabitur malesuada mattis sem, non pellentesque nisi viverra eget.
            Ut sed leo ac elit feugiat viverra. Suspendisse consectetur at dolor
            et maximus. Ut cursus turpis at orci vulputate, eu tristique dui
            gravida. Integer ipsum tortor, mattis et luctus in, sagittis et
            lectus. Cras nec elit sodales, commodo massa at, posuere risus.
            Aliquam rutrum lorem commodo purus tempus imperdiet. Vivamus a arcu
            venenatis diam aliquet vestibulum sed ac felis. Sed malesuada
            accumsan bibendum.
          </p>
        </div>
        <div style={{ clear: "both" }}></div>
        <div className="contactMain-socialmedia">
          <p>MOJE SOCIALMEDIA</p>
          <a
            href="https://www.facebook.com/igor.gruszczynski.9"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={"./images/2023_Facebook_icon.svg.png"}
              alt="logo facebook"
              height={50}
            />
          </a>
          <a
            href="https://www.instagram.com/igor.grusz/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={"./images/Instagram_logo_2016.svg.png"}
              alt="logo instagram"
              height={50}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
