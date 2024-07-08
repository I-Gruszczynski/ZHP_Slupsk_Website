import "./contact.css";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const Contact = () => {
  const libraries = ["places"];
  const mapContainerStyle = {
    width: "100%",
    height: "600px",
    margin: "50px auto",
    padding: "50px 0px",
  };
  const center = {
    lat: 54.4698925, // default latitude
    lng: 17.0342109, // default longitude
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyC_wdET3vN4gEcqlhWQWrC0XsiSg3bMX00",
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div className="contactMain">
      <div className="contactMain-header">
        <h1>Kontakt</h1>
        <hr />
        <p>Hufiec ZHP Ziemi Słupskiej</p>
      </div>
      <div className="contactMain-context">
        <div className="contactMain-context-left">
          <h2>Dane do kontaktu:</h2>
          <p>
            ZHP Chorągiew Gdańska
            <br />
            Hufiec Gdańsk-Wrzeszcz-Oliwa
            <br />
            ul. Za Murami 2-1080-823 Gdańsk
            <br />
            NIP: 583-296-90-85
            <br />
            Numer REGON: 220377562
            <br />
            Numer KRS: 0000273799
          </p>
          <p>
            Tel.: 503473593email: gdanskwrzeszczoliwa@zhp.pl
            <br />
            email: gdanskwrzeszczoliwa@zhp.pl
          </p>
        </div>
        <div className="contactMain-context-right">
          <h2>Dyżury Komendy Hufca:</h2>
          <p>
            phm. Mikołaj Delik - Komendant Hufca
            <br />
            środa 17.00 - 20.00
            <br />
            e-mail: mikolaj.delik@zhp.net.pl
            <br />
            tel.: 724-589-459
          </p>
          <p>
            phm. Mikołaj Delik - Komendant Hufca
            <br />
            środa 17.00 - 20.00
            <br />
            e-mail: mikolaj.delik@zhp.net.pl
            <br />
            tel.: 724-589-459
          </p>
        </div>

        <div style={{ clear: "both" }}></div>
        <div className="contactMain-containerMap">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={18}
            center={center}
          >
            <MarkerF
              position={center}
              title={"The marker`s title will appear as a tooltip."}
              name={"SOMA"}
            />
          </GoogleMap>
        </div>
        <div className="contactMain-socialmedia">
          <p>NASZE SOCIALMEDIA</p>
          <a
            href="https://www.facebook.com/zhpslupsk/?locale=pl_PL"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/logoFB.png" alt="logo facebook" height={60} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
