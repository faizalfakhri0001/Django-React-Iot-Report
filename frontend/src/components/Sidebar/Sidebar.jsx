import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css";

import BlurCircularIcon from '@material-ui/icons/BlurCircular';
import PersonIcon from '@material-ui/icons/Person';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import WidgetsIcon from '@material-ui/icons/Widgets';
import SettingsIcon from '@material-ui/icons/Settings';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

import IconButton from '@material-ui/core/IconButton';
const Sidebar = () => {
    const [Open, SetOpen] = useState(false);

    return (
        <div>
            <div className={`sidebar ${Open ? '' : 'close'}`}>
                <div className="head">
                    <IconButton onClick={() => SetOpen(!Open)}>
                        <BlurCircularIcon />
                    </IconButton>
                </div>
                <div className="content">
                    <Link to="/">
                        <PersonIcon />
                    </Link>
                    <Link to="/detail">
                        <TrendingUpIcon />
                    </Link>
                    <WidgetsIcon />
                    <SportsEsportsIcon />
                    <SettingsIcon />
                </div>
                <div className="foot">
                    <Link to="/login">
                        <PowerSettingsNewIcon />
                    </Link>
                </div>
            </div>
            <div className="sidebar-toggle">
                <IconButton onClick={() => SetOpen(!Open)}>
                    <BlurCircularIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default Sidebar;