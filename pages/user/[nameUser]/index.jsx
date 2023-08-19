import LayoutManageInfo from "../../../components/LayoutManageInfo";

export async function getServerSideProps({ params }) {
  const nameUser = params.nameUser;
  return {
    props: {
      nameUser,
    },
  };
}

const UserManagePage = ({ nameUser }) => {
  return <LayoutManageInfo>{/* <div>{nameUser}</div> */}</LayoutManageInfo>;
};

export default UserManagePage;
