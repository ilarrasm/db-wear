import { Button } from "@mui/material";
import { GetServerSideProps } from "next";

const index = () => {
  return (
    <div>
      <Button
        onClick={() => {
        //  agregarProducto()
        }}
      >
        Crear uno nuevo{" "}
      </Button>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  return {
    props: {},
  };
};

export default index;
