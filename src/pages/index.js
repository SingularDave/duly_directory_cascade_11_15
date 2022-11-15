import React from "react";
import Meta from "components/Meta";
import NavbarCustom from "components/NavbarCustom";
import Footer from "components/Footer";
import SearchSection from "../components/SearchSection";



function IndexPage(props) {
  const { res } = props;
    return (
    <>
      <Meta />
      <NavbarCustom
        bg="white"
        variant="light"
        expand="md"
        logo="https://imagedelivery.net/68SN6RDwKYb315QTtTsC9w/c2ec9ec3-bd8f-4c0f-8705-1459b2f1ac00/ScaleDown"
      />
      <SearchSection {...res} />
      <Footer
        bg="secondary"
        textColor="dark"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        copyright={`© ${new Date().getFullYear()} Company`}
        logo="https://imagedelivery.net/68SN6RDwKYb315QTtTsC9w/c2ec9ec3-bd8f-4c0f-8705-1459b2f1ac00/ScaleDown"
      />
    </>
  );
}

export default IndexPage;

export async function getStaticProps() {
  const res = await fetch("https://cloudflare_worker_duly_directory_cascade.singulardavepratt.workers.dev/").then((res) => res.json());
  return { props: { res } };
}

