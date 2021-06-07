import React, { useState } from 'react';

export interface ButtonGroup2Props {
  buttons: string[];
  doSomethingAfterClick: (buttonLabel: string) => void;
  defaultBackground?: string;
}

const ButtonGroup2: React.FC<ButtonGroup2Props> = ({
  buttons,
  doSomethingAfterClick,
  defaultBackground,
}) => {
  const [clickedId, setClickedId] = useState(-1);

  const handleClick = (buttonLabel: string, id: number) => {
    setClickedId(id);
    doSomethingAfterClick(buttonLabel);
  };
  return (
    <div className='.root'>
      {buttons.map((buttonLabel, index) => (
        <button
          key={index}
          name={buttonLabel}
          onClick={() => handleClick(buttonLabel, index)}
          className={index === clickedId ? 'active' : ''}
        >
          {buttonLabel}
        </button>
      ))}
      {/*{localStaticStyle}*/}
      {/*{localDynamicStyle(defaultBackground)}*/}

      <style jsx>{`
        .root {
          display: inline-flex;
        }

        button {
          border: 0;
          color: white;
          cursor: pointer;

          font-weight: 400;
          padding: 0.375rem 0.75rem;
          font-size: 1rem;
          line-height: 1.5;
        }
        button:first-of-type {
          border-radius: 8px 0 0 8px;
        }
        button:last-of-type {
          border-radius: 0 8px 8px 0;
        }
        button:hover {
          background-color: #5a6268;
        }
        button:focus {
          box-shadow: 0 0 0 0.2rem rgb(130 138 145 / 50%);
        }
        button.active {
          background-color: #545b62;
        }
      `}</style>
      <style jsx>{`
        button {
          background: ${defaultBackground ? defaultBackground : '#6c757d'};
        }
      `}</style>
    </div>
  );
};

/*
.root > *:first-child {
  border-radius: 8px 0 0 8px; // <----------- Doesn't seem to allow me to use >, translate to ".root &gt; *:first-child {"
}
.root > *:last-child {
  border-radius: 0 8px 8px 0;
}*/

const localStaticStyle = (
  <style jsx>{`
    .root {
      display: inline-flex;
    }

    button {
      border: 0;
      color: white;
      cursor: pointer;

      font-weight: 400;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      line-height: 1.5;
    }
    button:first-of-type {
      border-radius: 8px 0 0 8px;
    }
    button:last-of-type {
      border-radius: 0 8px 8px 0;
    }
    button:hover {
      background-color: #5a6268;
    }
    button:focus {
      box-shadow: 0 0 0 0.2rem rgb(130 138 145 / 50%);
    }
    button.active {
      background-color: #545b62;
    }
  `}</style>
);

const localDynamicStyle = (defaultBackground: any) => (
  <style jsx>{`
    button {
      background: ${defaultBackground ? defaultBackground : '#6c757d'};
    }
  `}</style>
);
export default ButtonGroup2;
