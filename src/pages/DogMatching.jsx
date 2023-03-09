import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {authActions} from "../store/auth-slice";

const DogMatching = () => {

   const dispatch = useDispatch();
   const navigate = useNavigate();

   return (
      <div>
         <h1>Dog Matching</h1>
         <button onClick={() => {
            dispatch(authActions.logout());
            navigate('/login');
         }}>Logout
         </button>
      </div>
   );
}

export default DogMatching;
