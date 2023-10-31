import { useState } from "react";
import { Loading } from "ui";

const Index = () => {
  const [tattooArts, setTattooArts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div>

    </div>
  )
};

Index.getInitialProps = async () => ({
  namespacesRequired: ["header", "footer", "sidebar"],
});

export default Index;
