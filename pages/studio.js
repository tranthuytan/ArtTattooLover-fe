import Table from "components/Table";

const TablePage = () => <Table />;

TablePage.getInitialProps = async () => ({
  namespacesRequired: ["header", "footer", "sidebar"],
});

export default TablePage;
