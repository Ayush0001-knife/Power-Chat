import {isValidUsername} from "6pp";

export const usernameValidator = (username) => {
      if(!isValidUsername(username)){
            return{
                  error:true,
                  errorMessage:"Invalid Username"
            }
      }
};
