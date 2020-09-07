import ReactDOM from "react-dom";
import React, { useEffect, useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

import styled from "styled-components";

function Radios({
  options,
  selectedOption,
  onChange,
}: {
  options: { [val: string]: string };
  selectedOption?: string;
  onChange: (_: string) => void;
}) {
  const [id] = useState(() => Math.round(Math.random() * 10000000000).toString(36));
  return (
    <>
      {Object.entries(options).map(([val, label]) => (
        <Form.Check
          inline
          key={val}
          type="radio"
          label={label}
          id={`${id}-${val}`}
          onChange={() => onChange(val)}
          checked={val === selectedOption}
        />
      ))}
    </>
  );
}

const Thumbnail = styled.img`
  // https://stackoverflow.com/a/35362074/23649
  background-image: linear-gradient(45deg, #eee 25%, transparent 25%),
    linear-gradient(-45deg, #eee 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #eee 75%),
    linear-gradient(-45deg, transparent 75%, #eee 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
`;

function App() {
  // https://stackoverflow.com/a/58056067/23649
  const img = useRef() as React.MutableRefObject<HTMLImageElement>;

  const textPlaceholder = "SOON";
  const [textInput, setTextInput] = useState<string>("");
  const text = textInput || textPlaceholder;
  const [arrowDir, setArrowDir] = useState<string>("right");
  const [textPos, setTextPos] = useState<string>("bottom");

  const [canvas] = useState(() => document.createElement("canvas"));
  useEffect(() => {
    canvas.width = 128;
    canvas.height = 128;

    // Create a path for a right-pointing arrow in the rectangle (0,0) - (1,1).
    function addArrow(ctx: CanvasRenderingContext2D, tailWidth: number, headLength: number) {
      ctx.rect(0, (1 - tailWidth) / 2, 1 - headLength, tailWidth);
      ctx.moveTo(1 - headLength, 0);
      ctx.lineTo(1, 0.5);
      ctx.lineTo(1 - headLength, 1);
      ctx.closePath();
    }

    const ctx = canvas.getContext("2d")!;
    ctx.resetTransform();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    switch (textPos) {
      case "bottom":
        break;
      case "top":
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(Math.PI);
        ctx.translate(-canvas.width / 2, -canvas.height / 2);
        break;
      case "left":
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(Math.PI / 2);
        ctx.translate(-canvas.width / 2, -canvas.height / 2);
        break;
      case "right":
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.translate(-canvas.width / 2, -canvas.height / 2);
        break;
    }
    // ctx.scale(canvas.width, canvas.height);

    // arrow
    ctx.beginPath();

    let tailWidth = 0.4;
    let headLength = 0.4;

    let regionWidth = 0.8;
    let regionHeight = 0.5;
    let regionY = 0.1;
    if (arrowDir === "up" || arrowDir === "down") {
      regionWidth = 0.5;
      headLength = 0.5;
    }
    let regionX = (1 - regionWidth) / 2;

    ctx.save();
    ctx.scale(canvas.width, canvas.height);
    switch (arrowDir) {
      case "up":
        ctx.translate(regionX, regionHeight + regionY);
        ctx.scale(regionWidth, regionHeight);
        ctx.rotate(-Math.PI / 2);
        break;
      case "down":
        ctx.translate(regionWidth + regionX, regionY);
        ctx.scale(regionWidth, regionHeight);
        ctx.rotate(Math.PI / 2);
        break;
      case "right":
      default:
        ctx.translate(regionX, regionY);
        ctx.scale(regionWidth, regionHeight);
        break;
      case "left":
        ctx.translate(regionX + regionWidth, regionY);
        ctx.scale(-regionWidth, regionHeight);
        break;
    }
    addArrow(ctx, tailWidth, headLength);
    ctx.restore();

    // draw arrow
    ctx.lineWidth = canvas.width * 0.05;
    ctx.strokeStyle = "white";
    ctx.lineJoin = "round";
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.fill();

    ctx.save();
    ctx.textBaseline = "top";
    const textAreaWidth = 0.9 * canvas.width;
    const fontSize = canvas.height * 0.35;
    ctx.font = `${fontSize}px "Roboto Condensed"`;
    let textScaleX = 1;
    const textWidth = ctx.measureText(text).width;
    if (textWidth > textAreaWidth) {
      textScaleX = textAreaWidth / textWidth;
    }
    const textAreaX = (canvas.width - textScaleX * textWidth) / 2;
    const textAreaY = canvas.height - fontSize - 0.1;
    ctx.scale(textScaleX, 1);
    ctx.fillStyle = "black";
    ctx.strokeText(text, textAreaX, textAreaY);
    ctx.fillText(text, textAreaX, textAreaY);
    ctx.restore();

    img.current!.src = canvas.toDataURL();

    // if (document.fonts && document.fonts.ready && document.fonts.ready.then) {
    //   document.fonts.load(`1px "Roboto Condensed"`).then(() => {
    //     render();
    //   });
    // } else {
    //   render();
    // }
  }, [text, arrowDir, textPos]);

  return (
    <Col md={6} className="mx-auto my-4">
      <noscript>
        <Alert variant="danger">Sorry, emoji.studio requires JavaScript!</Alert>
      </noscript>
      <form name="arrow">
        <Form.Group controlId="text" className="row">
          <Form.Label className="col-form-label col-sm-2">Text</Form.Label>
          <div className="col-sm-10">
            <Form.Control
              type="text"
              placeholder={textPlaceholder}
              value={text}
              onChange={(e) => setTextInput(e.target.value)}
            />
          </div>
        </Form.Group>
        <Form.Group className="row">
          <Form.Label className="col-form-label col-sm-2">Arrow direction</Form.Label>
          <div className="col-sm-10 pt-2">
            <Radios
              options={{ up: "Up", down: "Down", left: "Left", right: "Right" }}
              selectedOption={arrowDir}
              onChange={setArrowDir}
            />
          </div>
        </Form.Group>
        <Form.Group className="row">
          <Form.Label className="col-form-label col-sm-2">Text position</Form.Label>
          <div className="col-sm-10 pt-2">
            <Radios
              options={{ top: "Top", bottom: "Bottom", left: "Left", right: "Right" }}
              selectedOption={textPos}
              onChange={setTextPos}
            />
          </div>
        </Form.Group>
      </form>
      <Thumbnail ref={img} />
      <div>
        <Button
          variant="primary"
          type="button"
          className="mt-2"
          onClick={() => {
            const a = document.createElement("a");
            a.href = canvas.toDataURL();
            a.download = text + ".png";
            a.click();
          }}>
          Download .png
        </Button>
      </div>
    </Col>
  );
}

const root = document.body.appendChild(document.createElement("div"));
ReactDOM.render(<App />, root);
