import React from 'react'
import SideCard from '../../components/UI/sidecard';
import MainPost from './mainpost'
import './posts.css'
// import Card from '../components/UI/card'

function Posts(props) {
    const url = "https://jsonplaceholder.typicode.com/posts/";

    return (
        <section className="postsBody">
            <MainPost 
                title='Some random title'
                author='Dr. Shamukh'
                timestamp='Friday'
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of LoremIpsum."
            />
            <div className="sideBar">
                <SideCard 
                    title='Some random title'
                    author='Dr. Shamukh'
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of LoremIpsum."
                />
                <SideCard 
                    title='Some other title'
                    author='Dr. Shamukh'
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of LoremIpsum."
                />
            </div>
        </section>
    )
}

export default Posts;
