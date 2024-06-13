import React, { useState } from 'react';
import { Loader, FormFields } from '../components';
import { getRandomPrompt } from '../utils';
import { preview } from '../assets';

const CreatePost = () => {

  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });

  const [generatingImage, setGeneratingImage] = useState(false);

  const generateImage = async () => {
    if(form.prompt) {
      try {
        setGeneratingImage(true);
        const response = await fetch('http://localhost:8080/api/v1/dalle', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({ prompt: form.prompt }),
        })

        const data = await response.json();

        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}`})
      } catch (error) {
        alert(error);
      } finally {
        setGeneratingImage(false);
      }
    } else {
      alert('Please enter the prompt.');
    }
  };

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

      <form className="mt-10">
        <div className="flex flex-col gap-5">
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

        <div className="mt-5 relative bg-gray-100 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
          <img
            src={preview}
            alt="preview"
            className="w-9/12 h-9/12 object-contain opacity-40"
          />
        </div>

        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generateImage}
            className="text-white bg-[#375cb0] font-medium text-sm w-40 px-5 py-2.5 text-center rounded-full text-nowrap min-h-button flex items-center justify-center gap-[0.3em]"
          >
            {generatingImage ? 'Generating...' : 'Generate'} {generatingImage && <Loader />}
          </button>
        </div>
      </form>

    </section>
  )
}

export default CreatePost