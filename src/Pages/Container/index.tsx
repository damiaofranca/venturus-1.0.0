import React, { ReactNode } from "react";
import { ContainerWrapper } from "./styles";

const Container: React.FC<{ children: ReactNode }> = ({ children }) => {
	return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
