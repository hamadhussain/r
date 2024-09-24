// import * as React from 'react';
// import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// function CircularProgressWithLabel(props) {
//   return (
//     <Box sx={{ position: 'relative', display: 'inline-flex' }}>
//       <CircularProgress variant="determinate" {...props} />
//       <Box
//         sx={{
//           position: 'absolute',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           top: 0,
//           left: 0,
//           bottom: 0,
//           right: 0,
//         }}
//       >
//         <Typography variant="caption" component="div" sx={{ color: 'text.secondary' }}>
//           {`${Math.round(props.value)}%`}
//         </Typography>
//       </Box>
//     </Box>
//   );
// }

// export default function CircularWithValueLabel() {
//   const [progress, setProgress] = React.useState(10);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
//     }, 800);
//     return () => clearInterval(timer);
//   }, []);

//   return <CircularProgressWithLabel value={progress} />;
// }

// import * as React from 'react';
// import CircularProgress from '@mui/material/CircularProgress';
// // import Box from '@mui/material/Box';

// export default function CircularIndeterminate() {
//   return
//   // (
//     // <Box sx={{ display: 'flex' }}>
//       <CircularProgress />
//   //   </Box>
//   // );
// }

import React from "react";
import { ColorRing } from "react-loader-spinner";
const Progress = () => {
  return (
    <div className="h-screen flex justify-center items-center text-center">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        color={"white"}
      />
    </div>
  );
};

export default Progress;
