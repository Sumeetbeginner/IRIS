import React from 'react'
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import Chip from '@mui/material/Chip';
import ScienceIcon from '@mui/icons-material/Science';
import SchoolIcon from '@mui/icons-material/School';





import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';





import ReactPlayer from 'react-player';
import myvideo from '../assets/myvideo.mp4'
import mybird from '../assets/bird.mp4'

export default function LearnBoard() {
    return (
        <div className="outer">
            <div className='mainScreen'>
                <div className='tile1'>
                    <div style={{ borderRadius: '15px', overflow: 'hidden', marginTop: 10 }}>
                        <ReactPlayer
                            url={mybird} // Replace with your video URL
                            controls={true}
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className='options'>
                        <PollOutlinedIcon sx={{ fontSize: 40, color: 'green', cursor: 'pointer' }} />
                        <SummarizeOutlinedIcon sx={{ fontSize: 40, color: 'green', cursor: 'pointer' }} />
                        <h3>In the Amazing world of Machine Learning</h3>
                    </div>
                </div>
                <div className='tile2'>
                    <CollectionsBookmarkIcon sx={{ fontSize: 60, paddingBottom: "15px", paddingTop: "15px", color: 'brown' }} />
                    <div className='descHolder'>
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar sx={{background:"green"}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Brunch this weekend?"
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                Ali Connors
                                            </Typography>
                                            {" — I'll be in your neighborhood doing errands this…"}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar sx={{background:"orange"}} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Summer BBQ"
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                to Scott, Alex, Jennifer
                                            </Typography>
                                            {" — Wish I could come, but I'm out of town this…"}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar sx={{background:"blue"}} alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Oui Oui"
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                Sandra Adams
                                            </Typography>
                                            {' — Do you have Paris recommendations? Have you ever…'}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                        </List>
                    </div>
                    <div className='chips-ui'>
                        <Chip icon={<ScienceIcon />} label="Science" color='warning' variant='outlined' />
                        <Chip icon={<SchoolIcon />} label="Tech" color='success' variant='outlined' />
                    </div>
                </div>
            </div>
            <div className='helpSection'>
                <div className='msgScreen'>
                    <div className='sample'>
                        <TipsAndUpdatesOutlinedIcon sx={{ fontSize: 40, color: 'green', cursor: 'pointer' }} />
                        <h3>How May I Help You ..?</h3>
                    </div>
                </div>
                <div className='msgSend'>
                    <input type="text" placeholder='Type a message...' />
                    <button>Ask</button>
                </div>
            </div>


            <div className='float_poll'>
                
            </div>
        </div>
    )
}
