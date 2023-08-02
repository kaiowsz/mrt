"use client"

import { useState, useEffect } from "react"
import PromptCard from "./PromptCard"
import Loader from "./Loader"

const PromptCardList = ({ data, handleTagClick }: any) => {

  return (
    <div className="mt-16 prompt_layout">
      {data.map((post: any) => (
        <PromptCard key={post._id} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  )
}

const Feed = () => {
  
  const [searchText, setSearchText] = useState<string>("")
  const [posts, setPosts] = useState<any>([])

  const handleSearchChange = (event: any) => {

  }

  
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt")
      const data = await response.json()
      setPosts(data)
    }

    fetchPosts()
  }, [])


  
  return (
    <section className="feed">
      {console.log(posts.length)}

      <form className="relative w-full flex-center">
        <input type="text" 
        placeholder="Search for a tag or a username" 
        value={searchText} 
        onChange={handleSearchChange} 
        required 
        className="search_input peer" />
      </form>
      
      {posts.length === 0 && <Loader/>}
      <PromptCardList data={posts} handleTagClick={() => {}} />

    </section>
  )
}

export default Feed