import React, { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { MagnifyingGlass } from "react-loader-spinner";
import { Grow, Typography } from "@mui/material";
import NotFound from "./NotFound";
import { useParams } from "react-router-dom";
import { useActions } from "../hooks/useActions";

const output = (arr: string[], name: string) => {
  return arr.map((elem, index) => {
    return (
      <p key={index}>
        {name}: {elem}
      </p>
    );
  });
};

const Result = () => {
  const { data, error, loading } = useTypedSelector((state) => state.word);
  const { fetchWord } = useActions();
  const { word } = useParams();
  useEffect(() => {
    fetchWord(word as string);
  }, [word]);
  if (loading) {
    return (
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <MagnifyingGlass
          visible={true}
          height="180"
          width="180"
          ariaLabel="MagnifyingGlass-loading"
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="white"
          color="#000000"
        />
      </div>
    );
  }
  if (error) {
    return (
      <>
        {" "}
        <NotFound />
      </>
    );
  }
  return (
    <Grow in={true}>
      <div
        style={{
          display: "flex",
          width: "80%",
          margin: "0 auto",
          justifyContent: "space-between",
        }}
      >
        {data.map((element, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                width: `${100 / data.length - 2}%`,
                margin: "0 auto",
                textAlign: "center",
                border: "2px solid rgb(44, 176, 123)",
                boxShadow: "grey 0 0 3px",
                borderRadius: "5px",
                backgroundColor: "rgb(251,251,251)",
              }}
            >
              <Typography>
                <u>{element.word.toUpperCase()}</u>
              </Typography>
              <Typography
                style={{
                  borderTop: "2px solid secondary",
                  boxSizing: "border-box",
                }}
              >
                Phonetic: {element.phonetic}{" "}
              </Typography>
              {element.phonetics.map((phonetic) => {
                return (
                  <>
                    <Typography> {phonetic.text}</Typography>
                    <div>
                      <audio
                        controls
                        src={phonetic.audio}
                        style={{ width: "90%" }}
                      />
                    </div>
                  </>
                );
              })}
              {element.meanings.map((meaning) => {
                return (
                  <>
                    <Typography>
                      <b>Part of speech: </b>
                      {" " + meaning.partOfSpeech}
                    </Typography>
                    <Typography>
                      {output(meaning.antonyms, "Antonym")}
                    </Typography>
                    <Typography>
                      {output(meaning.synonyms, "Synonym")}
                    </Typography>
                    <Typography>
                      {" "}
                      {meaning.definitions.length && (
                        <>
                          <b>Definitions:</b>
                          {meaning.definitions.map((elem, index) => {
                            return <p key={index}>{elem.definition}</p>;
                          })}
                        </>
                      )}
                    </Typography>
                    <Typography>
                      {" "}
                      {meaning.definitions.length && (
                        <>
                          <b>Example:</b>
                          {meaning.definitions.map((elem, index) => {
                            return <p key={index}>{elem.example}</p>;
                          })}
                        </>
                      )}
                    </Typography>
                    <Typography>
                      {" "}
                      <i>Antonyms:</i>
                      {meaning.definitions.map((elem, index) => {
                        return (
                          <p key={index}>{elem.antonyms.map((elem) => elem)}</p>
                        );
                      })}
                    </Typography>
                    <Typography>
                      {" "}
                      <i>Synonyms:</i>
                      {meaning.definitions.map((elem, index) => {
                        return (
                          <p key={index}>{elem.synonyms.map((elem) => elem)}</p>
                        );
                      })}
                    </Typography>
                  </>
                );
              })}
              <p>License:</p>
              <a href={element.license.url} rel="noreferrer" target="_blank">
                {element.license.name}
              </a>
            </div>
          );
        })}
      </div>
    </Grow>
  );
};

export default Result;
