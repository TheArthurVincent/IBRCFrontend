import React, { useEffect, useState } from "react";
import { RouteDiv, HOne } from "../../Resources/Components/RouteBox";
import axios from "axios";
import { backDomain } from "../../Resources/UniversalComponents";
import {
  CircularProgress,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Tabs,
  Tab,
  Box,
} from "@mui/material";
import { HeadersProps } from "../../Resources/types.universalInterfaces";
import Helmets from "../../Resources/Helmets";

interface Liturgia {
  _id: string;
  data?: any;
  liturgista?: string;
  textoDaLiturgia?: string;
  orador?: string;
  preludio?: string;
  musica1?: string;
  musica2?: string;
  musica3?: string;
  musica4?: string;
  posludio?: string;
  preludioLink?: string;
  musica1Link?: string;
  musica2Link?: string;
  musica3Link?: string;
  musica4Link?: string;
  posludioLink?: string;
  pregador?: string;
  textoDaPregacao?: string;
  tituloDaPregacao?: string;
  proposicaoTeologica?: string;
  palavraParaCriancasPesquisarem?: string;
  EBD1?: string;
  professorEBD1?: string;
  tituloEBD1?: string;
  EBD2?: string;
  professorEBD2?: string;
  tituloEBD2?: string;
  EBD3?: string;
  professorEBD3?: string;
  tituloEBD3?: string;
  EBD4?: string;
  professorEBD4?: string;
  tituloEBD4?: string;
  comentarios?: string;
}

export function Liturgias({ headers }: HeadersProps) {
  const [_id, setID] = useState<string>("");
  const [_StudentId, setStudentId] = useState<string>("");
  const [permissions, setPermissions] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [liturgias, setLiturgias] = useState<Liturgia[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedLiturgia, setSelectedLiturgia] = useState<Liturgia | null>(
    null
  );
  const [tabIndex, setTabIndex] = useState(0);

  const today = new Date();

  const actualHeaders = headers || {};

  const fetchLiturgias = async (): Promise<void> => {
    setLoading(true);
    try {
      const response = await axios.get(`${backDomain}/api/v1/liturgias`, {
        headers: actualHeaders,
      });
      setLiturgias(response.data.liturgias);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = async (id: string) => {
    try {
      const response = await axios.get(`${backDomain}/api/v1/liturgia/${id}`, {
        headers: actualHeaders,
      });
      setSelectedLiturgia(response.data);
      setOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedLiturgia) {
      setSelectedLiturgia({
        ...selectedLiturgia,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleSave = async () => {
    if (selectedLiturgia) {
      try {
        await axios.put(
          `${backDomain}/api/v1/liturgia/${selectedLiturgia._id}`,
          selectedLiturgia,
          { headers: actualHeaders }
        );
        setOpen(false);
        fetchLiturgias();
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    const getLoggedUser = JSON.parse(localStorage.getItem("loggedIn") || "{}");
    fetchLiturgias();
    setStudentId(getLoggedUser.id || _StudentId);
    setPermissions(getLoggedUser.permissions || "");
  }, []);

  const filterLiturgias = () => {
    const futureLiturgias = liturgias
      .filter((liturgia) => new Date(liturgia.data || "") >= today)
      .sort(
        (a, b) =>
          new Date(a.data || "").getTime() - new Date(b.data || "").getTime()
      );

    const pastLiturgias = liturgias
      .filter((liturgia) => new Date(liturgia.data || "") < today)
      .sort(
        (a, b) =>
          new Date(b.data || "").getTime() - new Date(a.data || "").getTime()
      );

    return { futureLiturgias, pastLiturgias };
  };

  const { futureLiturgias, pastLiturgias } = filterLiturgias();

  return (
    <>
      <RouteDiv>
        <Helmets text="Liturgias" />
        <HOne>Liturgias</HOne>
        <Tabs
          value={tabIndex}
          onChange={(event, newValue) => setTabIndex(newValue)}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Futuras" />
          <Tab label="Antigas" />
        </Tabs>
        <Box p={3}>
          {loading ? (
            <CircularProgress />
          ) : tabIndex === 0 ? (
            <ul style={styles.list}>
              {futureLiturgias.length > 0 ? (
                futureLiturgias.map((liturgia) => (
                  <li key={liturgia._id} style={{ listStyle: "none" }}>
                    <ul>
                      <li style={{ listStyle: "none" }}>
                        <h2>
                          Data:{" "}
                          {new Date(liturgia.data).toLocaleDateString() ||
                            "Não especificado"}
                        </h2>
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Liturgista:</strong>{" "}
                        {liturgia.liturgista || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Texto da Liturgia:</strong>{" "}
                        {liturgia.textoDaLiturgia || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Orador:</strong>{" "}
                        {liturgia.orador || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Pregador:</strong>{" "}
                        {liturgia.pregador || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Texto da Pregação:</strong>{" "}
                        {liturgia.textoDaPregacao || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Título da Pregação:</strong>{" "}
                        {liturgia.tituloDaPregacao || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Proposição Teológica:</strong>{" "}
                        {liturgia.proposicaoTeologica || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Palavra para Crianças Pesquisarem:</strong>{" "}
                        {liturgia.palavraParaCriancasPesquisarem ||
                          "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Pré-lúdio:</strong>{" "}
                        {liturgia.preludio || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Música 1:</strong>{" "}
                        {liturgia.musica1 || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Música 2:</strong>{" "}
                        {liturgia.musica2 || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Música 3:</strong>{" "}
                        {liturgia.musica3 || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Música 4:</strong>{" "}
                        {liturgia.musica4 || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Pós-lúdio:</strong>{" "}
                        {liturgia.posludio || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Link do Pré-lúdio:</strong>{" "}
                        {liturgia.preludioLink ? (
                          <a
                            href={liturgia.preludioLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {liturgia.preludioLink}
                          </a>
                        ) : (
                          "Não especificado"
                        )}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Link da Música 1:</strong>{" "}
                        {liturgia.musica1Link ? (
                          <a
                            href={liturgia.musica1Link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {liturgia.musica1Link}
                          </a>
                        ) : (
                          "Não especificado"
                        )}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Link da Música 2:</strong>{" "}
                        {liturgia.musica2Link ? (
                          <a
                            href={liturgia.musica2Link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {liturgia.musica2Link}
                          </a>
                        ) : (
                          "Não especificado"
                        )}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Link da Música 3:</strong>{" "}
                        {liturgia.musica3Link ? (
                          <a
                            href={liturgia.musica3Link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {liturgia.musica3Link}
                          </a>
                        ) : (
                          "Não especificado"
                        )}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Link da Música 4:</strong>{" "}
                        {liturgia.musica4Link ? (
                          <a
                            href={liturgia.musica4Link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {liturgia.musica4Link}
                          </a>
                        ) : (
                          "Não especificado"
                        )}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Link do Pós-lúdio:</strong>{" "}
                        {liturgia.posludioLink ? (
                          <a
                            href={liturgia.posludioLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {liturgia.posludioLink}
                          </a>
                        ) : (
                          "Não especificado"
                        )}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>EBD 1:</strong>{" "}
                        {liturgia.EBD1 || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Professor EBD 1:</strong>{" "}
                        {liturgia.professorEBD1 || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Título EBD 1:</strong>{" "}
                        {liturgia.tituloEBD1 || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>EBD 2:</strong>{" "}
                        {liturgia.EBD2 || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Professor EBD 2:</strong>{" "}
                        {liturgia.professorEBD2 || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Título EBD 2:</strong>{" "}
                        {liturgia.tituloEBD2 || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>EBD 3:</strong>{" "}
                        {liturgia.EBD3 || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Professor EBD 3:</strong>{" "}
                        {liturgia.professorEBD3 || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Título EBD 3:</strong>{" "}
                        {liturgia.tituloEBD3 || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>EBD 4:</strong>{" "}
                        {liturgia.EBD4 || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Professor EBD 4:</strong>{" "}
                        {liturgia.professorEBD4 || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Título EBD 4:</strong>{" "}
                        {liturgia.tituloEBD4 || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Comentários:</strong>{" "}
                        {liturgia.comentarios || "Não especificado"}
                        <br />
                      </li>
                    </ul>

                    <Button
                      variant="contained"
                      onClick={() => handleOpen(liturgia._id)}
                    >
                      Editar
                    </Button>
                    <br />
                  </li>
                ))
              ) : (
                <p>Nenhuma liturgia futura encontrada.</p>
              )}
            </ul>
          ) : (
            <ul style={styles.list}>
              {pastLiturgias.length > 0 ? (
                pastLiturgias.map((liturgia) => (
                  <li key={liturgia._id} style={{ listStyle: "none" }}>
                    <ul>
                      <li style={{ listStyle: "none" }}>
                        <h2>
                          Data:{" "}
                          {new Date(liturgia.data).toLocaleDateString() ||
                            "Não especificado"}
                        </h2>
                        <br />
                      </li>

                      <li style={{ listStyle: "none" }}>
                        <strong>Liturgista:</strong>{" "}
                        {liturgia.liturgista || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Texto da Liturgia:</strong>{" "}
                        {liturgia.textoDaLiturgia || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Orador:</strong>{" "}
                        {liturgia.orador || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Pregador:</strong>{" "}
                        {liturgia.pregador || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Texto da Pregação:</strong>{" "}
                        {liturgia.textoDaPregacao || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Título da Pregação:</strong>{" "}
                        {liturgia.tituloDaPregacao || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Proposição Teológica:</strong>{" "}
                        {liturgia.proposicaoTeologica || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Palavra para Crianças Pesquisarem:</strong>{" "}
                        {liturgia.palavraParaCriancasPesquisarem ||
                          "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Pré-lúdio:</strong>{" "}
                        {liturgia.preludio || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Música 1:</strong>{" "}
                        {liturgia.musica1 || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Música 2:</strong>{" "}
                        {liturgia.musica2 || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Música 3:</strong>{" "}
                        {liturgia.musica3 || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Música 4:</strong>{" "}
                        {liturgia.musica4 || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Pós-lúdio:</strong>{" "}
                        {liturgia.posludio || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Link do Pré-lúdio:</strong>{" "}
                        {liturgia.preludioLink ? (
                          <a
                            href={liturgia.preludioLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {liturgia.preludioLink}
                          </a>
                        ) : (
                          "Não especificado"
                        )}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Link da Música 1:</strong>{" "}
                        {liturgia.musica1Link ? (
                          <a
                            href={liturgia.musica1Link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {liturgia.musica1Link}
                          </a>
                        ) : (
                          "Não especificado"
                        )}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Link da Música 2:</strong>{" "}
                        {liturgia.musica2Link ? (
                          <a
                            href={liturgia.musica2Link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {liturgia.musica2Link}
                          </a>
                        ) : (
                          "Não especificado"
                        )}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Link da Música 3:</strong>{" "}
                        {liturgia.musica3Link ? (
                          <a
                            href={liturgia.musica3Link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {liturgia.musica3Link}
                          </a>
                        ) : (
                          "Não especificado"
                        )}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Link da Música 4:</strong>{" "}
                        {liturgia.musica4Link ? (
                          <a
                            href={liturgia.musica4Link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {liturgia.musica4Link}
                          </a>
                        ) : (
                          "Não especificado"
                        )}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Link do Pós-lúdio:</strong>{" "}
                        {liturgia.posludioLink ? (
                          <a
                            href={liturgia.posludioLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {liturgia.posludioLink}
                          </a>
                        ) : (
                          "Não especificado"
                        )}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>EBD 1:</strong>{" "}
                        {liturgia.EBD1 || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Professor EBD 1:</strong>{" "}
                        {liturgia.professorEBD1 || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Título EBD 1:</strong>{" "}
                        {liturgia.tituloEBD1 || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>EBD 2:</strong>{" "}
                        {liturgia.EBD2 || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Professor EBD 2:</strong>{" "}
                        {liturgia.professorEBD2 || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Título EBD 2:</strong>{" "}
                        {liturgia.tituloEBD2 || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>EBD 3:</strong>{" "}
                        {liturgia.EBD3 || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Professor EBD 3:</strong>{" "}
                        {liturgia.professorEBD3 || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Título EBD 3:</strong>{" "}
                        {liturgia.tituloEBD3 || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>EBD 4:</strong>{" "}
                        {liturgia.EBD4 || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Professor EBD 4:</strong>{" "}
                        {liturgia.professorEBD4 || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Título EBD 4:</strong>{" "}
                        {liturgia.tituloEBD4 || "Não especificado"}
                        <br />
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>Comentários:</strong>{" "}
                        {liturgia.comentarios || "Não especificado"}
                        <br />
                      </li>
                    </ul>

                    <Button
                      variant="contained"
                      onClick={() => handleOpen(liturgia._id)}
                    >
                      Editar
                    </Button>
                    <br />
                  </li>
                ))
              ) : (
                <p>Nenhuma liturgia antiga encontrada.</p>
              )}
            </ul>
          )}
        </Box>
      </RouteDiv>

      {/* Modal de Edição */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Editar Liturgia</DialogTitle>
        <DialogContent>
          <TextField
            name="data"
            label="Data"
            type="date"
            value={selectedLiturgia?.data?.substring(0, 10) || ""}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
            margin="dense"
          />
          <h1>Liturgia</h1>
          <TextField
            name="liturgista"
            label="Liturgista"
            value={selectedLiturgia?.liturgista || ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="textoDaLiturgia"
            label="Texto da Liturgia"
            value={selectedLiturgia?.textoDaLiturgia || ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="orador"
            label="Orador"
            value={selectedLiturgia?.orador || ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />

          <h1>Pregação</h1>

          <TextField
            name="pregador"
            label="Pregador"
            value={selectedLiturgia?.pregador || ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="textoDaPregacao"
            label="Texto da Pregação"
            value={selectedLiturgia?.textoDaPregacao || ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="tituloDaPregacao"
            label="Título da Pregação"
            value={selectedLiturgia?.tituloDaPregacao || ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="proposicaoTeologica"
            label="Proposição Teológica"
            value={selectedLiturgia?.proposicaoTeologica || ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="palavraParaCriancasPesquisarem"
            label="Palavra para Crianças Pesquisarem"
            value={selectedLiturgia?.palavraParaCriancasPesquisarem || ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <h1>Música</h1>
          <TextField
            name="preludio"
            label="Prelúdio"
            value={selectedLiturgia?.preludio || ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="musica1"
            label="Música 1"
            value={selectedLiturgia?.musica1 || ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="musica1Link"
            label="Link Música 1"
            value={selectedLiturgia?.musica1Link || ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="musica2"
            label="Música 2"
            value={selectedLiturgia?.musica2 || ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="musica2Link"
            label="Link Música 2"
            value={selectedLiturgia?.musica2Link || ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="musica3"
            label="Música 3"
            value={selectedLiturgia?.musica3 || ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="musica3Link"
            label="Link Música 3"
            value={selectedLiturgia?.musica3Link || ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="musica4"
            label="Música 4"
            value={selectedLiturgia?.musica4 || ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="musica4Link"
            label="Link Música 4"
            value={selectedLiturgia?.musica4Link || ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="posludio"
            label="Poslúdio"
            value={selectedLiturgia?.posludio || ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="posludioLink"
            label="Link Poslúdio"
            value={selectedLiturgia?.posludioLink || ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <h1>EBD</h1>
          <TextField
            name="EBD1"
            label="EBD 1"
            value={selectedLiturgia?.EBD1 || ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="professorEBD1"
            label="Professor EBD 1"
            value={selectedLiturgia?.professorEBD1 || ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="tituloEBD1"
            label="Título EBD 1"
            value={selectedLiturgia?.tituloEBD1 || ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="EBD2"
            label="EBD 2"
            value={selectedLiturgia?.EBD2 || ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="professorEBD2"
            label="Professor EBD 2"
            value={selectedLiturgia?.professorEBD2 || ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="tituloEBD2"
            label="Título EBD 2"
            value={selectedLiturgia?.tituloEBD2 || ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="EBD3"
            label="EBD 3"
            value={selectedLiturgia?.EBD3 || ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="professorEBD3"
            label="Professor EBD 3"
            value={selectedLiturgia?.professorEBD3 || ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="tituloEBD3"
            label="Título EBD 3"
            value={selectedLiturgia?.tituloEBD3 || ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="EBD4"
            label="EBD 4"
            value={selectedLiturgia?.EBD4 || ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="professorEBD4"
            label="Professor EBD 4"
            value={selectedLiturgia?.professorEBD4 || ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            name="tituloEBD4"
            label="Título EBD 4"
            value={selectedLiturgia?.tituloEBD4 || ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <h1>Comentários</h1>
          <TextField
            name="comentarios"
            label="Comentários"
            value={selectedLiturgia?.comentarios || ""}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSave} color="primary" variant="contained">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

const styles = {
  list: {
    listStyleType: "none",
    padding: 0,
    margin: "20px 0",
  },
  listItem: {
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    padding: "15px",
    marginBottom: "10px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  link: {
    color: "#3498db",
    textDecoration: "none",
  },
};

export default Liturgias;
