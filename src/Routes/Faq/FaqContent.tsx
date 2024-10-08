import React from "react";
import { Link } from "react-router-dom";
import RankingExplanation from "../Ranking/RankingComponents/RankingExplanation";
import { HTwo } from "../../Resources/Components/RouteBox";
import { HThree } from "../MyClasses/MyClasses.Styled";
import Manual from "../Adm/AdmComponents/Manual/Manual";

export const contentFaq = [
  {
    instruction: "Condições",
    tags: [
      "portal",
      "contrato",
      "condições",
      "login",
      "próxima",
      "next",
      "em grupo",
    ],
    explanation: <Manual />,
  },
  {
    instruction: "Primeiros passos no portal",
    url: "https://vimeo.com/971573790",
    tags: ["portal", "login", "próxima", "next", "em grupo"],
    explanation: (
      <>
        <HTwo>Página Inicial:</HTwo>
        <ul>
          <li>
            Navegue até sua pasta no Google Drive para acessar materiais
            importantes.
          </li>
          <li>Veja as últimas informações importantes.</li>
        </ul>
      </>
    ),
  },
  {
    instruction: "Aba Minhas aulas e Aulas em grupo",
    url: "https://vimeo.com/971573588",
    tags: [
      "estudar",
      "estudo",
      "estudo ativo",
      "estudo passivo",
      "ativo",
      "passivo",
      "estudando",
      "tempo",
      "aulas",
      "vídeo",
      "meu",
      "minha",
    ],
    explanation: (
      <>
        <HTwo>Página Inicial:</HTwo>
        <ul>
          <li>Acesse facilmente sua próxima aula.</li>
          <li>Encontre seus cartões Anki prontos para revisão.</li>
          <li>
            Navegue até sua pasta no Google Drive para acessar materiais
            importantes.
          </li>
        </ul>

        <HTwo>Minhas Aulas:</HTwo>
        <ul>
          <li>
            Acesse rapidamente suas últimas aulas particulares para revisão ou
            referência.
          </li>
          <li>
            <Link to="https://portal.arthurvincent.com.br/my-classes">
              Entre aqui
            </Link>{" "}
          </li>
        </ul>

        <HTwo>Aulas em grupo:</HTwo>
        <ul>
          <li>Encontre todas as Aulas em grupo.</li>
          <li>Pesquise por tema.</li>
          <li>
            <Link to="https://portal.arthurvincent.com.br/group-classes">
              Entre aqui
            </Link>{" "}
          </li>
        </ul>
      </>
    ),
  },
  {
    instruction: "Calendário",
    url: "https://vimeo.com/971573729",
    tags: ["calendar", "calendario", "data", "aula", "class"],
    explanation: (
      <>
        <HTwo>Calendário:</HTwo>
        <ul>
          <li>Acesse facilmente sua próxima aula.</li>
          <li>Acesse facilmente a próxima aula em grupo.</li>
        </ul>
        <Link to="https://portal.arthurvincent.com.br/calendar">
          Entre aqui
        </Link>{" "}
      </>
    ),
  },
  {
    instruction: "Homework",
    url: "https://vimeo.com/971573837",
    tags: ["homework", "lição", "tutoring"],
    explanation: (
      <>
        <HTwo>Calendário:</HTwo>
        <ul>
          <li>Veja onde estão seus homeworks.</li>
        </ul>
        <Link to="https://portal.arthurvincent.com.br/homework">
          Entre aqui
        </Link>{" "}
      </>
    ),
  },
  {
    instruction: "Como Estudar Eficientemente?",
    url: "https://www.youtube.com/embed/ctr7VV-GRY8",
    tags: [
      "estudar",
      "estudo",
      "estudo ativo",
      "estudo passivo",
      "ativo",
      "passivo",
      "estudando",
      "tempo",
    ],
    explanation: (
      <>
        <HTwo>Estudo Ativo (Não Diário)</HTwo>
        <p>
          Engaje-se em atividades de aprendizado ativo, não necessariamente
          todos os dias. Experimente:
        </p>
        <ul>
          <li>Aprender algo novo.</li>
          <li>
            Participar de aulas particulares, seja 1 ou 2 vezes por semana.
          </li>
          <li>Participar de Aulas em grupo, também 1 ou 2 vezes por semana.</li>
          <li>Realizar homeworks particulares e em grupo.</li>
        </ul>

        <HTwo>Estudo Passivo (Diariamente)</HTwo>
        <p>
          Dedique algum tempo diariamente para revisar e reforçar o que
          aprendeu. Inclua:
        </p>
        <ul>
          <li>
            Utilize o Anki diariamente, dedicando pelo menos 10 minutos à
            revisão de cartões.
          </li>
          <li>Exponha-se ao idioma através de:</li>
          <ul>
            <li>Músicas.</li>
            <li>Filmes.</li>
            <li>Séries.</li>
            <li>Documentários.</li>
          </ul>
        </ul>

        <p>
          Lembre-se, a consistência é a chave para o sucesso. Envolva-se em
          estudos ativos regularmente e reforce seu aprendizado de maneira
          passiva todos os dias.
        </p>
      </>
    ),
  },
  {
    instruction: "Como usar os flashcards?",
    url: "https://vimeo.com/971573880",
    tags: [
      "Anki",
      "Revisão",
      "flashcard",
      "flashcards",
      "memorizar",
      "memory",
      "forget",
      "login",
      "memorização",
    ],
    explanation: (
      <>
        <br />
      </>
    ),
  },
  {
    instruction: "Como fazer mineração de sentenças?",
    url: "https://vimeo.com/910008170?share=copy",
    tags: ["Vocabulário", "vocabulary", "study", "estudar"],
    explanation: (
      <>
        <HThree> Mineração de sentenças.</HThree> Este é, a meu ver, o melhor
        método para reforçar o uso das palavras. Minerar sentenças é o ato de
        encontrar, em contextos reais, a palavra aprendida. Usamos 3 sites para
        isso:
        <br />
        <a href="https://www.linguee.com/">Linguee</a>
        <br />
        <a href="https://youglish.com/">YouGlish</a>
        <br />
        <a href="https://context.reverso.net/traducao/">Reverso</a>
      </>
    ),
  },
  {
    instruction: "Posso remarcar minha aula se eu faltar?",
    tags: ["aula", "perdida", "missed", "reschedule", "remarcar"],
    explanation: (
      <div>
        Se você avisar sobre a remarcação até 24h antes da sua aula, sim. O
        horário de reposição de aula particular é sábado, às 7:00. Se você
        precisar de uma reposição, deverá esperar uma vaga em um sábado.
      </div>
    ),
  },
  {
    instruction: "Sou obrigado a participar das aulas em grupo?",
    tags: ["aula", "grupo", "vivo", "group", "live"],
    explanation: (
      <div>Não. Mas eu recomento fortemente! (e vale ponto, né)</div>
    ),
  },
  {
    instruction: "E se minha aula cair num feriado?",
    tags: ["feriado", "reposição", "vivo", "live", "holiday"],
    explanation: (
      <div>
        Não dou aulas em feriados. Mas você não fica na mão, pois as aulas ao
        vivo funcionam como reposição nesses casos e em casos de falta. Se você
        paga, por exemplo, por 1 aula particular por semana, você tem direito a
        mais 2 aulas por semana, que funcionam como bônus, e também para que
        você não fique sem aula caso sua aula particular caia num feriado.
      </div>
    ),
  },
  {
    instruction: "Courses",
    url: "https://vimeo.com/971573645",
    tags: ["cursos", "courses", "business"],
    explanation: <div></div>,
  },
  {
    instruction: "Como funcionam o ranking e os níveis?",
    url: "https://vimeo.com/971573962",
    tags: ["Rank", "Score", "scoring", "level", "pontos", "pontuação"],
    explanation: <RankingExplanation />,
  },
  {
    instruction: "Quais são os termos e condições contratuais?",
    tags: [
      "contrato",
      "contract",
      "terms",
      "assinar",
      "aula extra",
      "extra class",
      "reposição",
      "replenish",
      "duração",
      "duration",
    ],
    url: "https://www.youtube.com/embed/zAdq-u3b_qg",
    explanation: (
      <>
        {" "}
        <HTwo>Duração e Acesso às Aulas</HTwo>
        <p>
          As aulas terão duração de 55 minutos, e o professor enviará o link de
          acesso com, no mínimo, 5 minutos de antecedência.
        </p>
        <HTwo>Aulas Extras</HTwo>
        <p>
          Os alunos têm o direito de participar das aulas extras semanais, que
          são coletivas, além das aulas particulares contratadas. Essas aulas
          extras servem como compensação por aulas perdidas pelo aluno e pelos
          feriados, nos quais o professor não ministrará aulas.
        </p>
        <HTwo>Reposição de Aulas Particulares</HTwo>
        <p>
          Se o aluno não puder comparecer à aula, deve informar o professor com,
          no máximo, 24 horas de antecedência para poder repor a aula particular
          conforme a disponibilidade do professor. Se não houver aviso com tal
          antecedência, o professor não terá a obrigação de fazer a reposição da
          aula particular. Os dias para reposição são estabelecidos pelo
          professor, que irá encaixar o aluno na próxima janela disponível. O
          aluno deve se comprometer a realizar as atividades propostas pelo
          professor para melhor desenvolvimento do curso.
        </p>
        <HTwo>Falta do Professor</HTwo>
        <p>
          Em caso de falta do professor, a aula será reposta em horário
          combinado por ambos.
        </p>
      </>
    ),
  },
];
