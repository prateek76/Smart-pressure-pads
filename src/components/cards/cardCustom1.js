import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class CardCustom1 extends Component {

    render() {

        const { cnt, what } = this.props.data;
        
        return (
            <div style={{ margin: 12 }}>
                <Card>
                    <CardContent>
                        <Typography variant="h2" component="h2">
                            {what}
                        </Typography>

                        <Typography variant="h4" component="h4">
                            {cnt}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default CardCustom1;