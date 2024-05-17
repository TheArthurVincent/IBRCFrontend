import React, { useEffect, useState } from "react";
import {
  HOne,
  HTwo,
  RouteDiv,
  RouteSizeControlBox,
} from "../../Resources/Components/RouteBox";
import { Link } from "react-router-dom";
import {
  BackToHomePage,
  DivFlex,
  IFrameVideo,
  backDomain,
  getVideoEmbedUrl,
} from "../../Resources/UniversalComponents";
import { useUserContext } from "../../Application/SelectLanguage/SelectLanguage";
import axios from "axios";
import { Button, CircularProgress } from "@mui/material";
import { ClassBox, TransectionMenu } from "../MyClasses/MyClasses.Styled";
import {
  alwaysBlack,
  primaryColor,
  secondaryColor,
  textPrimaryColorContrast,
  textSecondaryColorContrast,
} from "../../Styles/Styles";
import Helmets from "../../Resources/Helmets";

export default function GroupClasses({ headers }) {
  const { UniversalTexts } = useUserContext();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [classes, setClasses] = useState([]);

  async function fetchMonthYear() {
    setLoading(true);
    try {
      const response = await axios.get(
        `${backDomain}/api/v1/allcourseobjects`,
        { headers }
      );
      setClasses(response.data);
      setLoading(false);
    } catch (error) {}
  }

  useEffect(() => {
    fetchMonthYear();
  }, []);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentClasses = classes.slice(startIndex, endIndex);

  const totalItems = classes.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleItemsPerPageChange = (event) => {
    const selectedItemsPerPage = parseInt(event.target.value);
    setItemsPerPage(selectedItemsPerPage);
    setCurrentPage(1);
  };

  function GroupClassesSideBar() {
    return (
      <TransectionMenu
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            style={{
              backgroundColor: primaryColor(),
              color: textPrimaryColorContrast(),
            }}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            {UniversalTexts.previousButton}
          </Button>
          <span
            style={{
              color: alwaysBlack(),
            }}
          >
            {currentPage}/{totalPages}
          </span>
          <Button
            style={{
              backgroundColor: primaryColor(),
              color: textPrimaryColorContrast(),
            }}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            {UniversalTexts.nextButton}
          </Button>
        </div>
        <div style={{ display: "flex", gap: "3rem" }}>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <label>{UniversalTexts.itemsPerPage}</label>
            <select
              style={{
                minWidth: "4.5rem",
                padding: "0.1rem",
                fontSize: "1rem",
                cursor: "pointer",
              }}
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
            >
              {[1, 5, 10].map((option, index) => {
                return (
                  <option
                    style={{ cursor: "pointer" }}
                    key={index}
                    value={option}
                  >
                    {option}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </TransectionMenu>
    );
  }

  return (
    <>
      <RouteSizeControlBox className="smooth">
        <Helmets text="Group Classes" />
        <RouteDiv>
          <>
            {!loading ? (
              <>
                <HOne>{UniversalTexts.previousGroupClasses}</HOne>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "right",
                    alignItems: "center",
                  }}
                >
                  <Link
                    style={{
                      backgroundColor: secondaryColor(),
                      color: textSecondaryColorContrast(),
                      padding: "10px",
                      borderRadius: "5px",
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                    }}
                    to="/my-calendar"
                  >
                    <i className="fa fa-calendar" aria-hidden="true" />
                    {UniversalTexts.calendar}
                  </Link>

                  <BackToHomePage />
                </span>
                <GroupClassesSideBar />
                {currentClasses.map((item, index) => (
                  <div key={index}>
                    <ClassBox>
                      <div style={{ textAlign: "center" }}>
                        <DivFlex>
                          <HTwo>{item.classTitle}</HTwo>
                          {item.googleDriveLink && (
                            <Link to={item.googleDriveLink} target="_blank">
                              {UniversalTexts.files}
                            </Link>
                          )}
                        </DivFlex>{" "}
                        <IFrameVideo src={getVideoEmbedUrl(item.videoUrl)} />
                      </div>
                    </ClassBox>
                  </div>
                ))}
                {itemsPerPage > 2 && classes.length > 2 && (
                  <GroupClassesSideBar />
                )}
              </>
            ) : (
              <CircularProgress style={{ color: secondaryColor() }} />
            )}
          </>
        </RouteDiv>
      </RouteSizeControlBox>
    </>
  );
}
