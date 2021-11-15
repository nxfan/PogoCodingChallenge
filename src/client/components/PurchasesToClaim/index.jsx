import React  from 'react';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";


const PurchasesToClaim = (props) => {
  const {transactionsToClaim, claimPurchase} = props
  return(
      <div className="row">
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {
            transactionsToClaim.map(transactionToClaim =>
              <ListItem key={transactionToClaim.transaction_id}>
                <ListItemAvatar style={{'paddingRight': '15px', 'textAlign':'center'}}>
                  <p style={{'fontSize': 'x-large', 'margin': '0px'}}>{transactionToClaim.amount} </p>
                  pts
                </ListItemAvatar>
                <ListItemText primary={transactionToClaim.name} secondary={transactionToClaim.date}/>
                <Button variant='contained' size='large' color='primary'
                        onClick={()=>claimPurchase(transactionToClaim)}>
                  claim
                </Button>
            </ListItem>)
          }

        </List>
      </div>
  );
};

export default PurchasesToClaim;