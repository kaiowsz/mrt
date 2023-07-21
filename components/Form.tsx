import Link from "next/link";
import React from "react"

interface FormProps {
  type: string;
  post: { prompt: string; tag: string; };
  setPost: React.Dispatch<React.SetStateAction<{ prompt: string; tag: string; }>>;
  submitting: boolean;
  handleSubmit: (event: any) => Promise<any>;
}

const Form = ({ type, post, setPost, submitting, handleSubmit }: FormProps) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left blue_gradient">{type} Post</h1>

      <p className="desc text-left max-w-md">{type} and share your thoughts with the world, and let your imagination run wild without limits.</p>

      <form onSubmit={handleSubmit} className="mt-10 w-full mx-w-2xl flex flex-col gap-7 glassmorphism">
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">Your brilliant thought</span>

          <textarea
          value={post.prompt}
          onChange={(event) => setPost({...post, prompt: event.target.value})}
          placeholder="Write your prompt here..."
          required
          className="form_textarea"
          >

          </textarea>
        </label>


        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">Tag <span className="font-normal"> (#product, #webdevelopment, #idea)</span></span>

          <input
          value={post.tag}
          onChange={(event) => setPost({...post, tag: event.target.value})}
          placeholder="#tag"
          required
          className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link className="text-gray-500 text-sm" href="/">Cancel</Link>

          <button type="submit" disabled={submitting}>{submitting ? `${type}...` : type}</button>
        </div>

      </form>
    </section>
  )
}

export default Form