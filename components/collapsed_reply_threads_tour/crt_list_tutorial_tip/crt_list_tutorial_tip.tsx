// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import React from 'react';
import {FormattedMessage} from 'react-intl';

import FormattedMarkdownMessage from '../../formatted_markdown_message';
import TutorialTip from 'components/tutorial/tutorial_tip';
import {Constants, Preferences} from 'utils/constants';
import {ShortcutKey, ShortcutKeyVariant} from 'components/shortcut_key';
import {useMeasurePunchouts} from 'components/tutorial/tutorial_tip/hooks';

export const UpShortcut = () => {
    return (
        <ShortcutKey variant={ShortcutKeyVariant.Contrast}>{'Up'}</ShortcutKey>
    );
};
export const DownShortcut = () => {
    return (
        <ShortcutKey variant={ShortcutKeyVariant.Contrast}>{'Down'}</ShortcutKey>
    );
};

const CRTListTutorialTip = () => {
    const screens = [
        <div key='first-screen'>
            <h4>
                <FormattedMessage
                    id='tutorial_threads.list.title'
                    defaultMessage='Threads List'
                />
            </h4>
            <p>
                <FormattedMarkdownMessage
                    id='tutorial_threads.list.description-p1'
                    defaultMessage={'Here you’ll see a preview of all threads you’re following or participating in. Clicking on a thread in this list will open the full thread on the right.'}
                />
            </p>
            <p>
                <FormattedMessage
                    id='tutorial_threads.list.description-p2'
                    defaultMessage='Use {upKey} / {downKey} to navigate the thread list'
                    values={{
                        upKey: <UpShortcut/>,
                        downKey: <DownShortcut/>,
                    }}
                />
            </p>
        </div>,
    ];

    return (
        <TutorialTip
            placement='right'
            step={Constants.CrtTutorialSteps.LIST_POPOVER}
            tutorialCategory={Preferences.CRT_TUTORIAL_STEP}
            screens={screens}
            overlayClass='tip-overlay--threads-list'
            autoTour={true}
            punchOut={useMeasurePunchouts(['threads-list-container'], [])}
        />
    );
};

export default CRTListTutorialTip;
