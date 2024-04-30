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
import white from "../../public/assets/white.png";
import whitefull from "../../public/assets/1.png";

// Função que verifica o nível do aluno
export function updateScore(totalScore) {
  var level = 1;
  var color = "#000";
  var icon = "fa fa-star";
  var color = "#eee";
  var textcolor = "black";
  var text = "White Belt";
  var discount = "0%";
  var image2 = whitefull;
  var image = white;
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
        text = levels[i].text;
        discount = levels[i].discount;
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
      image2 = levels[i].image2;
      textcolor = levels[i].textcolor;
      text = levels[i].text;
      discount = levels[i].discount;
      background = levels[i].background;
      break;
    }
  }
  return {
    level,
    color,
    icon,
    image,
    image2,
    textcolor,
    text,
    discount,
    background,
  };
}

// Função que verifica o nível do aluno

export const SpanHover = styled.span`
  padding-left: 10px;
  font-family: Athiti;
  font-weight: 500;
  border-left: solid ${alwaysWhite()} 2px;
  &:hover {
    color: ${secondaryColor()};
    border-left: solid ${secondaryColor()} 2px;
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

export const DivHover = styled.span`
  margin: 0;
  padding: 0 1rem;
  display: grid;
  border-bottom: solid 1px black;
  &:hover {
    background-color: ${primaryColor()};
    color: ${textPrimaryColorContrast()};
    border-radius: 0.5rem;
    transition: 0.2s;
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

export function InputFieldSignUp({ value, onChange, id, placeholder, type }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Athiti",
        justifyContent: "center",
      }}
    >
      <p
        style={{
          margin: 0,
          marginBottom: "3px",
          fontWeight: 800,
          fontFamily: "Athiti",
          textAlign: "center",
        }}
      >
        {placeholder}
      </p>
      <input
        style={{
          padding: "0.5rem",
          margin: "0.3rem",
          fontFamily: "Athiti",
          fontSize: "1rem",
          fontWeight: 500,
          border: `1px solid ${secondaryColor()}`,
          width: "90%",
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

export const Disapear = styled.span`
  @media (max-width: 500px) {
    display: none;
  }
`;

export const ImgResponsive0 = styled.img`
  max-width: 8rem;
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
  max-width: 40rem;
  @media (max-width: 600px) {
    max-width: 5rem;
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

export const IFrameVideo = styled.iframe`
  margin-top: 0;
  min-width: 950px;
  min-height: 500px;
  border: 1px #222 solid;
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
  @media (max-width: 900px) {
    margin-top: 0;
    min-width: 430px;
    min-height: 230px;
  }
  @media (max-width: 450px) {
    margin-top: 0;
    margin-left: auto;
    margin-right: auto;
    min-width: 265px;
    min-height: 150px;
  }
  @media (max-width: 280px) {
    margin-top: 0;
    min-width: 140px;
    min-height: 64px;
  }
  @media (max-width: 210px) {
    margin-top: 0;
    min-width: 80px;
    min-height: 38px;
  }
`;
export const IFrameVideoClass = styled.iframe`
  margin-top: 0;
  min-width: 636px;
  min-height: 356px;
  border: 1px #222 solid;
  margin-left: auto;
  margin-right: auto;
  display: block;
  @media (max-width: 900px) {
    margin-top: 0;
    min-width: 430px;
    min-height: 230px;
  }
  @media (max-width: 450px) {
    margin-top: 0;
    margin-left: auto;
    margin-right: auto;
    min-width: 265px;
    min-height: 150px;
  }
  @media (max-width: 280px) {
    margin-top: 0;
    min-width: 140px;
    min-height: 64px;
  }
  @media (max-width: 210px) {
    margin-top: 0;
    min-width: 80px;
    min-height: 38px;
  }
`;

export const IFrameVideoInstructions = styled.iframe`
  margin-top: 0;
  border: 1px #222 solid;
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
  min-width: 1000px;
  min-height: 600px;
  @media (max-width: 740px) {
    min-width: 500px;
    min-height: 250px;
  }
  @media (max-width: 500px) {
    min-width: 300px;
    min-height: 170px;
  }
`;
export const SpanCourseResponsive = styled.span`
  @media (max-width: 500px) {
    display: none;
  }
`;

export const IFrameVideoCourses = styled.iframe`
  border: none;
  margin-top: 0;
  min-width: 1200px;
  min-height: 750px;
  @media (max-width: 950px) {
    margin-top: 0;
    min-width: 430px;
    min-height: 230px;
  }
  @media (max-width: 380px) {
    margin-top: 0;
    min-width: 265px;
    min-height: 150px;
  }
  @media (max-width: 280px) {
    margin-top: 0;
    min-width: 140px;
    min-height: 64px;
  }
  @media (max-width: 210px) {
    margin-top: 0;
    min-width: 80px;
    min-height: 38px;
  }
`;

export const pathGenerator = (text) => {
  const spacelessText = text.replace(/\s+/g, "-");
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

export const ImgBlog = styled.img`
  margin-top: 0;
  object-position: center;
  max-height: auto;

  @media (max-width: 1350px) {
    width: 100%;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
  @media (max-width: 700px) {
    width: 100%;
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
  @media (max-width: 920px) {
    display: none;
  }
`;

export const BackToHomePage = () => {
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
          padding: "0.4rem",
          borderRadius: "10px",
          fontSize: "12px",
          textDecoration: "none",
        }}
        to="/"
      >
        Voltar à página inicial
      </Link>
    </div>
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

export function LogoSVG(primaryColor, secondaryColor, size) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      zoomAndPan="magnify"
      viewBox="0 0 150 60"
      width={size * 100}
      height={size * 40}
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
    >
      <defs>
        <g />
      </defs>
      <path
        strokeLinecap="butt"
        transform="matrix(0.0643512, 0, 0, 0.0643512, 15.575055, 17.5319)"
        fill="none"
        strokeLinejoin="miter"
        d="M 128.250479 582.972586 C 107.551073 536.717608 86.730263 481.964341 65.727347 418.712785 C 44.845835 355.339824 27.363639 295.184072 13.280759 238.124127 L 96.624701 234.360598 C 106.57984 277.641174 118.90236 324.017556 133.531559 373.42904 C 148.160758 422.840525 162.122234 466.060399 175.415988 503.02796 L 180.939876 503.02796 C 194.355033 466.788824 208.377211 423.872461 223.127814 374.218167 C 237.939119 324.624576 250.383044 278.005387 260.398885 234.360598 L 344.289146 238.124127 C 330.206266 295.184072 312.663367 355.339824 291.721153 418.712785 C 270.839641 481.964341 250.079533 536.717608 229.380128 582.972586 Z M 372.57631 210.504685 L 455.798848 210.504685 L 455.798848 284.804019 L 372.57631 284.804019 Z M 373.122629 320.982452 L 455.252529 320.982452 L 455.252529 582.972586 L 373.122629 582.972586 Z M 512.433879 320.982452 L 587.947254 320.982452 L 591.34657 362.017051 L 595.838523 362.017051 C 618.298289 330.937592 648.103005 315.397862 685.131268 315.397862 C 710.383329 315.397862 729.504481 322.075089 742.616128 335.490247 C 755.727775 348.784 762.283599 367.601642 762.283599 392.003874 L 762.283599 582.972586 L 680.700017 582.972586 L 680.700017 398.074081 C 673.233662 394.735467 663.460629 393.096511 651.259513 393.096511 C 626.857281 393.096511 607.796831 398.984612 594.078163 410.821515 L 594.078163 582.972586 L 512.433879 582.972586 Z M 933.281329 588.557176 C 885.20529 588.557176 850.362302 577.084485 828.630961 554.139102 C 807.081726 531.19372 796.276758 498.414602 796.276758 455.862451 C 796.276758 413.674513 808.174364 380.045566 832.030277 355.157717 C 855.88619 330.087763 888.361798 317.583136 929.517801 317.583136 C 970.5524 317.583136 1003.999241 325.170895 1029.979727 340.346412 L 1029.979727 360.438798 C 1029.979727 380.773991 1027.551644 400.927078 1022.75618 420.898059 L 954.466352 420.898059 L 949.974399 395.949508 C 942.568746 394.371255 933.706244 393.64283 923.386892 393.64283 C 908.575587 393.64283 896.192365 395.099679 886.115821 398.074081 C 880.956145 415.07066 878.406658 433.220579 878.406658 452.463135 C 878.406658 472.859031 882.534399 487.852442 890.850583 497.321965 C 899.166766 506.730786 914.099475 511.404845 935.588008 511.404845 C 961.811302 511.404845 984.938791 503.452874 1005.031176 487.427528 L 1041.634524 546.915556 C 1027.126729 559.845097 1011.283489 570.043045 994.044101 577.448697 C 976.865416 584.85435 956.590924 588.557176 933.281329 588.557176 Z M 1189.261958 586.371901 C 1145.252957 586.371901 1111.502607 575.263423 1087.950203 553.046465 C 1064.458502 530.829508 1052.743003 498.05039 1052.743003 454.769814 C 1052.743003 409.243262 1064.033588 374.58238 1086.614758 350.908573 C 1109.195928 327.234765 1141.792939 315.397862 1184.34509 315.397862 C 1222.041076 315.397862 1251.117367 325.292299 1271.634667 345.081174 C 1292.273371 364.870049 1302.53202 392.003874 1302.53202 426.421947 C 1302.53202 431.945836 1302.410616 436.194981 1302.046404 439.169382 L 1261.497421 479.172046 L 1132.687629 478.079409 C 1132.687629 491.00895 1137.240284 500.721281 1146.284893 507.216402 C 1155.329501 513.711524 1170.565721 516.989436 1192.114955 516.989436 C 1211.357511 516.989436 1227.989879 515.046969 1241.951355 511.162037 C 1256.094937 507.277104 1269.631498 501.631812 1282.621741 494.226159 L 1302.53202 557.538418 C 1288.44914 566.704431 1272.423794 573.867275 1254.455981 578.905547 C 1236.54887 583.883117 1214.817529 586.371901 1189.261958 586.371901 Z M 1224.347754 424.236673 C 1225.440392 420.108932 1225.98671 416.770318 1225.98671 414.220831 C 1225.98671 404.933415 1221.919672 397.588464 1213.785594 392.246682 C 1205.651517 386.965602 1195.271463 384.294711 1182.58473 384.294711 C 1165.223938 384.294711 1152.65861 387.876133 1144.888745 395.099679 C 1137.11888 402.262524 1132.869735 412.70328 1132.14131 426.421947 Z M 1345.266278 320.982452 L 1420.779652 320.982452 L 1424.178968 362.017051 L 1428.670921 362.017051 C 1451.130687 330.937592 1480.935404 315.397862 1517.963666 315.397862 C 1543.215727 315.397862 1562.336879 322.075089 1575.448526 335.490247 C 1588.560173 348.784 1595.115997 367.601642 1595.115997 392.003874 L 1595.115997 582.972586 L 1513.532415 582.972586 L 1513.532415 398.074081 C 1506.126763 394.735467 1496.293027 393.096511 1484.091911 393.096511 C 1459.689679 393.096511 1440.629229 398.984612 1426.910561 410.821515 L 1426.910561 582.972586 L 1345.266278 582.972586 Z M 1768.966725 588.557176 C 1746.749767 588.557176 1726.900191 586.189795 1709.478697 581.394332 C 1696.549156 572.046213 1685.926293 562.091074 1677.61011 551.407509 C 1669.293926 540.663243 1665.166186 529.918977 1665.166186 519.17471 L 1665.166186 389.818599 L 1614.055043 389.818599 L 1624.070884 320.982452 L 1665.166186 320.982452 L 1665.166186 252.085603 L 1747.842405 252.085603 L 1747.842405 320.982452 L 1833.91794 320.982452 L 1823.902098 389.818599 L 1747.842405 389.818599 L 1747.842405 482.571362 C 1747.842405 492.465799 1748.813638 500.781983 1750.695402 507.519913 C 1758.040352 509.765889 1766.17443 510.858527 1775.097634 510.858527 C 1795.432827 510.858527 1812.975726 506.609382 1827.847733 497.989688 L 1840.048849 570.77147 C 1830.822134 576.65957 1820.624186 581.090821 1809.515708 584.065223 C 1798.407229 587.039624 1784.870667 588.557176 1768.966725 588.557176 Z M 1768.966725 588.557176 "
        stroke={primaryColor}
        strokeWidth="100.635803"
        strokeOpacity="1"
        strokeMiterlimit="4"
      />
      <g fill={secondaryColor} fillOpacity="1">
        <g transform="translate(15.575055, 55.048639)">
          <g>
            <path d="M 8.25 0 C 6.914062 -2.976562 5.578125 -6.503906 4.234375 -10.578125 C 2.890625 -14.648438 1.765625 -18.519531 0.859375 -22.1875 L 6.21875 -22.4375 C 6.863281 -19.65625 7.65625 -16.671875 8.59375 -13.484375 C 9.53125 -10.304688 10.429688 -7.523438 11.296875 -5.140625 L 11.65625 -5.140625 C 12.507812 -7.472656 13.410156 -10.234375 14.359375 -13.421875 C 15.316406 -16.617188 16.117188 -19.625 16.765625 -22.4375 L 22.15625 -22.1875 C 21.25 -18.519531 20.125 -14.648438 18.78125 -10.578125 C 17.4375 -6.503906 16.097656 -2.976562 14.765625 0 Z M 8.25 0 " />
          </g>
        </g>
      </g>
      <g fill={secondaryColor} fillOpacity="1">
        <g transform="translate(37.298671, 55.048639)">
          <g>
            <path d="M 2.25 -23.984375 L 7.609375 -23.984375 L 7.609375 -19.1875 L 2.25 -19.1875 Z M 2.28125 -16.859375 L 7.578125 -16.859375 L 7.578125 0 L 2.28125 0 Z M 2.28125 -16.859375 " />
          </g>
        </g>
      </g>
      <g fill={secondaryColor} fillOpacity="1">
        <g transform="translate(45.873779, 55.048639)">
          <g>
            <path d="M 2.6875 -16.859375 L 7.546875 -16.859375 L 7.75 -14.21875 L 8.046875 -14.21875 C 9.492188 -16.21875 11.410156 -17.21875 13.796875 -17.21875 C 15.410156 -17.21875 16.640625 -16.789062 17.484375 -15.9375 C 18.335938 -15.082031 18.765625 -13.867188 18.765625 -12.296875 L 18.765625 0 L 13.5 0 L 13.5 -11.90625 C 13.03125 -12.113281 12.398438 -12.21875 11.609375 -12.21875 C 10.035156 -12.21875 8.8125 -11.835938 7.9375 -11.078125 L 7.9375 0 L 2.6875 0 Z M 2.6875 -16.859375 " />
          </g>
        </g>
      </g>
      <g fill={secondaryColor} fillOpacity="1">
        <g transform="translate(65.48935, 55.048639)">
          <g>
            <path d="M 10.15625 0.359375 C 7.050781 0.359375 4.800781 -0.378906 3.40625 -1.859375 C 2.019531 -3.335938 1.328125 -5.445312 1.328125 -8.1875 C 1.328125 -10.894531 2.09375 -13.050781 3.625 -14.65625 C 5.164062 -16.269531 7.253906 -17.078125 9.890625 -17.078125 C 12.535156 -17.078125 14.691406 -16.585938 16.359375 -15.609375 L 16.359375 -14.328125 C 16.359375 -13.015625 16.207031 -11.71875 15.90625 -10.4375 L 11.5 -10.4375 L 11.21875 -12.046875 C 10.738281 -12.140625 10.164062 -12.1875 9.5 -12.1875 C 8.550781 -12.1875 7.753906 -12.09375 7.109375 -11.90625 C 6.773438 -10.800781 6.609375 -9.628906 6.609375 -8.390625 C 6.609375 -7.085938 6.875 -6.128906 7.40625 -5.515625 C 7.945312 -4.910156 8.910156 -4.609375 10.296875 -4.609375 C 11.984375 -4.609375 13.472656 -5.117188 14.765625 -6.140625 L 17.109375 -2.328125 C 16.179688 -1.492188 15.164062 -0.835938 14.0625 -0.359375 C 12.957031 0.117188 11.65625 0.359375 10.15625 0.359375 Z M 10.15625 0.359375 " />
          </g>
        </g>
      </g>
      <g fill={secondaryColor} fillOpacity="1">
        <g transform="translate(81.889248, 55.048639)">
          <g>
            <path d="M 10.21875 0.21875 C 7.382812 0.21875 5.207031 -0.492188 3.6875 -1.921875 C 2.175781 -3.359375 1.421875 -5.46875 1.421875 -8.25 C 1.421875 -11.1875 2.144531 -13.414062 3.59375 -14.9375 C 5.050781 -16.457031 7.148438 -17.21875 9.890625 -17.21875 C 12.328125 -17.21875 14.207031 -16.582031 15.53125 -15.3125 C 16.851562 -14.039062 17.515625 -12.296875 17.515625 -10.078125 C 17.515625 -9.722656 17.5 -9.445312 17.46875 -9.25 L 14.859375 -6.6875 L 6.578125 -6.75 C 6.578125 -5.914062 6.867188 -5.289062 7.453125 -4.875 C 8.035156 -4.457031 9.019531 -4.25 10.40625 -4.25 C 11.632812 -4.25 12.703125 -4.375 13.609375 -4.625 C 14.515625 -4.875 15.382812 -5.238281 16.21875 -5.71875 L 17.515625 -1.640625 C 16.609375 -1.046875 15.578125 -0.585938 14.421875 -0.265625 C 13.265625 0.0546875 11.863281 0.21875 10.21875 0.21875 Z M 12.46875 -10.21875 C 12.539062 -10.476562 12.578125 -10.691406 12.578125 -10.859375 C 12.578125 -11.453125 12.3125 -11.921875 11.78125 -12.265625 C 11.257812 -12.617188 10.597656 -12.796875 9.796875 -12.796875 C 8.671875 -12.796875 7.859375 -12.5625 7.359375 -12.09375 C 6.859375 -11.632812 6.585938 -10.960938 6.546875 -10.078125 Z M 12.46875 -10.21875 " />
          </g>
        </g>
      </g>
      <g fill={secondaryColor} fillOpacity="1">
        <g transform="translate(99.468228, 55.048639)">
          <g>
            <path d="M 2.6875 -16.859375 L 7.546875 -16.859375 L 7.75 -14.21875 L 8.046875 -14.21875 C 9.492188 -16.21875 11.410156 -17.21875 13.796875 -17.21875 C 15.410156 -17.21875 16.640625 -16.789062 17.484375 -15.9375 C 18.335938 -15.082031 18.765625 -13.867188 18.765625 -12.296875 L 18.765625 0 L 13.5 0 L 13.5 -11.90625 C 13.03125 -12.113281 12.398438 -12.21875 11.609375 -12.21875 C 10.035156 -12.21875 8.8125 -11.835938 7.9375 -11.078125 L 7.9375 0 L 2.6875 0 Z M 2.6875 -16.859375 " />
          </g>
        </g>
      </g>
      <g fill={secondaryColor} fillOpacity="1">
        <g transform="translate(119.0838, 55.048639)">
          <g>
            <path d="M 10.328125 0.359375 C 8.898438 0.359375 7.625 0.203125 6.5 -0.109375 C 5.664062 -0.703125 4.976562 -1.34375 4.4375 -2.03125 C 3.90625 -2.726562 3.640625 -3.421875 3.640625 -4.109375 L 3.640625 -12.4375 L 0.359375 -12.4375 L 1 -16.859375 L 3.640625 -16.859375 L 3.640625 -21.296875 L 8.96875 -21.296875 L 8.96875 -16.859375 L 14.515625 -16.859375 L 13.859375 -12.4375 L 8.96875 -12.4375 L 8.96875 -6.46875 C 8.96875 -5.820312 9.023438 -5.285156 9.140625 -4.859375 C 9.617188 -4.710938 10.144531 -4.640625 10.71875 -4.640625 C 12.03125 -4.640625 13.160156 -4.914062 14.109375 -5.46875 L 14.90625 -0.78125 C 14.3125 -0.40625 13.65625 -0.125 12.9375 0.0625 C 12.21875 0.257812 11.347656 0.359375 10.328125 0.359375 Z M 10.328125 0.359375 " />
          </g>
        </g>
      </g>
      <path
        strokeLinecap="butt"
        transform="matrix(0.0516714, 0, 0, 0.0516714, 11.735369, -9.782264)"
        fill="none"
        strokeLinejoin="miter"
        d="M 91.4543 718.729487 C 110.42939 646.835822 131.748016 573.203404 155.485777 497.907831 C 179.223538 422.53666 202.658907 355.25447 225.716287 296.21246 L 372.905525 296.21246 C 395.962905 355.25447 419.398274 422.53666 443.136035 497.907831 C 466.873796 573.203404 488.192422 646.835822 507.091913 718.729487 L 399.213617 725.004119 C 391.956212 699.225212 382.279673 660.519054 370.183998 608.885644 L 228.362216 608.885644 C 214.0742 663.240581 204.397661 701.946739 199.332597 725.004119 Z M 344.707484 516.88292 C 332.687408 475.304039 319.306568 432.893581 304.564965 389.575947 L 294.208043 389.575947 C 280.373616 427.828517 266.765982 470.238976 253.385142 516.88292 Z M 539.599039 398.647703 L 632.962526 398.647703 L 637.196012 465.022716 L 644.075427 465.022716 C 656.473493 442.418924 670.610312 425.258186 686.485885 413.540502 C 702.437056 401.747219 722.243723 395.77498 745.75469 395.77498 C 749.45899 395.77498 754.372858 397.664929 760.571891 401.369229 C 766.770924 405.07353 771.533596 408.77783 774.784309 412.48213 L 764.276191 501.687729 L 735.246573 501.687729 C 695.633239 501.687729 664.562475 512.04465 641.883086 532.682895 L 641.883086 725.004119 L 539.599039 725.004119 Z M 959.39454 731.959131 C 931.725684 731.959131 907.00515 728.935213 885.308534 722.962974 C 869.206167 711.396485 855.976523 698.922821 845.619602 685.693177 C 835.262681 672.236739 830.122019 658.855899 830.122019 645.475059 L 830.122019 484.451393 L 766.468532 484.451393 L 778.942197 398.647703 L 830.122019 398.647703 L 830.122019 312.91961 L 933.086448 312.91961 L 933.086448 398.647703 L 1040.284363 398.647703 L 1027.810698 484.451393 L 933.086448 484.451393 L 933.086448 599.889486 C 933.086448 612.287552 934.220417 622.644474 936.639552 630.96025 C 945.711308 633.757375 955.841435 635.193736 967.029934 635.193736 C 992.355253 635.193736 1014.203065 629.82628 1032.648968 619.166967 L 1047.844159 709.808928 C 1036.353268 717.14193 1023.728408 722.660582 1009.893981 726.364882 C 996.059553 730.069182 979.201207 731.959131 959.39454 731.959131 Z M 1076.873778 261.059406 L 1179.157825 261.059406 L 1179.157825 387.534802 L 1175.831514 446.954802 L 1179.838206 446.954802 C 1194.731006 429.038085 1211.28696 415.354853 1229.657266 405.905107 C 1248.103169 396.455362 1269.346197 391.768288 1293.310752 391.768288 C 1325.591084 391.768288 1350.462814 399.781672 1367.925944 415.884039 C 1385.464672 431.986405 1394.234036 455.724166 1394.234036 487.097322 L 1394.234036 725.004119 L 1291.949989 725.004119 L 1291.949989 496.09348 C 1281.819862 491.935592 1268.439022 489.818849 1251.807469 489.818849 C 1222.324263 489.818849 1198.132914 497.227449 1179.157825 511.969052 L 1179.157825 725.004119 L 1076.873778 725.004119 Z M 1545.65676 730.598368 C 1513.981213 730.598368 1489.487472 721.9802 1472.402332 704.743864 C 1455.39279 687.43193 1446.925818 661.653024 1446.925818 627.407145 L 1446.925818 398.647703 L 1550.570628 398.647703 L 1550.570628 630.96025 C 1561.154343 634.66455 1572.947626 636.554499 1585.874878 636.554499 C 1613.997321 636.554499 1635.693937 628.692311 1650.889128 612.892336 L 1650.889128 398.647703 L 1754.533938 398.647703 L 1754.533938 725.004119 L 1663.362792 725.004119 L 1659.129306 675.185059 L 1653.535057 675.185059 C 1638.793454 693.630963 1623.220273 707.465391 1606.815514 716.76394 C 1590.486354 725.986892 1570.074903 730.598368 1545.65676 730.598368 Z M 1814.029537 398.647703 L 1907.393024 398.647703 L 1911.550912 465.022716 L 1918.505925 465.022716 C 1930.903991 442.418924 1945.040811 425.258186 1960.840786 413.540502 C 1976.867554 401.747219 1996.598623 395.77498 2020.10959 395.77498 C 2023.813891 395.77498 2028.803356 397.664929 2035.00239 401.369229 C 2041.201423 405.07353 2045.888497 408.77783 2049.139209 412.48213 L 2038.70669 501.687729 L 2009.677071 501.687729 C 1970.063737 501.687729 1938.917376 512.04465 1916.313584 532.682895 L 1916.313584 725.004119 L 1814.029537 725.004119 Z M 1814.029537 398.647703 "
        stroke={primaryColor}
        strokeWidth="125.331116"
        strokeOpacity="1"
        strokeMiterlimit="4"
      />
      <g fill={secondaryColor} fillOpacity="1">
        <g transform="translate(15.572775, 27.679475)">
          <g>
            <path d="M 0.890625 -0.328125 C 1.867188 -4.035156 2.972656 -7.835938 4.203125 -11.734375 C 5.429688 -15.628906 6.640625 -19.101562 7.828125 -22.15625 L 15.4375 -22.15625 C 16.625 -19.101562 17.832031 -15.628906 19.0625 -11.734375 C 20.289062 -7.835938 21.394531 -4.035156 22.375 -0.328125 L 16.796875 0 C 16.410156 -1.332031 15.910156 -3.332031 15.296875 -6 L 7.96875 -6 C 7.226562 -3.1875 6.726562 -1.1875 6.46875 0 Z M 13.96875 -10.75 C 13.351562 -12.894531 12.664062 -15.085938 11.90625 -17.328125 L 11.359375 -17.328125 C 10.648438 -15.347656 9.945312 -13.15625 9.25 -10.75 Z M 13.96875 -10.75 " />
          </g>
        </g>
      </g>
      <g fill={secondaryColor} fillOpacity="1">
        <g transform="translate(37.332125, 27.679475)">
          <g>
            <path d="M 2.28125 -16.859375 L 7.109375 -16.859375 L 7.328125 -13.4375 L 7.6875 -13.4375 C 8.320312 -14.601562 9.050781 -15.488281 9.875 -16.09375 C 10.695312 -16.707031 11.71875 -17.015625 12.9375 -17.015625 C 13.125 -17.015625 13.378906 -16.914062 13.703125 -16.71875 C 14.023438 -16.53125 14.269531 -16.34375 14.4375 -16.15625 L 13.90625 -11.546875 L 12.40625 -11.546875 C 10.351562 -11.546875 8.742188 -11.007812 7.578125 -9.9375 L 7.578125 0 L 2.28125 0 Z M 2.28125 -16.859375 " />
          </g>
        </g>
      </g>
      <g fill={secondaryColor} fillOpacity="1">
        <g transform="translate(50.980849, 27.679475)">
          <g>
            <path d="M 10.328125 0.359375 C 8.898438 0.359375 7.625 0.203125 6.5 -0.109375 C 5.664062 -0.703125 4.976562 -1.34375 4.4375 -2.03125 C 3.90625 -2.726562 3.640625 -3.421875 3.640625 -4.109375 L 3.640625 -12.4375 L 0.359375 -12.4375 L 1 -16.859375 L 3.640625 -16.859375 L 3.640625 -21.296875 L 8.96875 -21.296875 L 8.96875 -16.859375 L 14.515625 -16.859375 L 13.859375 -12.4375 L 8.96875 -12.4375 L 8.96875 -6.46875 C 8.96875 -5.820312 9.023438 -5.285156 9.140625 -4.859375 C 9.617188 -4.710938 10.144531 -4.640625 10.71875 -4.640625 C 12.03125 -4.640625 13.160156 -4.914062 14.109375 -5.46875 L 14.90625 -0.78125 C 14.3125 -0.40625 13.65625 -0.125 12.9375 0.0625 C 12.21875 0.257812 11.347656 0.359375 10.328125 0.359375 Z M 10.328125 0.359375 " />
          </g>
        </g>
      </g>
      <g fill={secondaryColor} fillOpacity="1">
        <g transform="translate(65.094057, 27.679475)">
          <g>
            <path d="M 2.28125 -23.984375 L 7.578125 -23.984375 L 7.578125 -17.4375 L 7.390625 -14.359375 L 7.609375 -14.359375 C 8.367188 -15.296875 9.222656 -16.003906 10.171875 -16.484375 C 11.128906 -16.972656 12.226562 -17.21875 13.46875 -17.21875 C 15.132812 -17.21875 16.421875 -16.800781 17.328125 -15.96875 C 18.234375 -15.132812 18.6875 -13.910156 18.6875 -12.296875 L 18.6875 0 L 13.40625 0 L 13.40625 -11.828125 C 12.875 -12.046875 12.179688 -12.15625 11.328125 -12.15625 C 9.804688 -12.15625 8.554688 -11.769531 7.578125 -11 L 7.578125 0 L 2.28125 0 Z M 2.28125 -23.984375 " />
          </g>
        </g>
      </g>
      <g fill={secondaryColor} fillOpacity="1">
        <g transform="translate(84.423796, 27.679475)">
          <g>
            <path d="M 7.1875 0.28125 C 5.539062 0.28125 4.273438 -0.160156 3.390625 -1.046875 C 2.515625 -1.941406 2.078125 -3.269531 2.078125 -5.03125 L 2.078125 -16.859375 L 7.4375 -16.859375 L 7.4375 -4.859375 C 7.976562 -4.671875 8.582031 -4.578125 9.25 -4.578125 C 10.707031 -4.578125 11.828125 -4.976562 12.609375 -5.78125 L 12.609375 -16.859375 L 17.96875 -16.859375 L 17.96875 0 L 13.25 0 L 13.046875 -2.578125 L 12.75 -2.578125 C 11.988281 -1.617188 11.1875 -0.898438 10.34375 -0.421875 C 9.5 0.046875 8.445312 0.28125 7.1875 0.28125 Z M 7.1875 0.28125 " />
          </g>
        </g>
      </g>
      <g fill={secondaryColor} fillOpacity="1">
        <g transform="translate(103.181851, 27.679475)">
          <g>
            <path d="M 2.28125 -16.859375 L 7.109375 -16.859375 L 7.328125 -13.4375 L 7.6875 -13.4375 C 8.320312 -14.601562 9.050781 -15.488281 9.875 -16.09375 C 10.695312 -16.707031 11.71875 -17.015625 12.9375 -17.015625 C 13.125 -17.015625 13.378906 -16.914062 13.703125 -16.71875 C 14.023438 -16.53125 14.269531 -16.34375 14.4375 -16.15625 L 13.90625 -11.546875 L 12.40625 -11.546875 C 10.351562 -11.546875 8.742188 -11.007812 7.578125 -9.9375 L 7.578125 0 L 2.28125 0 Z M 2.28125 -16.859375 " />
          </g>
        </g>
      </g>
    </svg>
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   xmlnsXlink="http://www.w3.org/1999/xlink"
    //   zoomAndPan="magnify"
    //   viewBox="0 0 750 299.999988"
    //   width={size * 100}
    //   height={size * 40}
    //   preserveAspectRatio="xMidYMid meet"
    //   version="1.0"
    // >
    //   <defs>
    //     <g />
    //     <clipPath id="3635ddc1e7">
    //       <path
    //         d="M 75 54 L 739 54 L 739 166 L 75 166 Z M 75 54 "
    //         clipRule="nonzero"
    //       />
    //     </clipPath>
    //     <clipPath id="8113996479">
    //       <path
    //         d="M 76.398438 20.910156 L 748.511719 60.445312 L 740.316406 199.800781 L 68.203125 160.269531 Z M 76.398438 20.910156 "
    //         clipRule="nonzero"
    //       />
    //     </clipPath>
    //     <clipPath id="a08d6a1eb7">
    //       <path
    //         d="M 76.398438 20.910156 L 748.511719 60.445312 L 740.316406 199.800781 L 68.203125 160.269531 Z M 76.398438 20.910156 "
    //         clipRule="nonzero"
    //       />
    //     </clipPath>
    //     <clipPath id="c12060b726">
    //       <path
    //         d="M 73 98 L 737 98 L 737 210 L 73 210 Z M 73 98 "
    //         clipRule="nonzero"
    //       />
    //     </clipPath>
    //     <clipPath id="ab6a07580a">
    //       <path
    //         d="M 74.453125 64.90625 L 746.566406 104.4375 L 738.371094 243.792969 L 66.257812 204.261719 Z M 74.453125 64.90625 "
    //         clipRule="nonzero"
    //       />
    //     </clipPath>
    //     <clipPath id="84de67c941">
    //       <path
    //         d="M 74.453125 64.90625 L 746.566406 104.4375 L 738.371094 243.792969 L 66.257812 204.261719 Z M 74.453125 64.90625 "
    //         clipRule="nonzero"
    //       />
    //     </clipPath>
    //     <clipPath id="44dc66b43b">
    //       <path
    //         d="M 70 125 L 734 125 L 734 238 L 70 238 Z M 70 125 "
    //         clipRule="nonzero"
    //       />
    //     </clipPath>
    //     <clipPath id="1077b805a2">
    //       <path
    //         d="M 732.796875 270.035156 L 60.527344 233.210938 L 68.164062 93.824219 L 740.429688 130.644531 Z M 732.796875 270.035156 "
    //         clipRule="nonzero"
    //       />
    //     </clipPath>
    //     <clipPath id="092f100edc">
    //       <path
    //         d="M 732.796875 270.035156 L 60.527344 233.210938 L 68.164062 93.824219 L 740.429688 130.644531 Z M 732.796875 270.035156 "
    //         clipRule="nonzero"
    //       />
    //     </clipPath>
    //     <clipPath id="399f602ffd">
    //       <path
    //         d="M 75 155 L 739 155 L 739 267 L 75 267 Z M 75 155 "
    //         clipRule="nonzero"
    //       />
    //     </clipPath>
    //     <clipPath id="df7c09117a">
    //       <path
    //         d="M 76.128906 122.183594 L 748.652344 160.425781 L 740.707031 300.132812 L 68.1875 261.890625 Z M 76.128906 122.183594 "
    //         clipRule="nonzero"
    //       />
    //     </clipPath>
    //     <clipPath id="f48fbf1983">
    //       <path
    //         d="M 76.128906 122.183594 L 748.652344 160.425781 L 740.707031 300.132812 L 68.1875 261.890625 Z M 76.128906 122.183594 "
    //         clipRule="nonzero"
    //       />
    //     </clipPath>
    //     <clipPath id="40fb2f04f6">
    //       <path
    //         d="M 87.132812 181.863281 L 151.253906 181.863281 L 151.253906 245.984375 L 87.132812 245.984375 Z M 87.132812 181.863281 "
    //         clipRule="nonzero"
    //       />
    //     </clipPath>
    //     <clipPath id="2efb3e5ea9">
    //       <path
    //         d="M 119.191406 181.863281 C 101.484375 181.863281 87.132812 196.214844 87.132812 213.921875 C 87.132812 231.628906 101.484375 245.984375 119.191406 245.984375 C 136.898438 245.984375 151.253906 231.628906 151.253906 213.921875 C 151.253906 196.214844 136.898438 181.863281 119.191406 181.863281 Z M 119.191406 181.863281 "
    //         clipRule="nonzero"
    //       />
    //     </clipPath>
    //     <clipPath id="c73259827c">
    //       <path
    //         d="M 0 41.097656 L 227 41.097656 L 227 237.136719 L 0 237.136719 Z M 0 41.097656 "
    //         clipRule="nonzero"
    //       />
    //     </clipPath>
    //     <clipPath id="62b958be55">
    //       <path
    //         d="M 17.472656 188.113281 L 221 188.113281 L 221 261.921875 L 17.472656 261.921875 Z M 17.472656 188.113281 "
    //         clipRule="nonzero"
    //       />
    //     </clipPath>
    //   </defs>
    //   <g clipPath="url(#c73259827c)">
    //     <path
    //       fill={primaryColor}
    //       d="M 170.179688 142.515625 C 168.03125 142.480469 165.898438 142.351562 163.75 142.128906 C 159.671875 141.707031 156.089844 138.839844 152.417969 138.730469 C 145.804688 138.53125 139.539062 141.359375 131.933594 141.652344 C 126.902344 141.890625 122.253906 140.53125 118.085938 137.003906 C 96.335938 133.496094 78.40625 133.53125 64.207031 137.003906 C 62.113281 125.855469 56.96875 117.660156 51.699219 115.273438 C 54.875 123.300781 57.226562 130.503906 56.015625 136.785156 C 49.675781 135.1875 44.148438 137.335938 39.996094 145.894531 C 33.050781 148.78125 31.527344 168.820312 31.601562 193.839844 C 33.363281 197.21875 34.394531 201.078125 34.816406 205.339844 C 35.3125 210.242188 35 215.679688 34.0625 221.523438 C 31.160156 223.597656 30.847656 231.992188 29.25 237.246094 L 23.683594 237.246094 L 19.238281 196.816406 L 11.800781 181.972656 C 2.613281 164.226562 0.59375 149.183594 7.355469 137.5 C 3.128906 134.121094 0.816406 130.28125 0.613281 125.945312 C 0.207031 116.671875 8.714844 108.273438 15.820312 103.40625 C 20.082031 100.488281 29.25 99.441406 28.605469 94.996094 C 24.96875 95.363281 21.976562 94.773438 19.972656 92.714844 C 10.347656 82.851562 29.230469 78.644531 36.101562 77.929688 C 48.28125 76.660156 61.46875 79.710938 79.066406 79.710938 C 71.792969 74.347656 61.15625 71.445312 51.9375 71.703125 C 59.0625 64.628906 70.085938 59.414062 81.511719 56.492188 C 79.179688 55.207031 72.199219 54.65625 63.269531 55.8125 C 77.523438 47.160156 87.425781 50.210938 107.648438 56.96875 L 95.34375 41.097656 C 102.140625 44.148438 108.496094 46.683594 114.464844 48.757812 C 137.132812 56.65625 163.457031 53.515625 184.507812 58.953125 C 219.464844 67.972656 238.183594 116.117188 200.03125 135.738281 C 190.585938 140.605469 180.742188 142.679688 170.179688 142.515625 Z M 199.550781 146.628906 C 198.46875 145.34375 198.101562 144.003906 198.429688 143.304688 C 210.738281 138.289062 219.425781 141.652344 224.09375 154.34375 C 229.328125 166.984375 224.074219 168.433594 221.246094 177.03125 C 218.011719 186.824219 221.449219 198.523438 218.730469 211.089844 C 216.523438 221.210938 216.929688 226.847656 216.929688 237.226562 C 214.613281 233.828125 213.253906 223.855469 212.152344 212.246094 C 212.0625 199.441406 212.648438 189.742188 209.34375 177.195312 C 208.058594 172.328125 206.402344 169.078125 205.375 165.441406 C 202.710938 156.164062 205.136719 153.207031 199.550781 146.628906 Z M 199.550781 146.628906 "
    //       fillOpacity="1"
    //       fillRule="evenodd"
    //     />
    //   </g>
    //   <g clipPath="url(#62b958be55)">
    //     <path
    //       fill={secondaryColor}
    //       d="M 67.324219 257.671875 C 87.0625 257.671875 101.574219 237.433594 101.574219 220.535156 C 101.574219 203.640625 86.332031 192.828125 67.324219 192.828125 C 50.007812 192.828125 33.714844 202.871094 33.714844 221.742188 C 33.714844 238.636719 47.8125 257.671875 67.324219 257.671875 M 171.199219 257.671875 C 190.714844 257.671875 204.808594 238.636719 204.808594 221.742188 C 204.808594 202.871094 188.519531 192.828125 171.199219 192.828125 C 152.1875 192.828125 136.949219 203.640625 136.949219 220.535156 C 136.949219 237.433594 151.464844 257.671875 171.199219 257.671875 M 220.890625 202.628906 L 220.890625 209.648438 C 220.890625 209.648438 213.632812 210.855469 211.945312 216.183594 C 210.253906 221.503906 208.800781 261.910156 172.027344 261.910156 C 135.25 261.910156 128.960938 216.660156 128.960938 216.660156 C 128.960938 216.660156 131.867188 214.484375 131.867188 211.34375 C 131.867188 208.238281 127.34375 205.851562 119.261719 205.777344 C 111.175781 205.851562 106.652344 208.238281 106.652344 211.34375 C 106.652344 214.484375 109.558594 216.660156 109.558594 216.660156 C 109.558594 216.660156 103.273438 261.910156 66.496094 261.910156 C 29.722656 261.910156 28.269531 221.503906 26.578125 216.183594 C 24.886719 210.855469 17.628906 209.648438 17.628906 209.648438 L 17.628906 202.628906 C 17.628906 202.628906 25.488281 202.628906 27.851562 201.359375 C 30.207031 200.089844 46.175781 188.117188 66.132812 188.117188 C 86.09375 188.117188 100.609375 200.453125 104.417969 200.453125 C 108.230469 200.453125 108.046875 197.367188 108.046875 197.367188 L 130.476562 197.367188 C 130.476562 197.367188 130.292969 200.453125 134.105469 200.453125 C 137.914062 200.453125 152.429688 188.117188 172.390625 188.117188 C 192.347656 188.117188 208.316406 200.089844 210.667969 201.359375 C 213.03125 202.628906 220.890625 202.628906 220.890625 202.628906 "
    //       fillOpacity="1"
    //       fillRule="nonzero"
    //     />
    //   </g>
    //   <g fill={secondaryColor} fillOpacity="1">
    //     <g transform="translate(238.342599, 145.000751)">
    //       <g>
    //         <path d="M 3.828125 -1.375 C 8.003906 -17.269531 12.710938 -33.550781 17.953125 -50.21875 C 23.203125 -66.882812 28.378906 -81.738281 33.484375 -94.78125 L 66.046875 -94.78125 C 71.140625 -81.738281 76.3125 -66.882812 81.5625 -50.21875 C 86.8125 -33.550781 91.523438 -17.269531 95.703125 -1.375 L 71.84375 0 C 70.21875 -5.707031 68.082031 -14.269531 65.4375 -25.6875 L 34.09375 -25.6875 C 30.9375 -13.65625 28.796875 -5.09375 27.671875 0 Z M 59.78125 -46.015625 C 57.125 -55.191406 54.164062 -64.566406 50.90625 -74.140625 L 48.609375 -74.140625 C 45.554688 -65.679688 42.550781 -56.304688 39.59375 -46.015625 Z M 59.78125 -46.015625 " />
    //       </g>
    //     </g>
    //   </g>
    //   <g fill={secondaryColor} fillOpacity="1">
    //     <g transform="translate(331.444921, 145.000751)">
    //       <g>
    //         <path d="M 9.78125 -72.15625 L 30.421875 -72.15625 L 31.34375 -57.484375 L 32.875 -57.484375 C 35.625 -62.472656 38.753906 -66.265625 42.265625 -68.859375 C 45.785156 -71.460938 50.144531 -72.765625 55.34375 -72.765625 C 56.15625 -72.765625 57.25 -72.359375 58.625 -71.546875 C 60 -70.734375 61.046875 -69.914062 61.765625 -69.09375 L 59.46875 -49.375 L 53.046875 -49.375 C 44.285156 -49.375 37.40625 -47.082031 32.40625 -42.5 L 32.40625 0 L 9.78125 0 Z M 9.78125 -72.15625 " />
    //       </g>
    //     </g>
    //   </g>
    //   <g fill={secondaryColor} fillOpacity="1">
    //     <g transform="translate(389.84409, 145.000751)">
    //       <g>
    //         <path d="M 44.1875 1.53125 C 38.070312 1.53125 32.617188 0.867188 27.828125 -0.453125 C 24.253906 -3.003906 21.320312 -5.753906 19.03125 -8.703125 C 16.738281 -11.660156 15.59375 -14.617188 15.59375 -17.578125 L 15.59375 -53.203125 L 1.53125 -53.203125 L 4.28125 -72.15625 L 15.59375 -72.15625 L 15.59375 -91.109375 L 38.375 -91.109375 L 38.375 -72.15625 L 62.0625 -72.15625 L 59.3125 -53.203125 L 38.375 -53.203125 L 38.375 -27.671875 C 38.375 -24.921875 38.628906 -22.628906 39.140625 -20.796875 C 41.171875 -20.179688 43.410156 -19.875 45.859375 -19.875 C 51.460938 -19.875 56.304688 -21.046875 60.390625 -23.390625 L 63.75 -3.359375 C 61.195312 -1.734375 58.390625 -0.515625 55.328125 0.296875 C 52.273438 1.117188 48.5625 1.53125 44.1875 1.53125 Z M 44.1875 1.53125 " />
    //       </g>
    //     </g>
    //   </g>
    //   <g fill={secondaryColor} fillOpacity="1">
    //     <g transform="translate(450.230658, 145.000751)">
    //       <g>
    //         <path d="M 9.78125 -102.578125 L 32.40625 -102.578125 L 32.40625 -74.609375 L 31.640625 -61.453125 L 32.5625 -61.453125 C 35.820312 -65.429688 39.488281 -68.460938 43.5625 -70.546875 C 47.644531 -72.640625 52.335938 -73.6875 57.640625 -73.6875 C 64.765625 -73.6875 70.265625 -71.898438 74.140625 -68.328125 C 78.015625 -64.765625 79.953125 -59.519531 79.953125 -52.59375 L 79.953125 0 L 57.328125 0 L 57.328125 -50.609375 C 55.085938 -51.523438 52.132812 -51.984375 48.46875 -51.984375 C 41.9375 -51.984375 36.582031 -50.347656 32.40625 -47.078125 L 32.40625 0 L 9.78125 0 Z M 9.78125 -102.578125 " />
    //       </g>
    //     </g>
    //   </g>
    //   <g fill={secondaryColor} fillOpacity="1">
    //     <g transform="translate(532.937341, 145.000751)">
    //       <g>
    //         <path d="M 30.734375 1.21875 C 23.691406 1.21875 18.285156 -0.691406 14.515625 -4.515625 C 10.742188 -8.335938 8.859375 -14.019531 8.859375 -21.5625 L 8.859375 -72.15625 L 31.796875 -72.15625 L 31.796875 -20.796875 C 34.140625 -19.972656 36.738281 -19.5625 39.59375 -19.5625 C 45.8125 -19.5625 50.601562 -21.296875 53.96875 -24.765625 L 53.96875 -72.15625 L 76.890625 -72.15625 L 76.890625 0 L 56.71875 0 L 55.796875 -11 L 54.578125 -11 C 51.316406 -6.925781 47.875 -3.867188 44.25 -1.828125 C 40.632812 0.203125 36.128906 1.21875 30.734375 1.21875 Z M 30.734375 1.21875 " />
    //       </g>
    //     </g>
    //   </g>
    //   <g fill={secondaryColor} fillOpacity="1">
    //     <g transform="translate(613.197943, 145.000751)">
    //       <g>
    //         <path d="M 9.78125 -72.15625 L 30.421875 -72.15625 L 31.34375 -57.484375 L 32.875 -57.484375 C 35.625 -62.472656 38.753906 -66.265625 42.265625 -68.859375 C 45.785156 -71.460938 50.144531 -72.765625 55.34375 -72.765625 C 56.15625 -72.765625 57.25 -72.359375 58.625 -71.546875 C 60 -70.734375 61.046875 -69.914062 61.765625 -69.09375 L 59.46875 -49.375 L 53.046875 -49.375 C 44.285156 -49.375 37.40625 -47.082031 32.40625 -42.5 L 32.40625 0 L 9.78125 0 Z M 9.78125 -72.15625 " />
    //       </g>
    //     </g>
    //   </g>
    //   <g fill={primaryColor} fillOpacity="1">
    //     <g transform="translate(238.524252, 240.845884)">
    //       <g>
    //         <path d="M 35.3125 0 C 29.601562 -12.738281 23.867188 -27.820312 18.109375 -45.25 C 12.359375 -62.675781 7.546875 -79.238281 3.671875 -94.9375 L 26.59375 -96 C 29.351562 -84.082031 32.742188 -71.316406 36.765625 -57.703125 C 40.796875 -44.097656 44.644531 -32.203125 48.3125 -22.015625 L 49.84375 -22.015625 C 53.507812 -32.003906 57.378906 -43.828125 61.453125 -57.484375 C 65.535156 -71.140625 68.953125 -83.976562 71.703125 -96 L 94.78125 -94.9375 C 90.90625 -79.238281 86.085938 -62.675781 80.328125 -45.25 C 74.578125 -27.820312 68.847656 -12.738281 63.140625 0 Z M 35.3125 0 " />
    //       </g>
    //     </g>
    //   </g>
    //   <g fill={primaryColor} fillOpacity="1">
    //     <g transform="translate(331.473692, 240.845884)">
    //       <g>
    //         <path d="M 9.625 -102.578125 L 32.5625 -102.578125 L 32.5625 -82.09375 L 9.625 -82.09375 Z M 9.78125 -72.15625 L 32.40625 -72.15625 L 32.40625 0 L 9.78125 0 Z M 9.78125 -72.15625 " />
    //       </g>
    //     </g>
    //   </g>
    //   <g fill={primaryColor} fillOpacity="1">
    //     <g transform="translate(368.164242, 240.845884)">
    //       <g>
    //         <path d="M 11.46875 -72.15625 L 32.25 -72.15625 L 33.171875 -60.84375 L 34.390625 -60.84375 C 40.609375 -69.40625 48.816406 -73.6875 59.015625 -73.6875 C 65.941406 -73.6875 71.210938 -71.847656 74.828125 -68.171875 C 78.453125 -64.503906 80.265625 -59.3125 80.265625 -52.59375 L 80.265625 0 L 57.78125 0 L 57.78125 -50.90625 C 55.75 -51.820312 53.050781 -52.28125 49.6875 -52.28125 C 42.957031 -52.28125 37.707031 -50.648438 33.9375 -47.390625 L 33.9375 0 L 11.46875 0 Z M 11.46875 -72.15625 " />
    //       </g>
    //     </g>
    //   </g>
    //   <g fill={primaryColor} fillOpacity="1">
    //     <g transform="translate(452.093931, 240.845884)">
    //       <g>
    //         <path d="M 43.421875 1.53125 C 30.171875 1.53125 20.5625 -1.625 14.59375 -7.9375 C 8.632812 -14.257812 5.65625 -23.285156 5.65625 -35.015625 C 5.65625 -46.628906 8.941406 -55.875 15.515625 -62.75 C 22.085938 -69.632812 31.03125 -73.078125 42.34375 -73.078125 C 53.65625 -73.078125 62.878906 -70.988281 70.015625 -66.8125 L 70.015625 -61.296875 C 70.015625 -55.691406 69.351562 -50.140625 68.03125 -44.640625 L 49.21875 -44.640625 L 48 -51.515625 C 45.957031 -51.921875 43.515625 -52.125 40.671875 -52.125 C 36.585938 -52.125 33.171875 -51.71875 30.421875 -50.90625 C 28.992188 -46.21875 28.28125 -41.222656 28.28125 -35.921875 C 28.28125 -30.316406 29.425781 -26.210938 31.71875 -23.609375 C 34.007812 -21.015625 38.113281 -19.71875 44.03125 -19.71875 C 51.257812 -19.71875 57.628906 -21.910156 63.140625 -26.296875 L 73.234375 -9.9375 C 69.253906 -6.375 64.894531 -3.570312 60.15625 -1.53125 C 55.414062 0.507812 49.835938 1.53125 43.421875 1.53125 Z M 43.421875 1.53125 " />
    //       </g>
    //     </g>
    //   </g>
    //   <g fill={primaryColor} fillOpacity="1">
    //     <g transform="translate(522.264629, 240.845884)">
    //       <g>
    //         <path d="M 43.71875 0.921875 C 31.59375 0.921875 22.289062 -2.132812 15.8125 -8.25 C 9.34375 -14.363281 6.109375 -23.382812 6.109375 -35.3125 C 6.109375 -47.851562 9.21875 -57.382812 15.4375 -63.90625 C 21.65625 -70.425781 30.625 -73.6875 42.34375 -73.6875 C 52.738281 -73.6875 60.765625 -70.957031 66.421875 -65.5 C 72.078125 -60.050781 74.90625 -52.585938 74.90625 -43.109375 C 74.90625 -41.578125 74.851562 -40.40625 74.75 -39.59375 L 63.59375 -28.59375 L 28.125 -28.890625 C 28.125 -25.328125 29.375 -22.648438 31.875 -20.859375 C 34.375 -19.078125 38.578125 -18.1875 44.484375 -18.1875 C 49.785156 -18.1875 54.367188 -18.722656 58.234375 -19.796875 C 62.109375 -20.867188 65.832031 -22.421875 69.40625 -24.453125 L 74.90625 -7.03125 C 71.03125 -4.476562 66.617188 -2.515625 61.671875 -1.140625 C 56.734375 0.234375 50.75 0.921875 43.71875 0.921875 Z M 53.359375 -43.71875 C 53.660156 -44.84375 53.8125 -45.757812 53.8125 -46.46875 C 53.8125 -49.019531 52.6875 -51.035156 50.4375 -52.515625 C 48.195312 -53.992188 45.347656 -54.734375 41.890625 -54.734375 C 37.097656 -54.734375 33.628906 -53.738281 31.484375 -51.75 C 29.347656 -49.757812 28.175781 -46.878906 27.96875 -43.109375 Z M 53.359375 -43.71875 " />
    //       </g>
    //     </g>
    //   </g>
    //   <g fill={primaryColor} fillOpacity="1">
    //     <g transform="translate(597.480301, 240.845884)">
    //       <g>
    //         <path d="M 11.46875 -72.15625 L 32.25 -72.15625 L 33.171875 -60.84375 L 34.390625 -60.84375 C 40.609375 -69.40625 48.816406 -73.6875 59.015625 -73.6875 C 65.941406 -73.6875 71.210938 -71.847656 74.828125 -68.171875 C 78.453125 -64.503906 80.265625 -59.3125 80.265625 -52.59375 L 80.265625 0 L 57.78125 0 L 57.78125 -50.90625 C 55.75 -51.820312 53.050781 -52.28125 49.6875 -52.28125 C 42.957031 -52.28125 37.707031 -50.648438 33.9375 -47.390625 L 33.9375 0 L 11.46875 0 Z M 11.46875 -72.15625 " />
    //       </g>
    //     </g>
    //   </g>
    //   <g fill={primaryColor} fillOpacity="1">
    //     <g transform="translate(681.40999, 240.845884)">
    //       <g>
    //         <path d="M 44.1875 1.53125 C 38.070312 1.53125 32.617188 0.867188 27.828125 -0.453125 C 24.253906 -3.003906 21.320312 -5.753906 19.03125 -8.703125 C 16.738281 -11.660156 15.59375 -14.617188 15.59375 -17.578125 L 15.59375 -53.203125 L 1.53125 -53.203125 L 4.28125 -72.15625 L 15.59375 -72.15625 L 15.59375 -91.109375 L 38.375 -91.109375 L 38.375 -72.15625 L 62.0625 -72.15625 L 59.3125 -53.203125 L 38.375 -53.203125 L 38.375 -27.671875 C 38.375 -24.921875 38.628906 -22.628906 39.140625 -20.796875 C 41.171875 -20.179688 43.410156 -19.875 45.859375 -19.875 C 51.460938 -19.875 56.304688 -21.046875 60.390625 -23.390625 L 63.75 -3.359375 C 61.195312 -1.734375 58.390625 -0.515625 55.328125 0.296875 C 52.273438 1.117188 48.5625 1.53125 44.1875 1.53125 Z M 44.1875 1.53125 " />
    //       </g>
    //     </g>
    //   </g>
    // </svg>
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
  } else {
    return "https://apiprod.arthurvincent.com.br";
  }
}

// export function logout24h() {
//   setTimeout(() => {
//     alert("Token expirado: Faça login novamente");
//     localStorage.removeItem("authorization");
//     localStorage.removeItem("loggedIn");
//     window.location.assign("/");
//   }, 43200000); // login expirar o login em 12h de inatividade
// }

export const backDomain = isDev();
