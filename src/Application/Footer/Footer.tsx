import React from "react";
import {
  alwaysBlack,
  alwaysWhite,
} from "../../Styles/Styles";

interface AppFooterIn {
  see: boolean;
}
export default function AppFooter({ see }: AppFooterIn) {
  return (
    <footer
      className="footer no-print"
      style={{
        display: see ? "flex" : "none",
        fontSize: "12px",
        backgroundColor: alwaysWhite(),
        color: alwaysBlack(),
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: "1rem",
        width: "100%",
      }}
    >
      <img
        style={{
          maxWidth: "7rem",
        }}
        src="https://ik.imagekit.io/vjz75qw96/assets/IBRC/logo.png?updatedAt=1687980892018"
        alt="logo"
      />{" "}
      <span>
        Igreja Batista Reformada de Cotia <br />
        Estr. Padre Inácio, 952/956 - Centreville, Cotia - SP, 06719-050
      </span>
    </footer>
  );
}
