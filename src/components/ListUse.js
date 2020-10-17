import React, { useState, useEffect }  from 'react';
import { Button, Pane, Heading, Text, Icon, InfoSignIcon, Popover, Position, Menu, Card, toaster, Dialog, Paragraph, Strong } from 'evergreen-ui'
import { Link, NavLink } from "react-router-dom";
// import Detail from './Detail';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProperty } from '../actions/property';
// import Image from 'react-bootstrap/Image'
import ProgressiveImage from "react-progressive-image-loading";
import axios from 'axios';
import Posts from './Posts';
import Pagination from './Pagination';

const ListUse = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(() => {
        const fetchPosts = async () => {
          setLoading(true);
          const res = await axios.get('https://sharero.co/property/api/list/');
        //   this.props.getProperty();
        //   setPosts(this.props);
          setPosts(res.data);
          setLoading(false);
        };
    
        fetchPosts();
      }, []);
    
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    console.log(posts);

    return (
        <div className='mt-5'>
          {/* <h1 className='text-primary mb-3'>My Blog</h1> */}
          <Posts posts={currentPosts} loading={loading} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </div>
      );
    
}

// const mapStateToProps = state => ({
//     property: state.property.property   //reducer index
// })

// export default connect(mapStateToProps, { getProperty })(ListUse);
export default ListUse;