import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="maillTitle">Spara tid, spara pengar!</h1>
      <span className="mailDesc">
        Registrera dig så skickar vi våra bästa erbjudanden till dig
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Din e-postadress" />
        <button>Prenumerera</button>
      </div>
    </div>
  );
};

export default MailList;
