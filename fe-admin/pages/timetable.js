import Timetable from "components/Calendar";

const TimetablePage = () => <Timetable />;

TimetablePage.getInitialProps = async () => ({
  namespacesRequired: ["header", "footer", "sidebar", "calendar"],
});

export default TimetablePage;
