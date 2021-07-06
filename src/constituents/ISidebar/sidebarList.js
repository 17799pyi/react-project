import React from 'react';
import icon01 from '../../property/images/sidebar_icon/icon01.svg';
import icon02 from '../../property/images/sidebar_icon/icon02.svg';
import HistorycheckIcon from '../../property/images/sidebar_icon/historycheck.svg';

export const SidebarList = [
    {
        "url": "/start-new-role-play",
        "icon": icon01,
        "text": "sidebar.role_playing_with_ai",
        "name" : "role_play"
    },
    {
        "url": "/history-check-detail",
        "icon": icon02,
        "text": "sidebar.check_history",
        "name": "manage"
    },
    {
        "url": "/historycheck",
        "icon": HistorycheckIcon,
        "text": "sidebar.admin_screen",
        "name": "history"
    }
]