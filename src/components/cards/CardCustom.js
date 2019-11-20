import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import ArrowUpward from '@material-ui/icons/ArrowUpward';

class CardCustom extends Component {

    render() {

        const { Status, cnt, Rate, checkpoint } = this.props.data;
        this.check = (st) => {
            if (st == "Go") {
                return <div style={{ color: 'green' }}>Go</div>
            } else {
                return <div style={{ color: 'red' }}>Danger</div>
            }
        }
        return (
            <div style={{ margin: 12 }}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            <span style={{ fontWeight: 'bold' }}>
                                {checkpoint}
                            </span>
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            People crossed
                        </Typography>

                        <Typography variant="h4" component="h4">
                            {cnt}{' '}<ArrowUpward/>
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Rate
                        </Typography>

                        <Typography variant="h4" component="h4">
                            {Rate} {' '}/10s
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Status
                        </Typography>

                        <Typography variant="h4" component="h4">
                            {this.check(Status)}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default CardCustom;