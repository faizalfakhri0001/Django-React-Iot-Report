import React from 'react';
import "./Sidebar2.css";
import { Link } from 'react-router-dom';

import TvIcon from '@material-ui/icons/Tv';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SettingsIcon from '@material-ui/icons/Settings';

const Sidebar2 = () => {
    return (
        <div>
            <div className="sidebar-1">
                <Link to="/list/mantap">
                    <TvIcon />
                </Link>
                <Link to="/detail">
                    <MusicNoteIcon />
                </Link>
                <Link to="/">
                    <EmojiObjectsIcon />
                </Link>
                <Link to="/">
                    <SportsEsportsIcon />
                </Link>
                <Link to="/">
                    <TrendingUpIcon />
                </Link>
                <Link to="/">
                    <SettingsIcon />
                </Link>
            </div>
            <div className="sidebar-2">
                <Link to="/">
                    <TvIcon />
                </Link>
                <Link to="/">
                    <MusicNoteIcon />
                </Link>
                <Link to="/">
                    <EmojiObjectsIcon />
                </Link>
                <Link to="/">
                    <SportsEsportsIcon />
                </Link>
                <Link to="/">
                    <TrendingUpIcon />
                </Link>
                <Link to="/">
                    <SettingsIcon />
                </Link>
            </div>
        </div>
    );
};

export default Sidebar2;