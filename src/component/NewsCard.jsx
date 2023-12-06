import React from "react";
import { Card, Button } from "antd";

const { Meta } = Card;

const NewsCard = ({
  image,
  link,
  shortLink,
  publishedAt,
  sourceName,
  title,
  _id,
}) => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={
      <img
        alt="example"
        src={
          image !== ""
            ? image
            : "https://i0.wp.com/kennyleeholmes.com/wp-content/uploads/2017/09/no-image-available.png?ssl=1"
        }
      />
    }
    action={[
      <Button>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </Button>,
    ]}
  >
    <Meta title={title} description="" />
    <Meta title={publishedAt} description="" />
    <Meta title={sourceName} description="" />
  </Card>
);
export default NewsCard;
