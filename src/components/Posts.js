import React from 'react';
import { Button, Pane, Heading, Text, Icon, InfoSignIcon, Popover, Position, Menu, Card, toaster, Dialog, Paragraph, Strong } from 'evergreen-ui'
import { Link, NavLink } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";


const Posts = ({ posts, loading }) => {
  if (loading) {
    return (<div className="sweet-loading">
        <ClipLoader
          size={150}
          color={"rgb(54, 215, 183)"}
          loading={loading}
        />
      </div>);
  }

  return (

    <div className="row">
        {posts.map(post => (
            <div className="col-md-6">
            <NavLink key={post.id} to={`/detail/${post.id}`}>
               <Card
                elevation={1}
                hoverElevation={4}
                activeElevation={4}
                float="left"
                backgroundColor="white"
                width={380}
                height={250}
                margin={24}
                display="flex"
                justifyContent="center"
                flexDirection="column"
                key={post.id}
                >
                    <Pane marginLeft={20} justifyContent="left" flexDirection="column">
                    <img src={post.room_image1} className="detail" width="300" height="130" style={{ objectFit: "cover" }}/>
                    </Pane>
                    <Pane marginLeft={40} justifyContent="left" flexDirection="column">
                       <Paragraph  size={500} marginTop={0} marginLeft={10} style={{ textAlign: "left" }}>
                       <Strong>{post.state} {post.city}</Strong>
                       </Paragraph>
                       <Paragraph  size={500} marginTop={0} marginLeft={10} style={{ textAlign: "left" }}>
                       <Strong>{post.station}駅　徒歩{post.time_to_station1}分</Strong>
                       </Paragraph>

                       <Paragraph  size={350} marginTop={5} marginLeft={10} style={{ textAlign: "left" }}>
                       月{post.price}円
                       </Paragraph>
                   </Pane>
              </Card>
          
            </NavLink>
            </div>
        ))}
    </div>

  );
};

export default Posts;