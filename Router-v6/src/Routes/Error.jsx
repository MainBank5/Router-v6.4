import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    
  return (
    <div>
        <h1>Opps!!</h1>
        <p>Sorry an Unexpected Error Occured! 
          <br />
        <i>{error.status}:{error.statusText}</i>
        </p>

        
    </div>
  )
}

export default Error;