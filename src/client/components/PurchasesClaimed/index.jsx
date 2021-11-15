import React  from 'react';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";


const PurchasesClaimed = (props) => {
  const {transactionsClaimed} = props;
  return(
      <div className="row">
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {
            transactionsClaimed.map(transactionClaimed =>
              <ListItem key={transactionClaimed.transaction_id}>
                <ListItemAvatar style={{'paddingRight': '15px', 'textAlign':'center'}}>
                  <p style={{'fontSize': 'x-large', 'margin': '0px'}}>{transactionClaimed.amount} </p>
                  pts
                </ListItemAvatar>
                <ListItemText primary={transactionClaimed.name} secondary={transactionClaimed.date}/>
            </ListItem>)
          }

        </List>
      </div>
  );
};

export default PurchasesClaimed;