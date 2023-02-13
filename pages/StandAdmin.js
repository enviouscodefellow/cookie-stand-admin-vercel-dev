import CookieStandForm from "./StandForm";
import CookieStandTable from "./StandTable";
import useResource from "@/hooks/useResource";
import Footer from "./Footer";
import Header from "./Header";

export default function CookieStandAdmin() {

  const { resources, deleteResource } = useResource();

  return (
      <>
          <Header/>
          <CookieStandForm />
          <CookieStandTable stands={resources || []} deleteStand={deleteResource} />
          <Footer stands={resources || []}/>
      </>
  );
}