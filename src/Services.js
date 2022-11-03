import React, { useState } from "react";
import "./Services.css";

function Service() {
  const [selectedFile, setSelectedFile] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [predictedPlantDisease, setPredictedPlantDisease] = useState("");
  const [perdictedPlant, setPerdictedPlant] = useState("");

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = () => {
    const formData = new FormData();
    formData.append("File", selectedFile);
    fetch(`${process.env.REACT_APP_BACKEND_SERVER}`, {
      method: "POST",
      body: formData,
      protocol: "http:",
      referrerPolicy: `${process.env.REACT_APP_BACKEND_SERVER}`,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        //console.log(result.dis);
        console.log(result.disease);
        console.log(result.plant);

        setPredictedPlantDisease(result.disease);
        setPerdictedPlant(result.plant);

        console.log(perdictedPlant);
        console.log(predictedPlantDisease);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setIsSubmitted(true);
  };

  return (
    <div className="service component__space" id="Services">
      <div className="heading">
        <h1 className="heading">Our Service</h1>
        <p className="heading p__color">Detect the diease your plant has</p>
        <p className="heading p__color"></p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <input
              type="file"
              name="file"
              id="fileUpload"
              hidden
              onChange={changeHandler}
            />
            <label htmlFor="fileUpload">
              <div className="service__box pointer">
                {/* place File here */}

                <div className="icon">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    align="center"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                </div>
                <div className="service__meta">
                  <h1 className="service__text">Upload Image</h1>
                  <p className="p service__text p__color">
                    Upload the Image of the Leaf that has
                  </p>
                  <p className="p service__text p__color">
                    to be Tested for Disease Detection.
                  </p>
                </div>
              </div>
            </label>
            <button
              onClick={handleSubmission}
              style={{
                fontSize: 20,
                backgroundColor: "#f9004d",
                padding: "15px 32px",
                margin: 0,
                border: "none",
                borderRadius: "4px",
              }}
            >
              Submit
            </button>
            {isSubmitted ? (
              <div>
                <h1
                  style={{
                    textAlign: "center",
                    paddingTop: 20,
                    fontSize: 30,
                  }}
                >
                  Predicted Plant Disease
                </h1>
                <h1
                  style={{
                    textAlign: "center",
                    paddingTop: 28,
                  }}
                >
                  {perdictedPlant} {predictedPlantDisease}
                </h1>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
