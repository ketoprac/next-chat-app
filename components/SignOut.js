import { IconButton } from "@material-ui/core";
import { auth } from "../firebase";
import ExitToAppIcon from '@material-ui/icons/ExitToAppRounded';

function SignOut() {
  return (
    auth.currentUser && (
      <IconButton onClick={() => auth.signOut()}>
        <ExitToAppIcon style={{color: "white"}}/>
      </IconButton>
    )
  );
}

export default SignOut;
