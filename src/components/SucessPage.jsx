// import React from "react";

// const SuccessPage = () => {
//   return (
//     <div>
//       <h1>Success! You have signed up successfully.</h1>
//     </div>
//   );
// };

// export default SuccessPage;

import React from "react";
import { useParams } from "react-router-dom";

const SuccessPage = () => {
  const { action } = useParams();

  return (
    <div>
      <h1>Success! You have {action} successfully.</h1>
    </div>
  );
};

export default SuccessPage;
