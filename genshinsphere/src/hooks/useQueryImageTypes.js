import { useQuery } from 'react-query';
import axios from 'axios';

const fetchImageTypes = async (category, name) => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/${category}/${name}/images`)
    return data;
}

export default function useQueryImageTypes(cat, name) {
    return useQuery(["imageTypes", name], () => fetchImageTypes(cat, name), { staleTime: 2000000, cacheTime: 2000000 })
}