import React, { useState } from 'react';
import { FormFields } from '../components';
import { getRandomPrompt } from '../utils';

const CreatePost = () => {

  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[30px]">Create With DALL-E AI</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-full">Generate an imaginative image through DALL-E AI and share it with the community.</p>
      </div>

      <form className="mt-16">
        <div className="flex flex-col gap-5">
          <FormFields
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="Ex: Tony Stark"
            value={form.name}
            handleChange={handleChange}
          />

          <FormFields
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
        </div>

        <div className="mt-5 flex gap-5">
          <button
            type="button"s
            className=" text-white bg-blue-500 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Generate
          </button>
        </div>

        <div className="mt-10">
          <p className="mt-2 text-[#666e75] text-[14px]">** Once you have created the image you want, you can share it with others in the community **</p>
          <button
            type="submit"
            className="mt-3 text-white bg-[#375cb0] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Share
          </button>
        </div>
      </form>

    </section>
  )
}

export default CreatePost