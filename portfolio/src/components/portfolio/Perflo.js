import React from "react";
import { Card, Icon } from "antd";

const { Meta } = Card;

const Perflo = () => {
  return (
    <>
      <Card
        cover={
          <img
            alt="Clinical Trial Finder"
            src="https://res.cloudinary.com/dejr86qx8/image/upload/v1604943238/Untitled_design_4_c8k0p8.jpg"
          />
        }
        actions={[
          <a
            href="https://www.perflo.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon type="global" key="global" />
          </a>,
        ]}
      >
        <Meta
          title={<h6>Perflo</h6>}
          description={
            <div>
              <p>
                A project team performance analytics tool, helping project
                leaders increase project success with actionable insights when
                it matters most. Projects are all about staying on track and
                preventing potential issues from derailing your project.
              </p>
              <p>
                Collaborate with a UX designer. Customized existing{" "}
                <b>HTML, CSS, and Bootstrap</b>. Developed homepage, product
                page, about page, blog page, and contact page.
              </p>
            </div>
          }
        />
      </Card>
    </>
  );
};

export default Perflo;
