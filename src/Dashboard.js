import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import {CTX} from './Store'

const useStyles = makeStyles(theme => ({
    root: {
      margin: '50px',
      padding: theme.spacing(3, 2),
    },
    flex: {
        display: 'flex', 
        alignItems: 'center',
    },
    topicsWindow: {
        width: '30%',
        height: '300px',
        borderRight: '1px solid grey',
    },
    chatWindow: {
        width: '70%',
        height: '300px',
        padding: '20px',
    },
    chatBox: {
        width: '85%',
    },
    button: {
        width: '15%'
    }
  }));
  
export default function Dashboard() {

    const classes = useStyles();

    // CTX store
    const [allChats] = React.useContext(CTX);
    const topics = Object.keys(allChats);

    // local state
    const [activeTopic, changeActiveTopic] = React.useState(topics[0])
    const [textValue, changeTextValue] = React.useState('');

    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h4" component="h4">
                        Hit Up
                </Typography>
                <Typography variant="h5" component="h5">
                {activeTopic}
                </Typography>
                <div className={classes.flex}>
                    <div className={classes.topicsWindow}>
                        <list>
                            {
                                topics.map(topic => (
                                    <ListItem onClick={ e => changeActiveTopic(e.target.innerText)} key={topic} button >
                                        <ListItemText primary={topic} />
                                    </ListItem> 
                                )) 
                            }
                        </list>
                    </div>
                    <div className={classes.chatWindow}>
                            {
                                allChats[activeTopic].map((chat, i ) => (
                                    <div className={classes.flex} key={i}>
                                    <Chip label={chat.from} className={classes.chip} />
                                    <Typography variant='body1' gutterBottom>{chat.msg}</Typography>
                                    </div>
                                )) 
                            }
                    </div>
                </div>
                <div className={classes.flex}>
                    <TextField
                        label="Send a chat"
                        className={classes.chatBox}
                        value={textValue}
                        onChange={e => changeTextValue(e.target.value)}
                    />

                    <Button variant="contained" color="primary" className={classes.button}>
                            Send
                    </Button>
 
                </div>
            </Paper>
        </div>
    )
}








































































// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import Chip from '@material-ui/core/Chip';


// const useStyles = makeStyles(theme => ({
//     root: {
//       margin: '50px',
//       padding: theme.spacing(3, 2),
//       textAlign: 'center',
//     },
//     flex: {
//         display: 'flex',
//         alignItem: 'center',
//     },
//     topicsWindow: {
//         width: '30%',
//         height: '300px',
//         borderRight: '1px solid grey',
//     },
//     chatWindow: {
//         width: '70%',
//         height: '300px'
//     },
//     chatBox: {
//         width: '85%',
//     },
//     button: {
//         width: '15%',
//     }
//   }));
  
//   export default function Dashboard() {
//     const classes = useStyles();
  
//     return (
//       <div>
//         <Paper className={classes.root}>
//           <Typography variant="h4" component="h4">
//             hitUp
//           </Typography>
//           <Typography variant="h5" component="h5">
//             Topic placeholder
//           </Typography>
//           <div className={classes.flex}>
//                 <div className={classes.topicsWindow}>
//                     <list>
//                     {
//                         ['topic'].map(topic => (
//                             <ListItem key={topic} button>
//                                 <ListItemText primary={topic} />
//                             </ListItem>    
//                         ) )
//                     }
//                     <ListItem button>
//                         <ListItemText primary="Inbox" />
//                     </ListItem>
//                     </list>
//                 </div>
//                 <div className={classes.chatWindow}>
//                     [{from: 'user', msg: 'hello'}].map((chat,i) => (
//                         <div className={classes.flex} key={i}>
//                             <chip label={chat.from} className={classes.chip} />
//                             <Typography variant='p'>{chat.msg}</Typography>
//                         </div>
//                     ))
//                 </div>
                
//           </div>
//           <div className="class.flex">
                
//           </div>
//         </Paper>
//       </div>
//     );
//   }