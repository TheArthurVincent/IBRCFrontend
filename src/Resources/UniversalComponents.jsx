import { styled, keyframes } from "styled-components";
import {
  alwaysBlack,
  alwaysWhite,
  darkGreyColor,
  primaryColor,
  secondaryColor,
  textPrimaryColorContrast,
} from "../Styles/Styles";
import { Link } from "react-router-dom";
import { levels } from "../Routes/Ranking/RankingComponents/ranking.json";
import { Helmet } from "react-helmet";
import { MyButton } from "./Components/ItemsLibrary";
import axios from "axios";

// Função que verifica o nível do aluno
export function updateScore(totalScore) {
  var level = 1;
  var color = "#000";
  var card =
    "https://ik.imagekit.io/vjz75qw96/assets/icons/level%20(10).png?updatedAt=1719515621171";
  var icon = "fa fa-clone";
  var color = "#eee";
  var textcolor = "black";
  var text = "White Belt";
  var discount = "0%";
  var backgroundcolor = "#ccc";
  var image2 =
    "https://ik.imagekit.io/vjz75qw96/assets/pngs/1.png?updatedAt=1715899265785";
  var image =
    "https://ik.imagekit.io/vjz75qw96/assets/pngs/white.png?updatedAt=1715899271696";
  var background =
    "https://ik.imagekit.io/vjz75qw96/assets/assets_for_classes/ASSETS%20AND%20LIABILITIES.jpg?updatedAt=1692919364512";
  for (let i = 0; i < levels.length; i++) {
    if (levels[i + 1]) {
      if (
        totalScore >= levels[i].totalScore &&
        totalScore < levels[i + 1].totalScore
      ) {
        level = i;
        color = levels[i].color;
        icon = levels[i].icon;
        textcolor = levels[i].textcolor;
        card = levels[i].card;
        text = levels[i].text;
        discount = levels[i].discount;
        backgroundcolor = levels[i].backgroundcolor;
        background = levels[i].background;
        image2 = levels[i].image2;
        image = levels[i].image;
        break;
      }
    } else {
      level = i;
      color = levels[i].color;
      icon = levels[i].icon;
      image = levels[i].image;
      card = levels[i].card;
      image2 = levels[i].image2;
      textcolor = levels[i].textcolor;
      text = levels[i].text;
      discount = levels[i].discount;
      backgroundcolor = levels[i].backgroundcolor;
      background = levels[i].background;
      break;
    }
  }
  return {
    level,
    color,
    icon,
    card,
    image,
    image2,
    textcolor,
    text,
    discount,
    backgroundcolor,
    background,
  };
}

// Função que verifica o nível do aluno

export const UniversalButtonsDivFlex = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: space-evenly;
  gap: 0.5rem;
`;
export const SpanHover = styled.span`
  padding: 0 8px;
  font-weight: 500;
  gap: 5px;
  display: grid;
  align-items: center;
  justify-content: center;
  border: solid #66666600 2px;
  &:hover {
    color: ${secondaryColor()};
    transition: 0.2s;
  }
`;
export const SpanHover2 = styled.span`
  padding-left: 10px;
  border-left: solid ${secondaryColor()} 2px;
  &:hover {
    color: ${secondaryColor()};
    border-left: solid ${alwaysWhite()} 2px;
  }
`;
export const FormFlex = styled.form`
  display: flex;
  padding: 0.5rem;
  justify-content: space-around;
  gap: 2rem;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;
export const FormGrid = styled.form`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 675px) {
    grid-template-columns: 1fr;
  }
`;
export const DivGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 675px) {
    grid-template-columns: 1fr;
  }
`;
export const DivFlex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  border: 1px solid ${primaryColor()};
  background-color: ${primaryColor()};
  cursor: pointer;
  color: ${textPrimaryColorContrast()};
  padding: 0.4rem;
  width: 5.5rem;
  max-height: 2rem;
  &:hover {
    border: 1px solid ${darkGreyColor()};
  }
  &:active {
    font-size: 0.8rem;
  }
`;

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spin = styled.div`
  width: 80px;
  height: 80px;
  display: grid;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  animation-name: ${spinAnimation};
  animation-duration: 5000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  transform: rotate(0.03turn);
`;

export const SpinLoading = () => {
  return (
    <Spin>
      <img
        style={{ maxWidth: "3rem" }}
        src="https://ik.imagekit.io/vjz75qw96/assets/assets_for_classes/Spin.png?updatedAt=1703334149713"
        alt="loading"
      />
    </Spin>
  );
};

export function InputField({ value, onChange, id, placeholder, type }) {
  return (
    <div
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <p
        style={{
          margin: 0,
          marginBottom: "3px",
          fontWeight: 500,
          textAlign: "right",
        }}
      >
        {placeholder}
      </p>
      <input
        style={{
          alignItems: "center",
          justifyContent: "space-around",
          padding: "0.4rem",
          marginBottom: "0.3rem",
          fontSize: "1rem",
          fontWeight: 500,
          backgroundColor: "white",
          minWidth: "15rem",
          border: "#555 1px solid",
        }}
        value={value}
        onChange={onChange}
        id={id}
        placeholder={placeholder}
        type={type}
        required
      />
    </div>
  );
}

export function InputFieldNotRequired({
  value,
  onChange,
  id,
  placeholder,
  type,
}) {
  return (
    <div
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <p
        style={{
          margin: 0,
          marginBottom: "3px",
          fontWeight: 500,
          textAlign: "right",
        }}
      >
        {placeholder}
      </p>
      <input
        style={{
          alignItems: "center",
          justifyContent: "space-around",
          padding: "0.4rem",
          marginBottom: "0.3rem",
          fontWeight: 500,
          backgroundColor: "white",
          minWidth: "15rem",
          border: "#555 1px solid",
        }}
        value={value}
        onChange={onChange}
        id={id}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}

export const ImgResponsive0 = styled.img`
  max-width: 5rem;
  margin-right: 1rem;
  @media (max-width: 755px) {
    display: none;
  }
`;
export const ImgResponsive3 = styled.img`
  max-width: 8rem;
  @media (max-width: 755px) {
    display: none;
  }
`;
export const ImgResponsive = styled.img`
  max-width: 15rem;
  margin: 1rem;
  @media (max-width: 800px) {
    max-width: 10rem;
    transition: 0.2s;
  }
`;
export const ImgResponsive2 = styled.img`
  max-width: 25rem;
  @media (max-width: 600px) {
    max-width: 15rem;
  }
`;
export const ButtonDisapear = styled.button`
  border: 1px solid ${primaryColor()};
  background-color: ${primaryColor()};
  cursor: pointer;
  color: ${textPrimaryColorContrast()};
  padding: 0.5rem;
  width: 5rem;
  margin-right: 3rem;

  &:hover {
    border: 1px solid ${darkGreyColor()};
  }
  &:active {
    font-size: 0.8rem;
  }
  @media (max-width: 1300px) {
    margin-right: 4rem;
  }

  @media (max-width: 1350px) {
    display: none;
  }
`;

export const Xp = styled.p`
  cursor: pointer;
  font-weight: 900;
  position: absolute;
  top: -5px;
  right: 5px;
  font-size: 1.2rem;
  padding: 0.5rem;
  color: ${primaryColor()};
  &:hover {
    color: ${secondaryColor()};
  }
  &:active {
    font-weight: 500;
  }
`;

export const linkReset = {
  display: "inline",
  color: alwaysWhite(),
};

export const linkReset2 = {
  display: "inline",
  backgroundColor: alwaysBlack(),
  padding: "1px",
};

export const ContainerClass = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 98%;
    height: 100%;
  }
`;
export const IFrameVideoClass = styled.iframe`
  min-width: 98%;
  min-height: 100%;
  border: none;
`;
export const abreviateName = (word) => {
  const words = word.split(" ");
  const lastWord = words[words.length - 1];
  return lastWord;
};

export const SpanCourseResponsive = styled.span`
  @media (max-width: 500px) {
    display: none;
  }
`;

export const pathGenerator = (text) => {
  const cleanText = text.replace(/[^a-zA-Z0-9\s]/g, "");
  const spacelessText = cleanText.replace(/\s+/g, "-");
  const lowerCase = spacelessText.toLowerCase();

  return lowerCase;
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transfor: translateX(0);
  }
`;

export const DivModal = styled.div`
  position: fixed;
  z-index: 100;
  background-color: #fff;
  padding: 1rem;
  width: 25rem;
  height: 32rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 700px) {
    width: 100%;
    width: 20rem;
    height: 32rem;
  }
`;

export const DisapearOnMobile = styled.div`
  display: block;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const DisapearOnWeb = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`;

export const BackToHomePage = () => {
  return (
    <MyButton>
      <Link
        style={{
          ...linkReset,
          backgroundColor: primaryColor(),
          color: textPrimaryColorContrast(),
          padding: "0.4rem",
          borderRadius: "10px",
          fontSize: "12px",
          textDecoration: "none",
        }}
        to="/"
      >
        Voltar à página inicial
      </Link>
    </MyButton>
  );
};

export function formatNumber(number) {
  return number.toLocaleString("pt-BR");
}

export function formatDate(dateString) {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
}

export function formatDateBrContract(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  return date.toLocaleDateString("pt-BR", options);
}
export function formatDateBr(dateString) {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", options);
}

export function getVideoEmbedUrl(videoUrl) {
  let embedUrl = "";
  if (!videoUrl) {
    return "";
  }
  if (videoUrl.includes("youtube.com")) {
    const youtubeIdMatch = videoUrl.match(
      /(?:\?v=|\/embed\/|\/watch\?v=|\/\d\/|\.be\/)([\w\d_-]+)/i
    );

    if (youtubeIdMatch && youtubeIdMatch[1]) {
      embedUrl = `https://www.youtube.com/embed/${youtubeIdMatch[1]}`;
    }
  } else if (videoUrl.includes("vimeo.com")) {
    const vimeoIdMatch = videoUrl.match(/vimeo\.com\/(\d+)/);

    if (vimeoIdMatch && vimeoIdMatch[1]) {
      embedUrl = `https://player.vimeo.com/video/${vimeoIdMatch[1]}`;
    }
  }

  return embedUrl;
}

export function TitlePage(title) {
  return (
    <Helmet>
      <title>{title} | Arthur Vincent</title>
    </Helmet>
  );
}

export const ButtonButton = (text) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "1rem",
        justifyContent: "right",
      }}
    >
      <Link
        style={{
          ...linkReset,
          backgroundColor: primaryColor(),
          color: textPrimaryColorContrast(),
          padding: "0.5rem",
        }}
      >
        {text}
      </Link>
    </div>
  );
};

export function isDev() {
  if (window.location.hostname === "localhost") {
    return "http://localhost:3502";
  } else if (
    window.location.hostname === "arvin-staging.9kwq6c.easypanel.host"
  ) {
    return "https://arvin-backstagin.9kwq6c.easypanel.host";
  } else {
    return "https://apiprod.arthurvincent.com.br";
  }
}
// export function isDev() {
//   if (window.location.hostname === "localhost") {
//     return "http://localhost:3502";
//   } else {
//     return "https://arvin-backstagin.9kwq6c.easypanel.host";
//   }
// }

export const backDomain = isDev();

export const updateInfo = async (id, headers) => {
  try {
    const response = await axios.get(`${backDomain}/api/v1/student/${id}`, {
      headers,
    });
    const userInfo = response.data.formattedStudentData;
    const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
    Object.keys(userInfo).forEach((key) => {
      if (loggedIn.hasOwnProperty(key)) {
        loggedIn[key] = userInfo[key];
      }
    });

    localStorage.setItem("loggedIn", JSON.stringify(loggedIn));
    console.log("Sucesso ao atualizar dados");
  } catch (error) {
    console.log(error, "Erro ao atualizar dados");
  }
};

export const onLoggOut = () => {
  localStorage.removeItem("authorization");
  localStorage.removeItem("loggedIn");
  alert("Faça login novamente");
  window.location.assign("/login");
};
