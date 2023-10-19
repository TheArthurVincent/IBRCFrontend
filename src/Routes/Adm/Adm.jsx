import React from "react";
import NewStudent from "./NewStudent";
import FindStudent from "./FindStudent";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {
  primaryColor,
  textPrimaryColorContrast,
  alwaysWhite,
} from "../../Styles/Styles";
import { RouteSizeControlBox } from "../../Resources/Components/RouteBox";
import NewPost from "./NewPost";
import NewTutoring from "./NewTutoring";
import { BackToHomePage } from "../../Resources/UniversalComponents";
import NextTutoring from "./NextTutoring";
import TopBar from "../../Application/TopBar/TopBar";
import NewCourse from "./NewCourse";

export function Adm() {
  const [value, setValue] = React.useState("0");
  const componentsToRender = [
    {
      title: "Aulas particulares",
      value: "0",
      tooltip: "Marque uma aula particular.",
      component: (
        <div>
          <NextTutoring />
          <NewTutoring />
        </div>
      ),
    },
    {
      title: "Alunos",
      value: "1",
      tooltip:
        "Edite informações de alunos cadastrados, como dados, permissões e senha, ou mesmo exclua um aluno se necessário.",
      component: (
        <div>
          <NewStudent /> <FindStudent />
        </div>
      ),
    },
    {
      title: "Cursos",
      value: "3",
      tooltip: "Adicione um novo curso.",
      component: <NewCourse />,
    },
    {
      title: "Postagens",
      value: "2",
      tooltip:
        "Faça uma nova postagem que será vista por todos os alunos na página inicial.",
      component: <NewPost />,
    },
  ];

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <>
      <TopBar />
      <RouteSizeControlBox
        style={{
          maxWidth: "1000px",
        }}
      >
        <TabContext value={value}>
          <Box
            style={{
              display: "flex",
              borderRadius: "1rem",
              alignItems: "center",
              backgroundColor: alwaysWhite(),
              justifyContent: "space-between",
            }}
            sx={{ borderBottom: 1, borderColor: "divider" }}
          >
            <TabList
              style={{
                margin: "0.3rem",
                borderRadius: "1rem",
              }}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              {componentsToRender.map((component, index) => {
                return (
                  <Tab
                    key={index + component.value}
                    style={{
                      fontWeight: 500,
                      // color: textPrimaryColorContrast(),
                    }}
                    label={component.title}
                    value={component.value}
                  />
                );
              })}
            </TabList>
            <BackToHomePage />
          </Box>
          {componentsToRender.map((component, index) => {
            return (
              <TabPanel
                style={{ padding: 0, margin: "1rem auto", maxWidth: "1000px" }}
                key={index + component.value}
                value={component.value}
              >
                {component.component}
              </TabPanel>
            );
          })}
        </TabContext>
      </RouteSizeControlBox>
    </>
  );
}

export default Adm;
