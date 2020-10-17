import React from 'react';
import { Button, Pane, Heading, Text, Icon, InfoSignIcon, Popover, Position, Menu, Card, toaster, Dialog, Paragraph, Strong } from 'evergreen-ui'
import { Link, NavLink } from "react-router-dom";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    // <ul className='list-group mb-4'>
    //     {posts.map(post => (
    //   <li key={post.id} className='list-group-item'>
    //       {post.title}
    //     </li>
    //     ))}
    // </ul>
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
                // alignItems="center"
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

    // <div className="container">
    //   {posts.map(post => (
    //     <NavLink key={post.id} to={`/detail/${post.id}`}>
    //         <Card
    //         elevation={1}
    //         hoverElevation={4}
    //         activeElevation={4}
    //         float="left"
    //         backgroundColor="white"
    //         width={350}
    //         height={250}
    //         margin={24}
    //         display="flex"
    //         justifyContent="center"
    //         // alignItems="center"
    //         flexDirection="column"
    //         key={post.id}
    //     >
    //         </Card>
        
    //     </NavLink>
    //   ))}
    // </div>
    // <NavLink key={posts.id} to={`/detail/${posts.id}`}>
    //     <Card
    //         elevation={0}
    //         hoverElevation={4}
    //         activeElevation={4}
    //         float="left"
    //         backgroundColor="white"
    //         width={350}
    //         height={250}
    //         margin={24}
    //         display="flex"
    //         justifyContent="center"
    //         // alignItems="center"
    //         flexDirection="column"
    //         key={posts.id}
    //     >
    //     <span>
    //     <img src={posts.room_image1} className="detail" width="300" height="130" style={{ objectFit: "cover" }}/>
        
    //     </span>
    //     <Pane marginLeft={20} justifyContent="left" flexDirection="column">
    //         <Paragraph  size={500} marginTop={0} marginLeft={10} style={{ textAlign: "left" }}>
    //         <Strong>{posts.state} {posts.city}</Strong>
    //         </Paragraph>
    //         <Paragraph  size={500} marginTop={0} marginLeft={10} style={{ textAlign: "left" }}>
    //         <Strong>{posts.station}駅　徒歩{posts.time_to_station1}分</Strong>
    //         </Paragraph>

    //         <Paragraph  size={350} marginTop={5} marginLeft={10} style={{ textAlign: "left" }}>
    //         月{posts.price}円
    //         </Paragraph>
    //     </Pane>
    //     </Card>
    // </NavLink>

  );
};

export default Posts;