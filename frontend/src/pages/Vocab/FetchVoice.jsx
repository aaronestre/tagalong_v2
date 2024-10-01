import axios from "axios";

export const fetchVoice = async (text) => {
    try {
      const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/eleven/voice`, {
        text: text,
      }, {
        responseType: 'arraybuffer'
      });
      const audioBlob = new Blob([response.data], { type: 'audio/mpeg' });
      const audioUrl = URL.createObjectURL(audioBlob);
      
      const audio = new Audio(audioUrl);  
      audio.play();
    } catch (error) {
      console.error('Error fetching voice:', error);
    }
  };