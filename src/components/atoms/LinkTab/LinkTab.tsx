import { Tab } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

interface LinkTabProps {
    label?: string;
    href?: string;
}

export const LinkTab = (props: LinkTabProps) => {

    const history = useHistory();

    return (
        <Tab
            component="a"
            onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                event.preventDefault();
                history.push(props.href)
            }}
            {...props}
        />
    );
}