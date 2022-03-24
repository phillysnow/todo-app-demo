import { SliceZone } from "@prismicio/react";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import { components } from "../slices";

/**
 * Homepage component
 */
const Homepage = ({ doc, menu }) => {
  if (doc && doc.data) {
    return (
      <Layout altLangs={doc.alternate_languages} menu={menu}>
        <SliceZone slices={doc.data.slices} components={components} />
      </Layout>
    );
  }
};

export async function getStaticProps({ previewData, locale }) {
  const client = createClient({ previewData });

  const doc = await client.getSingle("homepage", { lang: locale });
  const menu = await client.getSingle("menu", { lang: locale });

  return {
    props: {
      menu,
      doc,
    },
  };
}

export default Homepage;
