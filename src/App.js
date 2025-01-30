import ParticlesBg from "particles-bg";
import "./App.css";
import {
  FaGithub,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedinIn,
  FaDiscord,
  FaTiktok,
} from "react-icons/fa";
import {TbWorld} from "react-icons/tb";

function App() {
  const menus = [
    {
      label: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/izall10_?igsh=d294OTM1cGtlYzh6",
    },
    {
      label: "Linkedin",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/afrizal-b8242431b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGtq6zCVzTyqoHzh%2FSyxZ0w%3D%3D",
    },
    {
      label: "TikTok",
      icon: <FaTiktok />,
      link: "https://www.tiktok.com/@js_100705?_t=ZS-8tUCnXSrSQK&_r=1",
    },
    {
      label: "Discord",
      icon: <FaDiscord />,
      link: "discordapp.com/users/1174005395132530759",
    },
    {
      label: "Portfolio",
      icon: <TbWorld />,
      link: "https://afrizal-10.github.io/portfolio-afrizal/",
    },
  ];
  const renderMenu = (value, idx) => (
    <a className="btn_action" href={value.link} key={idx} target="_blank">
      {value.icon}
      {value.label}
    </a>
  );

  return (
    <div>
      <div className="card">
        <div className="card_body">
          <div className="profile">
            <img src="/izal.png" className="avatar" />
            <h1>Adi Juliyanto Afrizal</h1>
            <p className="text1">Junior Web Developer</p>
            <p className="text2">
              "Ngoding itu mudah, tapi ngoding yang benar itu susah. Jadi,
              Semangat terus!"
            </p>
          </div>
          <div className="btn">
            {menus.map((item, idx) => renderMenu(item, idx))}
            <p className="nama">Afrizal &copy; 2025</p>
          </div>
        </div>
      </div>
      <ParticlesBg num={300} type="lines" bg={true} />
    </div>
  );
}

export default App;
