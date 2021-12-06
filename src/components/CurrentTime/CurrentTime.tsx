import { format } from "date-fns";
import React from "react";

// import { Container } from './styles';

const CurrentTime: React.FC = () => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timeOut = setTimeout(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  });

  const formatedTime = React.useMemo(() => {
    return format(time, "HH:mm");
  }, [time]);

  return <React.Fragment>{formatedTime}</React.Fragment>;
};

export default CurrentTime;
