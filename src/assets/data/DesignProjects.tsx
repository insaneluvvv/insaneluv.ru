import Logofolio from "./../media/portfolio/design/logofolio.png";
import Kandinsky from "./../media/portfolio/design/kandinsky.jpg";
import StudJob from "./../media/portfolio/design/studjob.png";
import crw from "./../media/portfolio/design/crw.png";
import tournamentgrid from "./../media/portfolio/design/tournamentgrid.jpg";
import tournamenttables from "./../media/portfolio/design/tournamenttables.jpg";



type ProjectInt = {
  id: number,
  tag: string[],
  name: string,
  desc: string,
  img: string,
  link: string,
}

const initProject: Array<ProjectInt> = [
  {
    id: 1,
    tag: ["Графический дизайн", "Логотипы"],
    name: "Логофолио",
    desc: "Коллекция созданных логотипов.",
    img: Logofolio,
    link: "logofolio",
  },
  {
    id: 2,
    tag: ["UI/UX", "Интерфейс", "Многостраничник"],
    name: "Сервис для обучения Kandinsky",
    desc: "Интерфейс сервиса для разметки данных.",
    img: Kandinsky,
    link: "kandinsky",
  },
  {
    id: 3,
    tag: ["UI/UX", "Интерфейс", "Многостраничник", "Пет-проект"],
    name: "Поиск вакансий для студентов",
    desc: "Интерфейс сервиса поиска вакансий для студентов.",
    img: StudJob,
    link: "studjob",
  },
  {
    id: 4,
    tag: ["Графический дизайн", "Презентация"],
    name: "Курсовая научно исследовательская работа",
    desc: "Презентация для выступления.",
    img: crw,
    link: "course-research-work",
  },
  {
    id: 5,
    tag: ["Графический дизайн", "Турнир"],
    name: "Турнирные сетки",
    desc: "Коллекция турнирных сеток.",
    img: tournamentgrid,
    link: "tournament-grid",
  },
  {
    id: 6,
    tag: ["Графический дизайн", "Турнир"],
    name: "Турнирные таблицы",
    desc: "Коллекция турнирных таблиц.",
    img: tournamenttables,
    link: "tournament-tables",
  },
]

export default initProject;