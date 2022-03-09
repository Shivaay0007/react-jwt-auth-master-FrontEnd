import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";
import FooterPagePro from "./Footer";

const AboutPage = () => {
  return (
    <div>
      <main>
        <PageHero title="about" />
        <Wrapper className="page section section-center">
          <img src={aboutImg} alt="nice desk" />
          <article>
            <div className="title">
              <h2>our Mission</h2>
              <div className="underline"></div>
            </div>
            <p>
              To give all renters the opportunity to afford to live in the
              custom designed fully-furnished apartment of their dreams. Born in
              response to modern lifestyles, NICKSON serves to deliver
              distinctive living to all. We aim to simplify lives through
              installing design. To accomplish this, we use our knowledge of
              real estate, interior design, procurement, and logistics.
            </p>
          </article>
        </Wrapper>
        <FooterPagePro />
      </main>
    </div>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
