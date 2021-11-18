import { useQuery } from 'react-query';
import axios from 'axios';

const fetchImage = async (category, name, type) => {
    const { config } = await axios.get(`${process.env.REACT_APP_API_URL}/${category}/${name}/${type}`)
    return config.url;
}

export default function useQueryImage(cat, name, type) {
    return useQuery([`${type}`, name], () => fetchImage(cat, name, type), { staleTime: 2000000, cacheTime: 2000000 })
}