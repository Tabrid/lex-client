"use client";

import { FacebookProvider, CustomChat } from 'react-facebook';

const FacebookMsg = () => {
    return (
        <FacebookProvider appId="1026539548498333" chatSupport>
            <CustomChat pageId="163874773465514" minimized={true} />
        </FacebookProvider>
    );
};

export default FacebookMsg;