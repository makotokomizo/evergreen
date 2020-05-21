import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { get1Property } from '../actions/property';
import PropTypes from 'prop-types';
import { Button, Pane, Heading, Text, Paragraph, Strong, Box, Icon, InfoSignIcon, Popover, Position, Menu, Card, toaster, Dialog } from 'evergreen-ui'
// import message from '../message.svg';
// import message from '../sharero.png';


export class SubmitHost extends Component {
    static propTypes = {
        // property_detail: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props);
        // console.log(props)
        // console.log(props.match.params.detailID)
        // this.props.get1Property(props.match.params.detailID);

      }

    componentDidMount() {
        // console.log(this.props.match.params.detailID)
        // console.log("detail didmount")

    }

    render() {
        // const test = this.props.match.params.detailID

        // const sharableItems_data  =this.props.property_detail.sharableItems
        // const sharableItems_data_json  =JSON.stringify(this.props.property_detail.sharableItems)
        // console.log(this.props.property)
        // console.log(typeof this.props.property_detail.sharableItems)
        // console.dir(this.props.property_detail.sharableItems);
        // this.props.property_detail.sharableItems.forEach(item => {
        //     console.log(item)
        //   })

        // console.log( sharableItems_data )
        // console.log( this.state )
        // console.log( sharableItems_data_json )
        // const list = sharableItems_data.map(obj => obj.name);

        // console.log( sharableItems_data )
        // console.log(this.props.property_detail.sharableItems.toSource() )

        
        // const amenities = sharableItems_data.map((c) => {
        //     console.log(c)
        // });
        // const numbers = [4, 2, 3, 4, 5];
        // const numbers = [{"id":4, "name":"あい"}, {"id":2, "name":"two"}];
        // console.log( typeof numbers )
        // console.log( numbers )

        // const listItems = numbers.map((number) =>
        //     console.log(number)        
        //     );
        

        // for (i in this.props.property_detail.sharableItems){
        //     console.log('ww')
        // }

        // let myProfile = this.props.chats.map(c => {
        //     const profile = c.participants.map((d) => {
        //       const profile_content = d.email
        //       return profile_content;
        //     }
        //     );
        //     const me = profile.filter(
        //       value => 
        //       value === this.props.username
        //     );
        //     const profile_name = c.participants.map((d) => {
        //       if (d.email.includes(me)) {
        //         return d.first_name;
        //       }
        //       else {
        //           return 0;
        //         }
        //     }
        //     );
        //     const firstName = profile_name.filter(
        //       value => 
        //       value !== 0
        //     );
        //     return firstName;
        //   });



        return (
            
            <div className="">
                <Paragraph>submithost</Paragraph>
            </div>
        )
    }
}

// const mapStateToProps = state => ({
//     property_detail: state.property.property_detail   //reducer index
// })

// const mapDispatchToProps = dispatch => {
//     return {
//         get1Property: (id) =>
//         dispatch(get1Property(id))
//     };
//   };

// export default connect(mapStateToProps, { get1Property })(Detail);
export default SubmitHost;
