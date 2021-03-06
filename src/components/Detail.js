import React, { Component } from 'react'
import { connect } from 'react-redux';
import { get1Property } from '../actions/property';
import PropTypes from 'prop-types';
import { Button, Pane, Heading, Text, Paragraph, Strong, Box, Icon, InfoSignIcon, Popover, Position, Menu, Card, toaster, Dialog } from 'evergreen-ui'
import message from '../message.svg';
// import message from '../sharero.png';


export class Detail extends Component {
    static propTypes = {
        property_detail: PropTypes.object.isRequired,
        sharable_items: PropTypes.object.isRequired,
    }

    // constructor(props) {
    //     super(props);

    //     // console.log(props)
    //     // console.log(props.match.params.detailID)
    //     console.log("jjjjjjjjjjjjjjj")

    //   }
    

    // componentDidMount() {

    //     // console.log(this.props.match.params.detailID)
    //     console.log("detail didmount")

    // }

    componentDidMount() {
        this.props.get1Property(this.props.match.params.detailID);

        // this.props.get1Property(1);
    }

    render() {
        const test = this.props.match.params.detailID

        // const sharableItems_data  =this.props.property_detail
        const sharableItems_data  =this.props.sharable_items
        // const sharableItems_data_json  =JSON.stringify(this.props.property_detail.sharableItems)
        // console.log(this.props.property)
        // console.log(typeof this.props.property_detail.sharableItems)
        // console.dir(this.props.property_detail.sharableItems);
        // this.props.property_detail.sharableItems.forEach(item => {
        //     console.log(item)
        //   })

        // console.log( this.state )
        // console.log( sharableItems_data_json )
        // const list = sharableItems_data.map(obj => obj.name);

        // console.log( sharableItems_data )
        // console.log(this.props.property_detail.sharableItems.toSource() )


        // --------------------------------------------------↓this part I mentioned
        
        let amenities = sharableItems_data.map((c) => {
            return (
                <Pane
                // elevation={0}
                float="left"
                backgroundColor="white"
                width={70}
                height={60}
                margin={5}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                >
                <Text><img src={c.image} className="detail" width="40%" height="auto" style={{ objectFit: "cover" }}/></Text>
                <Text size={300}>{c.name}</Text>
                </Pane>
                    
              );
        });
        // const numbers = [4, 2, 3, 4, 5];
        const numbers = [{"id":4, "name":"あい"}, {"id":2, "name":"two"}];
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
            <div className="container">
                <Pane>
                <img src={this.props.property_detail.room_image1} className="detail" width="100%" height="80%" style={{ objectFit: "cover" }}/>
                </Pane>
                <div className="row">

                <div className="col-md-12" style={{ marginTop: "8vh" }}>
                {/* <Heading size={600} marginTop="default" style={{ textAlign: "left" }}>利用可能期間</Heading>
                <Paragraph size={500} marginTop="default" style={{ textAlign: "left" }}>
                　　{this.props.property_detail.date_available} から
                </Paragraph> */}
                <Heading size={600} marginTop="default" style={{ textAlign: "left" }}>{this.props.property_detail.title}</Heading>
                {/* <Paragraph size={500} marginTop="default" style={{ textAlign: "left" }}>
                　　{this.props.property_detail.title}
                </Paragraph> */}
                <Pane　height={30}
                    width={240}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    border="none">
                    </Pane>
                
                
                {/* <Strong size={3500} marginTop="default">利用可能期間</Strong> */}
                {/* <p>{this.props.property_detail.age}才</p>
                <p>{this.props.property_detail.state}</p>
                <Paragraph size={500} marginTop="default">
                    {this.props.property_detail.state}                
                </Paragraph> */}
                {/* <Text size={500}>{this.props.property_detail.state}  </Text> */}
                <Heading size={600} marginTop="default" style={{ textAlign: "left" }}>ホームシェア利用料</Heading>
                <Paragraph  size={500} marginTop="default" style={{ textAlign: "left" }}>
                　　{this.props.property_detail.price}円(月額)
                </Paragraph>
                <Pane　height={30}
                    width={240}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    border="none">
                </Pane>

                <Heading size={600} marginTop="default" style={{ textAlign: "left" }}>場所</Heading>
                <Paragraph  size={500} marginTop="default" style={{ textAlign: "left" }}>
                　　{this.props.property_detail.state} {this.props.property_detail.city}
                </Paragraph>
                <Paragraph  size={500} marginTop="default" style={{ textAlign: "left" }}>
                　　最寄駅：{this.props.property_detail.station}　徒歩{this.props.property_detail.time_to_station1}分
                </Paragraph>
                <Pane　height={30}
                    width={240}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    border="none">
                </Pane>


                {/* <p style={{ textAlign: "left" }}>
                {this.props.property_detail.state} {this.props.property_detail.city}
                </p>
                <p style={{ textAlign: "left" }}>
                最寄駅：{this.props.property_detail.station}駅　徒歩{this.props.property_detail.time_to_station}分
                </p> */}
                <Heading size={600} marginTop="default" marginBottom={18} style={{ textAlign: "left" }}>アメニティ</Heading>


                <Pane clearfix>
                {amenities}
                </Pane>



                {/* <Paragraph  size={500} marginTop="default" style={{ textAlign: "left" }}>
                {this.props.property_detail.sharableItems} 

                <img src={message} className="detail" width="10%" height="10%"/>

                </Paragraph> */}

                {/* <Paragraph  size={500} marginTop="default" style={{ textAlign: "left" }}>
                <img src={message} className="detail" width="10%" height="10%"/>
                <Text>テスト</Text>
                </Paragraph> */}


                {/* <Pane　height={30}
                    width={240}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    border="default">
                <Paragraph  size={500} marginTop="default" style={{ textAlign: "left" }}>
                <img src={message} className="detail" width="30%" height="30%"/>
                </Paragraph>                
                </Pane> */}

                {/* <p>{amenities}</p>
                <p>{test}</p>
                <p>{test}</p> */}
                </div>

                {/* <div className="col-md-4">
                <p>detail</p>
                <Strong size={500} marginTop="default">利用可能期間</Strong>

                <p>{this.props.property_detail.age}才</p>
                <p>{this.props.property_detail.state}</p>
                <Paragraph size={500} marginTop="default">
                    {this.props.property_detail.state}                
                </Paragraph>

                <p>{this.props.property_detail.city}</p>
                <p>{this.props.property_detail.station}駅</p>
                <p>{this.props.property_detail.time_to_station}分</p>
                <p>{this.props.property_detail.state}</p>
                <p>{test}</p>
                <p>{test}</p>
                <p>{test}</p>
                </div> */}

                {/* <div className="col-md-4" style={{ marginTop: "4vh", marginBottom: "4vh" }}>

                <Pane clearfix>
                <Pane
                    elevation={4}
                    padding={16} 
                    margin={24}
                    float="center"
                    width={300}
                    height={820}
                    margin={24}
                    // display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    style={{ margin: "auto" }}
                >
                <Paragraph  size={500} marginTop="default" style={{  }}>
                <img src={this.props.property_detail.yourImage} className="detail" width="100%" height="auto"/>
                </Paragraph>  

                <Heading size={600} marginTop="default" style={{ textAlign: "left" }}>{this.props.property_detail.firstName}, {this.props.property_detail.age}歳</Heading>
                <Paragraph style={{ textAlign: "right" }}>{this.props.property_detail.gender}</Paragraph>




                <Heading size={400} marginTop="default" style={{ textAlign: "left" }}>プロフィール</Heading>
                <Paragraph  size={400} marginTop="default" style={{ textAlign: "left" }}>
                　　出身地：{this.props.property_detail.birthplace}
                </Paragraph>

                <Paragraph  size={400} marginTop="default" style={{ textAlign: "left" }}>
                　　私は{this.props.property_detail.iam}
                </Paragraph>

                <Paragraph  size={400} marginTop="default" style={{ textAlign: "left" }}>
                　　自己紹介{this.props.property_detail.profile}
                </Paragraph>

                <Paragraph  size={400} marginTop="default" style={{ textAlign: "left" }}>
                　　仕事{this.props.property_detail.companyName}　現在も{this.props.property_detail.workingNow}
                </Paragraph>

                <Pane　height={30}
                    width={240}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    border="none">
                </Pane>
                <Heading size={400} marginTop="default" style={{ }}>{this.props.property_detail.firstName}にコンタクトを取る</Heading>

                </Pane>
                </Pane>
                </div> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    property_detail: state.property.property_detail,   //reducer index
    sharable_items: state.property.sharable_items   //reducer index
})

// const mapDispatchToProps = dispatch => {
//     return {
//         get1Property: (id) =>
//         dispatch(get1Property(id))
//     };
//   };

export default connect(mapStateToProps, { get1Property })(Detail);
