import React from "react";
import FeedbackPanel from "../FeedbackPanel/FeedbackPanel";

const NotFound = () => {
    const header = "Page not found";
    const text = "Unfortunately we couldn't find that page";

    return <FeedbackPanel header={header} text={text} />;
};

export default NotFound;
