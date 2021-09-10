import React from "react";
import { Card, Icon } from "antd";

const { Meta } = Card;

const TheObservatory = () => {
  return (
    <>
      <Card
        cover={
          <img
            alt="The Observatory Shop"
            src="https://res.cloudinary.com/dejr86qx8/image/upload/v1604943757/Untitled_design_3_uy9coh.jpg"
          />
        }
        actions={[
          <a
            href="https://theobservatoryshop.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon type="global" key="global" />
          </a>,
        ]}
      >
        <Meta
          title={<h6>The Observatory Shop</h6>}
          description={
            <div>
              <p>
                An e-commerce online store located in New York. Selling yarn,
                clothing, accessories, yarn tools, candles, books, and yarn
                workshop.
              </p>
              <p>
                Used <b>Fixma</b> to design the website. Customized existing{" "}
                <b>HTML, CSS, and jQuery</b> code from Shopify. Created variant
                selector feature on a single product page. Created a
                customizable template page. Colllapleted to the marketing team to researched customers and competitors
                for analysis and user experience.
              </p>
            </div>
          }
        />
      </Card>
    </>
  );
};

export default TheObservatory;
