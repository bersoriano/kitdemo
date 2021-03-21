import React from "react";
import Image from "next/image";
import SButton from "./Button";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

export default function Profile() {
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
  }));

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const subscribe = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <div className="profile">
      <Image
        className="profilePic"
        width={270}
        height={160}
        src="/user.png"
        alt="User Profile Picture"
      ></Image>
      <div className="data">
        <span className="name">bersoriano</span>
        <div className="statistics">
          <span className="kitNumber">9 Kits</span>
          <span className="followers">101 Followers</span>
          <span className="followers">845 Item Likes</span>
        </div>
        <span className="userName">Bernardo Soriano</span>
        <span className="bio">
          I'm on a mission for delivering experiences that are easy to use, make
          people's lives better, fun and advance human capabilities.
        </span>
        <span className="website">
          <a href="www.bernardosoriano.com">www.bernardosoriano.com</a>
        </span>
      </div>
      <div className="flex"></div>
      <div className="actions">
        <SButton onClick={subscribe} label="Subscribe"></SButton>
        <div className={classes.root}>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              You got subscribed!
            </Alert>
          </Snackbar>
        </div>
      </div>
      <style jsx global>{`
        .profile {
          display: flex;
          flex-direction: row;
          padding: 5em;
        }
        .profile span {
          margin-bottom: 0.2em;
        }
        .profile .name,
        .statistics {
          font-weight: bold;
          margin-bottom: 0.5em;
        }
        .statistics {
          display: flex;
        }
        .statistics span {
          margin-right: 0.5em;
        }
        .data {
          display: flex;
          flex-direction: column;
          font-size: 1.5em;
          padding: 0 5em;
        }
        .profilePic {
          border: 1px solid red;
          border-radius: 6em;
          margin: 0 3em;
        }
        .actions {
        }
      `}</style>
    </div>
  );
}
