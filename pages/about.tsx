import { NextPage } from 'next';
import Head from 'next/head';
import siteData from '../data/siteMetadata';
import { BsTwitter } from 'react-icons/bs';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | {siteData.siteName}</title>
      </Head>

      <h1 className="text-3xl font-bold">About Us</h1>
      <div className="flex flex-col items-center justify-center text-pageText mt-24 gap-2 leading-12">
        <p className="max-w-3xl text-center font-normal text-2xl">
          {siteData.description}
        </p>
        <p>
          Background: The Indian handicraft and handloom industry engages over 23 million craftsmen. A cross-border e-commerce marketplace will allow buyers and sellers to meet at one platform for business. It will help in growing their business and the overall economy of our country.

          Summary: To develop an exclusive e-commerce platform for artisans to sell their products. The demand forecast of the items required, automatic quality checks on the items as well as Sentiment analysis with next recommendation actions for the artist shall be added.

          Objective: To promote the Indian handicraft industry globally. Providing a common platform to make, market, and sell high-quality handicrafts and goods.
        </p>
        <a
          className="text-blue-600 hover:underline flex items-center gap-1 text-xl"
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
          Twitter
        </a>
      </div>
    </>
  );
};

export default About;
