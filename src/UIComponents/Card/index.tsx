import React, { FC, ReactNode } from "react";
import "./styles.css";

interface Props {
    content: ReactNode;
  }
  
  const Card: FC<Props> = ({ content }) => {
    return (
      <div className="card shadow">
        <div>{content}</div>
      </div>
    );
  };
export default Card;
