import Head from "next/head";
import packageJson from "package.json";
import type { JSX } from "react/jsx-runtime";

const { description, name } = packageJson;

const Metadata = (): JSX.Element => (
  <Head>
    <meta name="description" content={description} />
    <title>{name}</title>
  </Head>
);

export default Metadata;
