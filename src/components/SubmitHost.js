import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { get1Property } from '../actions/property';
import PropTypes from 'prop-types';
import { Button, Pane, Heading, Text, Paragraph, Strong, Box, Icon, InfoSignIcon, Popover, Position, Menu, Card, toaster, Dialog, Autocomplete, TextInput, TextInputField } from 'evergreen-ui'
// import message from '../message.svg';
// import message from '../sharero.png';


export class SubmitHost extends Component {
    state = {
        first_name: '',
        last_name: '',
        gender: '',
        email: '',
        message: '',
      };


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

    // onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log("change", e.target.name)
        console.log("change", e.target.value)
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { first_name, last_name, gender, email, message } = this.state;
        const lead = { first_name, last_name, gender, email, message };
        console.log("submit host lead", lead)
        this.props.addLead(lead);
        this.setState({
            first_name: '',
            last_name: '',
            gender: '',
            email: '',
            message: '',
        });
    };
    

    render() {
        const { first_name, last_name, gender, email, message } = this.state;

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
            
            <div className="container">
                <Paragraph>submithost</Paragraph>
                <div className="row">
                    <div className="col-md-4">
                        <Paragraph>左</Paragraph>
                    </div>
                    <div className="col-md-8" style={{ textAlign: "initial" }}>
                        <Paragraph>右</Paragraph>
                        <Pane border="muted" width="100%" height="100%" marginRight={16} float="left">


                        <form onSubmit={this.onSubmit}>
                        <Pane>
                        <TextInputField
                        // id="ids-are-optional"
                        label="A required text input field"
                        hint="This is a hint."
                        // required
                        description="This is a description."
                        placeholder="Placeholder text"
                        width="30%"

                        />
                        </Pane>


                        <Pane clearfix>
                        <Pane border="default" width="40%" height={80} marginRight={16} float="left">
                            <TextInputField
                            // id="ids-are-optional"
                            label="姓"
                            required
                            placeholder="田中"
                            width="100%"
                            name="last_name"
                            onChange={this.onChange}
                            // value={last_name}
                            />
                        </Pane>
                        <Pane border="muted" width="40%" height={80} marginRight={16} float="left">
                            <TextInputField
                            id="ids-are-optional"
                            label="名"
                            required
                            placeholder="太郎"
                            width="100%"
                            name="first_name"
                            onChange={this.onChange}
                            // value={first_name}
                            />
                        </Pane>
                        </Pane>

                        <Pane clearfix>
                        <Pane border="default" width="40%" height={80} marginRight={16} float="left">
                        <Autocomplete
                        title="性別"
                        onChange={changedItem => console.log(changedItem)}

                        // name="gender"
                        // onChange={this.onChange}

                        items={['男性', '女性', '答えたくない']}
                        >
                        {(props) => {
                            const { getInputProps, getRef, inputValue, openMenu } = props
                            return (
                            <TextInputField
                                label="性別"
                                placeholder="選択して下さい"
                                required
                                name="gender"
                                onChange={this.onChange}
                                value={inputValue}
                                innerRef={getRef}
                                {...getInputProps({
                                onFocus: () => {
                                    openMenu()
                                }
                                })}
                            />
                            )
                        }}
                        </Autocomplete>
                        </Pane>
                        </Pane>

                        <Pane clearfix>
                        <Pane border="muted" width="60%" height={80} marginRight={16} float="left">
                            <Pane border="muted" width="30%" height={80} marginRight={16} float="left">
                            <TextInputField
                            id="ids-are-optional"
                            label="年齢"
                            required
                            placeholder="34"
                            width="100%"
                            // name={first_name}
                            />
                            </Pane>
                            <Pane border="muted" width="40%" height={80} marginRight={16} float="left" display="flex"
                            alignItems="center"
                            // justifyContent="center"
                            >
                            {/* <Paragraph>huhu</Paragraph> */}
                            <Text>歳</Text>

                            </Pane>
                        </Pane>
                        </Pane>

                        <Pane clearfix>
                        <Pane border="default" width="40%" height={80} marginRight={16} float="left">
                        <Autocomplete
                        title="出身地"
                        onChange={changedItem => console.log(changedItem)}
                        items={['北海道', '青森県', '岩手県']}
                        >
                        {(props) => {
                            const { getInputProps, getRef, inputValue, openMenu } = props
                            return (
                            <TextInputField
                                label="出身地"
                                placeholder="選択して下さい"
                                value={inputValue}
                                innerRef={getRef}
                                {...getInputProps({
                                onFocus: () => {
                                    openMenu()
                                }
                                })}
                            />
                            )
                        }}
                        </Autocomplete>
                        </Pane>
                        </Pane>

                        <Pane clearfix>
                        <Pane border="default" width="100%" height={160} marginRight={16} float="left">
                        <TextInputField
                        id="ids-are-optional"
                        // color="#D4EEE2"
                        label="自己紹介を書いてみましょう！"
                        hint="This is a hint."
                        required
                        description="This is a description."
                        placeholder="Placeholder text"
                        width="70%"
                        />
                        </Pane>
                        </Pane>

                        <Pane clearfix>
                        <Pane border="default" width="100%" height={80} marginRight={16} float="left">

                        <Autocomplete
                        title="Fruits"
                        onChange={changedItem => console.log(changedItem)}
                        items={['Apple', 'Apricot', 'Banana', 'Cherry', 'Cucumber']}
                        >
                        {(props) => {
                            const { getInputProps, getRef, inputValue, openMenu } = props
                            return (
                            <TextInput
                                placeholder="Open on focus"
                                value={inputValue}
                                innerRef={getRef}
                                {...getInputProps({
                                onFocus: () => {
                                    openMenu()
                                }
                                })}
                            />
                            )
                        }}
                        </Autocomplete>
                        </Pane>
                        </Pane>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                            Submit
                            </button>
                        </div>
                        </form>
                        
                        </Pane>

                    </div>
                </div>
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
