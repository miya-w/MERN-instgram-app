import React from "react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import StoryList from "../StoryList";
import StoryForm from "../StoryForm";
import { Layout } from "antd";
import styles from './styles';
import { getStories } from "../../actions/stories";


const { sider, Content } = Layout;

const Home = () => {
    const [selectedId, setSelectedId] = useState(null);
    const dispatch = useDispatch();
    return(
        <Layout>
            <Sider style={style.sider} width ={400}>
                <StoryForm />
            </Sider>
            <content  style = {style.content}>
                <StoryList />
            </content>
        </Layout>
    )
} 

export default Home;