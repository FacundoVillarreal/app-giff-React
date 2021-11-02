import react from "react";
import { useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: flex;
  margin: 0 auto;
  border-color: red;
`;

function Spinner() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");

    return (
        <div className="sweet-loading">
            <ClipLoader color={color} loading={loading} css={override} size={50} />
        </div>
    );
}

export default Spinner;