import axios from 'axios'
import linkImage from '/src/assets/link1.png'
import enterImage from '/src/assets/enter.png'
import speakTextImage from '/src/assets/speak-text.png'
import copyTextImage from '/src/assets/copy-text.png'
import { useState } from 'react';

const Article = () => {
    const [url, setUrl] = useState('');
    const [summarizedData, setSummarizedData] = useState('');
    const [error, setError] = useState('') ;
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setUrl(e.target.value);
    }

    const getSummary = async (e) => {
        
        e.preventDefault();

        const apiKey = import.meta.env.VITE_RAPID_API_KEY;
        const options = {
            method: 'GET',
            url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
            params: {
                url: url,
                length: '3'
            },
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
            }
        };
        try {
            setLoading(true);
            const { data } = await (async () => {
              return await axios.request(options);
            })();
            setSummarizedData(data.summary);
          } catch (error) {
            console.log('Ops: ' + error.message);
            setError(error.message);
          } finally {
            setLoading(false);
          }
        // try {
        //     setLoading(true);
        //     const response = await axios.request(options);
        //     const result = response.data.summary
        //     setSummarizedData(result);
        //     setLoading(false);
        // } catch (error) {
        //     // console.error(error);
        //     console.log('Ops: ' + error.message);
        //     setError(error.message);
        // }
    }

    // useEffect(()=>{
    //     getSummary();
    // },[])

    // a function to copy text 
    const copyToClipboard = (textToCopy) => {
        if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
            return navigator.clipboard.writeText(textToCopy).then(() => {
                alert("Copied Succesfully: " + textToCopy);
            });
            // return navigator.clipboard.writeText(textToCopy, alert("text copied successfully"));
        }
        // return Promise.reject("Opps: clip API not supported");
        alert("Opps: clip API not supported, can't copy text");
    }

    // copy Summarized Text 
    const copySummarizedText = () => {
        copyToClipboard(summarizedData);
    };

    // a function to speak out text
    const speakOutText = (textToSpeakOut, speakingLanguage) => {
        if ("speechSynthesis" in window) {
            let voiceMessage = new SpeechSynthesisUtterance();
            voiceMessage.lang = speakingLanguage;
            voiceMessage.text = textToSpeakOut;
            window.speechSynthesis.speak(voiceMessage);
        } else {
            alert(window.speechSynthesis.error() + " Sorry: Language not supported");
            console.log(window.speechSynthesis.error(), "error speaking out");
        }
    }

    // speakout the summerized text
    const speakSummarizedText  = () => {
        speakOutText(summarizedData, "en-GB");
    }

    return (
        <section className="max-w-screen-md m-auto p-4">
            <form className="flex border-2 rounded-xl shadow-xl overflow-x-hidden" onSubmit={getSummary} >
                <img src={linkImage} alt="link image" className='lg:w-12 md:w-10 w-8 mr-1' />
                <input type="text" className='flex-1 bg-blue-200 px-3 border-none outline-none font-semibold ' onChange={handleChange} />
                <button type='submit' className='w-12'>
                    <img src={enterImage} alt="enter image" className='w-full' />
                </button>
            </form>
            {!loading && !error && summarizedData!='' &&(
                <div className="flex gap-5 items-center justify-center mt-6">
                    <button className='lg:w-16 md:w-14 w-12' onClick={speakSummarizedText}>
                        <img src={speakTextImage} alt="" className='w-full' />
                    </button>
                    <button className='lg:w-16 md:w-14 w-12' onClick={copySummarizedText}>
                        <img src={copyTextImage} alt="" className='w-full' />
                    </button>
                </div>
            )}
            <div className="bg-slate-100 opacity-95 shadow my-4 mt-6 rounded-xl">
                {loading && <p>Loading ...</p>}
                {error && <p className="text-red-500">Ops, try again: {error}</p>}
                {!loading && !error && summarizedData!='' && (
                    <p className="md:text-base text-sm p-2">
                        {summarizedData}
                    </p>
                )}
            </div>
            
            <div className="max-w-lg mb-12 m-auto flex flex-col">
                <p className='my-4 md:text-lg text-sm text-slate-300 text-center'>Do you know you can translate your summarized text to any language? Yes you can, all you have to do is copy the text and hit the botton below</p>
                <a href="https://giftednathan.github.io/translator/" target="_blank" rel="noopener noreferrer" className='text-slate-50 hover:text-slate-900 md:text-base text-sm text-center font-semibold md:py-2 py-1 md:px-4 px-2 rounded-xl bg-black hover:bg-slate-200'>Transalte Summarized text to any language here!</a>
            </div>
        </section>
    )
}

export default Article